---
title: 'ADT queries!'
excerpt: "The new function zpl_adt_get takes a URI which specifies how we should perform a lookup on an ADT node."
date: '2022-06-09T00:00:00.000Z'
author: zaklaus
---

Hi there!

With the release of [16.1.1](https://github.com/zpl-c/zpl/releases/tag/16.1.1) version of zpl you are now able to perform URI like queries on ADT nodes.

## New functionality

The new function `zpl_adt_get` takes a URI which specifies how we should perform a lookup on an ADT node. The following features are present:

* nested lookup
  * `"a/b/c"` would look through nodes to fetch the `c` node.
* nested conditional lookup
  * `"arr/[foo=123]/bar"` would scan the `arr` array node to find an object element which field `foo` would be of value `123`, it would then fetch a node inside called `bar`.
* index-based lookup
  * `"arr/3"` would fetch the 4th element of array node `arr`.
* value-based lookup
  * `"arr/[apple]"` would fetch an element of array node `arr` with value `apple`.

Example call:
```c
{
  zpl_json_object *node = zpl_adt_get(document, "foo/bar/baz");
  // node variable is now a pointer to the node called `baz` or null pointer if lookup has failed.
}
```

As we can see, this new function reduces the amount of code needed to perform lookups on ADT nodes. It is also much more readable and easy to understand.
We also plan to implement a sscanf alike addition to this API later on, example:
```c
{
  zpl_adt_get(obj, "/settings/title:%s/x:%d/y:%d/modes/[name=enhanced]:%n", title_str, &x, &y, node_ptr);
}
```

Feel free to check out the [json_get.c](https://github.com/zpl-c/zpl/blob/master/code/apps/examples/json_get.c) example code.

## Parser improvements

The new version also offers an ability to disable extra parsing logic to reduce memory footprint and improve parsing speed,
the macro switch responsible for this change is `ZPL_PARSER_DISABLE_ANALYSIS`. Note it strips certain features that would ensure data format consistency on exports, use only when you want to perform fast raw imports!

See you next time!
