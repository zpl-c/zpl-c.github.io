---
title: 'Handmade Network welcomes librg'
excerpt: 'This project initially started as a out-of-the-box package suited primarily for games which multi-player addition was usually programmed by fans. Such task requires a lot of reverse engineering and research taken on the game. To simplify the process of multi-player creation, this package would have deal with very common situations. (e.g. world sync, resource/game mode management and scripting support)'
coverImage: '/assets/handmade-welcomes-librg-cover.png'
date: '2017-09-09T00:00:00.000Z'
author: zaklaus
---

Hello everyone! Being a first blog post on this page, I would like to introduce you to our project and tell you about our future goals.

Essentially, librg is not an network library, as you might think from the first glimpse.
It contains entity-component system, bundled with event system which are both connected to network library. All this connected together, and mixed with thought-out event flow, gives you a simple way of creating something. It feels not just like a library, but like an architectural framework.

This project initially started as a out-of-the-box package suited primarily for games which multi-player addition was usually programmed by fans. Such task requires a lot of reverse engineering and research taken on the game. To simplify the process of multi-player creation, this package would've deal with very common situations. (e.g. world sync, resource/game mode management and scripting support)

However, our initial version was harder to embed into existing projects and was also slow to build due to its structure. Scripting felt redundant as well as resource management, since it's a more specific feature that the project itself should rather deal with. The API itself wasn't clear enough and caused confusion to the users, leading to undefined behaviour and undesirable results.

We have changed it! We've decided to rewrite the whole library from scratch and take several things (based on our previous experience and suggestions given) into consideration:

1. Written in **C99**, supported by C++11 - We can finally use librg in various projects of various standards, making it more available.
2. Built as **cross-platform** in mind - For the same reasons, we want librg to be available on many platforms to ensure wider compatibility with devices.
3. **Simplicity** - being single file header-only library, offering documented and simple API, we believe simplicity is one of key factors to achieve a usefulness in our cause.
4. It is **faster** - I believe it is obvious our aim is to develop a library, that is not only easy to use, but also effective. We wanted to make sure performance is one of the key goals of achievement and so far, it really worked well for us.
5. **Minimalist** - Features like resource management or scripting support from the previous iteration are finally avoided. We believe that librg should take care of few specific things and let the user have the freedom to expand on them. Library uses minimal dependencies and is easy to embed.

However, we're still not done yet! There are things we would like to address in the following months:

* Multi-threaded world reconstruction.
* Re-visit and revamp all memory allocation strategies.
* Add support of entity cooling, decreasing the number of updates sent.
* Add ability to reject all possible built-in events.
* Add fields: peer and "custom" pointer to the event structure, possibly giving them more potential.
* Consider single-var context representation and context switching.
* Add more assertions to possible user inputs.
* And of course various performance optimizations.

Hopefully this explains what librg is. For more information, check out our GitHub repository which contains a detailed **README** and various examples.

You can check out **librg** by following [this link](https://github.com/zpl-c/librg).

Thank you for reading this and see you next time!
