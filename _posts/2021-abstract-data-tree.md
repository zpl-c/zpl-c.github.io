---
title: 'Abstract Data Tree'
excerpt: 'ADT builder allows us to construct data structure trees that are format-agnostic and flexible. `zpl_adt_node` contains enough information to cover all parser needs, ensuring that we can export this data into any format zpl supports.
'
date: '2021-04-22T17:54:00.000Z'
author: zaklaus
---
The **13.1.0** release of [zpl](http://zpl.pw) has arrived and we have some news to share!
We have primarily focused on rewriting our JSON5 module, which allows us to integrate new parsers more easily! Let's get into major changes:

## The manual builder

ADT builder allows us to construct data structure trees that are format-agnostic and flexible. `zpl_adt_node` contains enough information to cover all parser needs, ensuring that we can export this data into any format zpl supports.

We have also developed a few helper methods to make data layout design easier to work with, namely:

- `zpl_adt_inset(parent, name, value)` that appends a new node into provided `parent` branch,
- or `zpl_adt_set(node, name, value)` that sets up our existing node with a value.

We have extracted a few methods from the former JSON5 parser as well:

- `zpl_adt_parse_number(node, text)` parses the text and populates the node with a full number analysis,
- and `zpl_adt_str_to_flt(node)` that does the same thing, but relies on existing *string* node data to analyze the number.

## JSON5/SJSON parser

The primary reason behind the JSON5 refactor was to reduce code complexity and put reusable components into a shared module all parsers would benefit from.

We have reworked the parser from the ground up to benefit from the new ADT builder API. The code has been reduced substantially, and it is much easier to follow the flow now.

The constant data type has also been removed in favor of number-based constant values we've already used for `Infinity` or `NaN`.

## CSV parser

A new addition to the parser (now a) family is the CSV support! It follows the `RFC 4180` standard and supports various commonly used features, such as string literals, headers, or custom delimiters.

The data layout in ADT is simple. Per each column, we create an array node holding cells of a respective row. The following CSV data:

```csv
foo, bar, baz
1,   2,   3
4,   5,   6
```

will be represented in memory as:

```jsx
root = {
  foo = [1, 4],
  bar = [2, 5],
  baz = [3, 6]
}
```

or, if we import a header-less CSV collection, it would be an array of arrays:

```jsx
root = [
  [1, 4],
  [2, 5],
  [3, 6]
]
```

### String literals

The CSV parser also supports string literals with escaped double-quotes. The following CSV data is valid:

```csv
name, occupation
Jim Halpert, Salesman
"Michael Scott", Regional Manager
"Dwight ""Danger?"" Schrute", "Assistant (to the) Regional Manager"
```

The list of names would be populated as follows: `Jim Halpert`, `Michael Scott`, `Dwight "Danger?" Schrute`.

## Build once, transform anywhere!

We can build our own data tree with the features above and export it to any format we desire (as long as zpl supports it).

Say we import the CSV collection from above:

```csv
foo, bar, baz
1,   2,   3
4,   5,   6
```

The same data can be directly exported into JSON5:

```json
{
  "foo": [1, 4],
  "bar": [2, 5],
  "baz": [3, 6]
}
```

and vice versa! 

This opens up a lot of opportunities, like building custom native low-level data pipelines for ETL and transformations.

## Plans

We plan to add support for more languages over time. The **YAML** and **TOML** languages are the ones we will focus on shortly. However, we're open to any suggestions or contributions to enhance our little parser library.

Thanks for reading!