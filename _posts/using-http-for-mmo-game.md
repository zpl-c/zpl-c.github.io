---
title: 'Using HTTP for an MMO game?'
excerpt: 'We hope you are doing well. Today we wanted to make a small update post with the current situation, and what is happening. And the most important news - nothing happens! Or as you say in the development world, everything is stable.'
date: '2018-02-04T00:00:00.000Z'
author: zaklaus
---

Hello folks!

We hope you are doing well. Today we wanted to make a small update post with the current situation, and what is happening.
And the most important news - nothing happens! Or as you say in the development world, everything is stable.

Around a month ago we release minor update 3.1, which fixed a few bugs and added a few minor features, you can check out changelog on our github.

Our next planned minor update is gonna be focused around jitter buffer, or "how to make a world a nice discrete place".
We want to give users ability to setup a time, or a buffer size, which will average and distribute update packets as evenly as it can, by requiring minimal changes from their side.

And our next major update will be focued around splitting up currently hardcoded net library backend we are using, into a more modular-ish way.
So librg header will just define methods that will be used for network backend, and lets say, librg_enet.h will have them implemented.
This way users can easily can decide to use any other library backend they find better suits their needs, even TCP or HTTP solutions!
(I agree, HTTP in this case might be \*slightly\* weird, but hey, we are not gonna judge you! :D)

We will finally address an issue, where in heavily populated areas librg spawns a lot of branches, that might end up being unused after some time. This behavior can cause slight increase in memory usage, as those branches, that might never be used anymore, will end up in memory without any real purpose. To solve this issue, we need to make sure we join unused branches together and perform actual tree cleanup. This issue can also be temporarily avoided by increasing the minimum branch area size.

In any case, it's gonna be fun! If you have any questions or suggestions, fell free to comment.

Thank you guys for sticking with us, for reading the post, and for being awesome handmade people you are!

(To answer the question: It depends)
