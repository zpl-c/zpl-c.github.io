---
title: 'February/March 2021 library updates'
excerpt: 'We have released a small tester framework that we have used in both librg and zpl, and it is now available in its own repository on GitHub.'
date: '2021-02-21T00:00:00.000Z'
author: zaklaus
---

Hey community!

Today we are going to talk about few new and upcoming features to the **zpl** library:


## TCC Compatibility

Just a small heads up, the [https://bellard.org/tcc/](https://bellard.org/tcc/) compiler is now partially compatible with **zpl**!

Threading code is currently disabled, as the compiler does not support C11 features. zpl_rdtsc also has a limited support when used on ARM family, as tcc does not support inline assembly on ARM.

## JSON Parser

The zpl's json parser finally got some updates. It now introduces a new API to easily compose new JSON documents. 

Original comment handling code was replaced in favor of much smaller and faster code and overall makes the parsing process very smooth.

Based on our tests on Raspberry Pi 4B, a **55mb** JSON file can be parsed in approx. **650ms** time on optimized builds, with comment handling routine enabled (takes around 1.3 seconds on unoptimized builds).

There's a plan to slowly rewrite and reduce the parser code to allow for more room for optimisations

On the other side, tests on Apple M1 Chip and the new parser implementation has mind-blowing speed! It parsed the same 55mb JSON file as above ^ **within 100ms** time on optimized build with comment handling routine enabled. 

We don't know about you, but to us that sounds very fast! 🚀

Also just for reference the file in question can be accessed using [this link](https://www.reddit.com/r/datasets/comments/1uyd0t/200000_jeopardy_questions_in_a_json_file/).

## Upcoming version 12.0.0

Quick update, ZPL 12.0.0 will be released soon and it contains a reworked JSON module, since today, comments are now handled internally as a part of the parsing process, this simplifies the API a lot as well.

Based on my tests on Raspberry Pi 4B, we were able to parse the same 55mb JSON file from above in \~550ms time. The code is also much smaller and easier to read, it finally goes along with the new design we've chosen for zpl itself.

More stats to come later! We could drop the time down to **320ms** by using a preallocated block of memory on Raspberry Pi 4B. 

We ran the same test on AMD Ryzen 7 3700X capable machine, optimized build took 95ms to parse the same test file!
