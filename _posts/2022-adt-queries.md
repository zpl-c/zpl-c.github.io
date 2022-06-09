---
title: 'ADT queries!'
excerpt: "The new function zpl_adt_get takes a URI which specifies how we should perform a lookup on an ADT node."
date: '2022-06-09T00:00:00.000Z'
author: zaklaus
---

Hi there!

With the release of [16.1.1](https://github.com/zpl-c/zpl/releases/tag/16.1.1) version of zpl you are now able to perform URI like queries on ADT nodes.

The new function `zpl_adt_get` takes a URI which specifies how we should perform a lookup on an ADT node. The following features are present:

* nested lookup 
  * `a/b/c` would look through nodes to fetch the `c` node.
* nested conditional lookup
  * `arr/[foo=123]/bar` would scan the `arr` array node to find an object element which field `foo` would be of value `123`, it would then fetch a node inside called `bar`.
* index-based lookup
  * `arr/3` would fetch the 4th element of array node `arr`.
* value-based lookup
  * `arr/[apple]` would fetch an element of array node `arr` with value `apple`.

The following code showcases this new feature:
```c
#define ZPL_IMPLEMENTATION
#define ZPL_NANO
#define ZPL_ENABLE_PARSER
#include <zpl.h>

int main(void) {
    zpl_file_contents fc;
    fc = zpl_file_read_contents(zpl_heap(), true, "misc/data/glsl_diffuse.json5");

    zpl_json_object root = {0};

    zpl_u8 err;
    err = zpl_json_parse(&root, (char *)fc.data, zpl_heap_allocator());
    zpl_printf("Error code: %d\n", err);

    zpl_json_object *nested_node_variant = zpl_adt_get(&root, "layer1/layer2/layer3");
    ZPL_ASSERT_NOT_NULL(nested_node_variant);
    ZPL_ASSERT(nested_node_variant->integer == 42);

    zpl_json_object *def_value_node = zpl_adt_get(&root, "uniforms/[name=distort]/layout/[pos=y]/default_value");
    ZPL_ASSERT_NOT_NULL(def_value_node);

    zpl_json_object *num_42_node = zpl_adt_get(&root, "numbers/[value=42]");
    ZPL_ASSERT_NOT_NULL(num_42_node);

    zpl_json_object *arr_idx_node = zpl_adt_get(&root, "array/3");
    ZPL_ASSERT_NOT_NULL(arr_idx_node);
    ZPL_ASSERT(arr_idx_node->integer == 4);

    zpl_json_object *arr_val_node = zpl_adt_get(&root, "array/[4]");
    ZPL_ASSERT_NOT_NULL(arr_val_node);

    zpl_json_free(&root);
    zpl_file_free_contents(&fc);
    return 0;
}
```

We also plan to implement a sscanf alike addition to this API later on, stay tuned!

See you next time!
