# Check exitance of flow header comment. (flow-required)

Flow is a great static type checker for JavaScript. Unfortunately it's design
seems to assume that developers are slowly incorporating flow into large legacy
code bases, instead of starting fresh. In this sense, each file needs to opt
into type checking, Otherwise obvious type errors may be missed.


## Rule Details

This rule aims to enforce that all js files have the flowtype header comment,
enforcing type checking across the project.

Examples of **incorrect** code for this rule:

```js

// Missing flow header comment.
var hello = 'world';

```

Examples of **correct** code for this rule:

```js

// @flow
var hello = 'world';

```

## When Not To Use It

This rule is not appropriate when your project has a mix of plain (legacy) js with new flow typed js.

## Further Reading

- https://flowtype.org/docs/new-project.html#typechecking-your-files
- https://github.com/facebook/flow/issues/284
