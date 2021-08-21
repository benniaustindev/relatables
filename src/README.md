# Relatables

**Relatables** is a collection of js functions which allow you to easily maintain parent/child relationships between any objects:

- Without modifying the original objects
- Without a chance for name collisions
- Without any configuration whatsoever

Relatable functions work with all objects, even functions. Primitives too, if you use [primitive wrapper objects](https://developer.mozilla.org/en-US/docs/Glossary/Primitive#primitive_wrapper_objects_in_javascript)

## Installation

```
npm install relatables --save
```

```
yarn add relatables
```

## Basic Usage

`> node ./example/basic`

```js
const { appendChildren, getChildren, getParent } = require("../dist");

//first, we'll create some random objects
const obj = { name: "example object" };
const arr = ["example", "array"];
const func = () => console.log("and functions too");
const str = new String(`boxed primitives work too`);
const bool = new Boolean(true);
const num = new Number();
const int = Object(BigInt(42));
const sym = Object(Symbol("something symbolic"));

// then we'll append [arr,func] as children to [obj]
appendChildren(obj, arr, func);
// now lets append [str, bool] as children to [func]
appendChildren(func, str, bool);
// finally lets append [num] as children to [bool]
appendChildren(bool, num, int, sym);

console.log(obj);
// { name: 'example object' }

console.log(getChildren(obj));
//[ [ 'example', 'array' ], [Function: func] ]

console.log(getChildren(func));
//[ [String: 'boxed primitives work too'], [Boolean: true] ]

console.log(getChildren(bool).valueOf());
//[ [Number: 0], [BigInt: 42n], [Symbol: Symbol(something symbolic)] ]

console.log(getParent(bool));
// [Function: func]

console.log(getChildren(str));
// [] (no children, empty array)

console.log(getParent(obj));
// null (root element returns null)
```

---

---
