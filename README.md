# @inquisitive/between

This repo is simply a rewritten and an improvement of [between](https://www.npmjs.com/package/between) in typescript. At [Inquisitive](https://www.inquisitive.com) we have been using between for many years, with `@ts-ignore`, which doesn't look good in a full type safe codebase. So we rewrote it in typescript, and made it safer, for example, when the `high` and `low` passed in are equal, it will throw error rather than dead loop.  

## How it works?

There is a sequence of items with sorting in place

```
A (sortValue: 'a')
B (sortValue: 'b')
```

Now we want to add a new item `C` to the list in between A and B, without updating the `sortValue` of `A` and `B` so the list becomes
```
A (sortValue: 'a')
C (sortValue: ?)
B (sortValue: 'b')
```
Using `between('a','b')` will return the string that sorts between `a` and `b`, which in this case is `aV`.

