---
title: 'TAR archiving in zpl!'
excerpt: "With the release of 12.3.0 version of zpl comes a new TAR archiving support. It allows you to easily pack, unpack or inspect the archives without any overhead. Fully backed by the zpl's File module, it can be used to pack archives right inside the memory!"
date: '2021-03-27T00:00:00.000Z'
author: zaklaus
---

Hi there!

With the release of [12.3.0](https://github.com/zpl-c/zpl/releases/tag/12.3.0) version of zpl comes a new TAR archiving support. It allows you to easily pack, unpack or inspect the archives without any overhead. Fully backed by the zpl's File module, it can be used to pack archives right inside the memory! Let us get into the API:

When it comes to packing files, zpl offers two methods to do so:
* `zpl_tar_pack` can be used to pack a specific list of files into a file (even a memory-mapped one). This method is helpful in case you already know the list of files to pack beforehand!
* `zpl_tar_pack_dir` is a high-level method to pack an entire folder into an archive, simplifying the packing process as a whole significantly! Note that this method performs some memory allocations during the process.

Note that the TAR packing process only supports regular files. It also does not support links nor file permissions/ownership info.

Apart from packing files, zpl can read existing archives as well, and it does so by processing the TAR archive, where it calls your supplied callback per each file entry found. That allows you to implement different routines based on your use-case quickly, and the library won't restrict you in any way:

* `zpl_tar_unpack` is the base method you call with your own supplied callback that gets executed whenever we stumble upon an entry. The callback provides you the entry's path, file offset and length, type, and any possible errors the unpacker might've found (such as bad checksum). You're free to analyze the data, write it somewhere or seek out only a specific entry, and it's entirely up to you!
* `zpl_tar_unpack_dir`, on the other hand, provides a simple way to unpack an entire archive into a destination. It does so by using a built-in callback responsible for unpacking files. That is so simple, right?

The unpack callback can also return `1` to indicate it wants to cancel the processing task. That is useful if your callback acts as a filter or a scanner to reach completion before the entire archive gets processed.

Feel free to check out the [tar.c](https://github.com/zpl-c/zpl/blob/master/code/apps/examples/tar.c) example code.

See you next time!
