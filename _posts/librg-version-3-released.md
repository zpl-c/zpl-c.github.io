---
title: 'Version 3.0 of librg has been released!'
coverImage: '/assets/librg-version-3-released.png'
excerpt: 'It has been 2 months since we have released the second version of librg. When we have started working on 3.0 however, we have decided to revamp and re-design some parts of the library heavily.'
date: '2017-12-01T00:00:00.000Z'
author: zaklaus
---

Hi everyone,

It has been 2 months since we've released the second version of librg. When we've started working on 3.0 however, we've decided to revamp and re-design some parts of the library heavily:

* We've decided to drop support of our component system in the core and make an extension out of it. This means, users aren't forced to use our component system anymore and they can pass their data using **user_data** pointer.
* We've also finally brought library contexts to the codebase, so user can maintain multiple instances of librg in a single process.
* The library itself is much easier to embed into an existing project as all our dependencies part of the same compilation unit used by librg.
* World reconstruction is now a thing, while still not being perfect, it's already stable and improves the performance a lot, since we don't need to reconstruct the whole entity scene graph every tick anymore.
* Built-in (or custom) events can now be rejected using **librg_event_reject** function.
* After several thoughts, we've decided to not include entity cooling into the library's core. It is available as a library extension instead. Reason is, entity cooling is rather a specific algorithm that should be adapted based on user's needs. We've decided to implement a very basic template called librg_limiter which makes use of event rejection and should act as a template for user's needs.
* We've improved the way we sync data across the network and split the stream into two channels: reliable and unreliable, where the former is used to describe entity creation/deletion (as it is important information) whereas the latter is used for entity updates.
* As usual, we've made some tweaks and performance improvements.

Since 3.0 is out now, we currently don't have any specific goals for the next iteration. We might announce any plans at a later date.

We've also tried librg out on different platforms and so far we've had a success with the iOS and Android builds.

![](https://media.discordapp.net/attachments/354672096892289025/386198517397585922/unknown.png?width=963&height=453)

You can try the new version out at: [librg GitHub site](https://github.com/zpl-c/librg).

Thank you for reading this, we appreciate any support or feedback.

Have fun!
