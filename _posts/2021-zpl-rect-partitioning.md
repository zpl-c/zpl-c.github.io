---
title: 'Rectangle partitioning in zpl'
excerpt: "
The math module has received a small upgrade in form of a new set of utility functions for partitioning rectangles. We found Martin Cohen's RectCut approach very useful for sketching out basic layouts for our apps. Our implementation brings in a new type called zpl_aabb2, providing a simple bounding box you can easily cut, contract or extend."
coverImage: '/assets/zpl-layouts.png'
date: '2021-03-07T00:00:00.000Z'
author: zaklaus
---

Hi there!

The math module has received a small upgrade in form of a new set of utility functions for partitioning rectangles. We found [Martin Cohen's](https://halt.software/dead-simple-layouts/)  **RectCut** approach very useful for sketching out basic layouts for our apps. Our implementation brings in a new type called `zpl_aabb2`, providing a simple bounding box you can easily cut, contract, or extend. We highly recommend checking out the posted link above for the rationale behind this approach.

On top of that, new conversion methods have been made to easily switch between `zpl_rect2` and `zpl_aabb2`, as well as a bunch of utility methods that should help you out getting started!

The demo from the cover is available freely at [our GitHub repo](https://github.com/zpl-c/zpl/blob/master/code/apps/extras/layouts.c) as well as the assets associated with it.

With this small addition, we've also improved some portions of the library, namely in the math module section.

We really love bringing in cool ideas to the library, while making sure we stay solid, I hope you will enjoy this update.

See you next time!
