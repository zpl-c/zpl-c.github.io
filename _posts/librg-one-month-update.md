---
title: 'librg - one month update!'
excerpt: 'Welcome everybody to our second post! First of all we would like to give you guys updates about our current status, and what we have been doing for the past month. And oh boy, that was one hell of a month!'
date: '2017-10-11T00:00:00.000Z'
author: inlife
---

Welcome everybody to our second post!

First of all we would like to give you guys updates about our current status, and what we have been doing for the past month. And oh boy, that was one hell of a month!

Lest start with nice list of things that we planned to do:
* Multi-threaded world reconstruction.
* Re-visit and revamp all memory allocation strategies.
* Add support of entity cooling, decreasing the number of updates sent.
* Add ability to reject all possible built-in events.
* Add fields: peer and "custom" pointer to the event structure, possibly giving them more potential.
* Consider single-var context representation and context switching.
* Add more assertions to possible user inputs.
* And of course various performance optimizations.

So, concluding the list above, we had 2 major tasks, refactor the library, to support contexts, or in other words, make it thread-safe. And second one, refactor the component system. The component system refactor was not actually mentioned above, but it was needed due to context implementation, and the way how components worked before.

```c
#define LIBRG_IMPLEMENTATION
#define LIBRG_DEBUG
#include <librg.h>

typedef struct { u32 bar; } foo;

void custom_components(librg_ctx_t *ctx) {
    librg_component_register(ctx, librg_component_last, sizeof(foo));
}

void on_connect_accepted(librg_event_t *event) {
    librg_log("someone connected to the server!\n");
}

int main() {
    // initialization
    librg_ctx_t ctx = {0};

    ctx.tick_delay   = 32;
    ctx.mode         = LIBRG_MODE_SERVER;
    ctx.world_size   = zplm_vec3(5000.0f, 5000.0f, 0.0f);

    librg_init(&ctx, custom_components);

    // adding event handlers
    librg_event_add(&ctx, LIBRG_CONNECTION_ACCEPT, on_connect_accepted);

    // starting server
    librg_address_t address = {0}; address.port = 27010;
    librg_network_start(&ctx, address);

    // starting main loop (run 100 times for test)
    for (int i = 0; i < 100; ++i) {
        librg_tick(&ctx);
        zpl_sleep_ms(1);
    }

    // stopping network and freeing resources
    librg_network_stop(&ctx);
    librg_free(&ctx);

    return 0;
}
```

New component system has a few benefits, comparing it to old one, such as: the core implementation is macro-less now (previous one required you to use macro constructions to generate needed methods for the needed component), it is slightly faster, and the most important thing is, it is possible to bind component methods to the different scripting languages/implementations now. We also got rid of so-called, lazy-initialization for component pools, which makes your memory consumption increase somewhat unexpected for occasions when your are not really familiar with what is going on under the hood.

Next thing - context implementation.
The idea is simple, and you saw it in the most of proper-made C libraries out-there: provide context to each method. So this is basically exactly what we did. Updating method-API part, changing data structures, and re-organizing code inside implementation part, to make everything work simply, and nicely.

>  Why do you need contexts, you can ask, they are just making the interface more complicated!

Well it's a good question, first of all, with our previous approach you wouldn't be able to run multiple instances of librg inside one thread, and making let's say a server-client app/game bundled inside one application and inside one thread would be impossible.

As soon as we finished those 2 things mentioned above, we wanted to check, how hard it would be to create a bindings for the library, so we made librg-odin. And then we stared doing performance optimizations, decreasing amount of time needed for creation of update packet for each client.

![](https://dl.dropboxusercontent.com/s/rgd0vuqyfop81kf/sublime_text_2017-10-03_16-52-17.png)

We started from around point of 300 ms per update for 1k connected clients + 10k entities, and successfully decreased the update time to only 10-20 ms per update for same conditions by making optimizations for cycles, minimizing repeated memory allocations, etc. And, the most important, adding support for multi-threaded update and entity culling insertion, which made the most significant difference.

We are currently also experimenting with world graph modification, to avoid re-constructing our k-d tree each time server updates our entities. This feature is currently volatile and requires further polishing, it may or may not be available in the 3.0 release.

All these changes lead to our new version 3.0.
Currently, we are still busy finishing some things, but we hope that we will be able to switch to 3.0 and mark it as stable within this month.

You can check out **librg** by following [this link](https://github.com/zpl-c/librg).

Thank you for reading!
