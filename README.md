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
# Insertion Functions

## appendChild(`parentObject`,`childObject`)

The appendChild() function adds single `childObject` to the end of the list of children of a specified `parentObject`.

### Syntax

```js
childObject = appendChild(parentObject, childObject);
```

`parentObject`
: Any non-primitive object

`childObject`
: Any non-primitive object

### Returns:

`childObject`

---

## appendChildren(`parentObject`,...`childObjects`)

The appendChildren() function inserts a set of `...childObjects` after the last child of the `parentObject`.

### Syntax

```js
parentObject = appendChildren(parent, ...childObjects);
```

`parentObject`
: Any non-primitive object

`childObjects`
: An array non-primitive objects

### Returns:

`parentObject`

---

## prependChild(`parentObject`,`childObject`)

The prependChild() function adds a single `childObject` to the beginning of the list of children of a specified `parentObject`.

will throw an `Error` if the `referenceObject` has no parent.

### Syntax

```js
parentObject = prependChild(parentObject, childObject);
```

`parentObject`
: Any non-primitive object

`childObject`
: Any non-primitive object

### Returns:

`parentObject`.

---

## prependChildren(`parentObject`,...`childObjects`)

The prependChildren() function inserts a set of `...childObjects` before the first child of the `parentObject`.

Will throw an `Error` if the `referenceObject` has no parent.

### Syntax

```js
parentObject = prependChildren(parentObject, ...childObjects);
```

`parentObject`
: Any non-primitive object

`childObjects`
: An array non-primitive objects

### Returns:

`parentObject`

---

## insertBefore(`referenceObject`,...`siblingObjects`)

The insertBefore() function inserts `...siblingObjects` before a `referenceObject`.

Will throw an `Error` if the `referenceObject` has no parent.

### Syntax

```js
referenceObject = insertBefore(referenceObject, ...siblingObjects);
```

`referenceObject`
: Any non-primitive object

`siblingObjects`
: An array non-primitive objects

### Returns:

`referenceObject`

---

## insertAfter(`referenceObject`,...`siblingObjects`)

The insertAfter() function inserts `...siblingObjects` after a `referenceObject`.

will throw an `Error` if the `referenceObject` has no parent.

### Syntax

```js
referenceObject = insertAfter(referenceObject, ...siblingObjects);
```

### Returns:

`referenceObject`

---

## replace(`previousObject`,`replacementObject`)

The replace() function inserts a `replacementObject` in place of a `previousObject`, stealing it's child and parent references.

### Syntax

```js
replacementObject = replace(replacementObject, previousObject);
```

### Returns:

`replacementObject`

---

---
# Remove Functions

## removeChild(`parentObject`,`childObject`)

The removeChild() function removes a single `childObject` from the list of children of a specified `parentObject`.

### Syntax

```js
childObject = removeChild(parentObject, childObject);
```

`parentObject`
: Any non-primitive object

`childObject`
: Any non-primitive object

### Returns:

`childObject`

---

## removeParent(`childObject`)

The removeParent() function removes the parent association from `childObject`, af any exists.

### Syntax

```js
childObject = removeParent(childObject);
```

`childObject`
: Any non-primitive object

### Returns:

`childObject`

---

## removeChildren(`parentObject`,..`childObjects`)

The removeChildren() function removes a multiple `childObjects` from the list of children of a specified `parentObject`.

### Syntax

```js
parentObject = removeChildren(parentObject, ...childObjects);
```

`parentObject`
: Any non-primitive object

`childObjects`
: An array of non-primitive objects

### Returns:

`parentObject`

---

## removeAllChildren(`parentObject`)

The removeAllChildren() function removes all of the objects from the list of children of a specified `parentObject`.

### Syntax

```js
parentObject = removeAllChildren(parentObject);
```

`parentObject`
: Any non-primitive object

### Returns:

`parentObject`

---

---
# Comparison Functions

## hasChildren(`parentObject`)

The hasChildren() function returns a `boolean` value indicating whether the given `parentObject` has children or not.

### Syntax

```js
bool = hasChildren(parentObject);
```

`parentObject`
: Any non-primitive object

### Returns:

A `boolean` value that is `true` if the `parentObject` has children, and `false` otherwise.

---

## hasChild(`parentObject`,`childObject`)

The hasChild() function returns a `boolean` indicating whether a specific `childObject` is a direct child of `parentObject`.

### Syntax

```js
bool = hasChild(parentObject, childObject);
```

`parentObject`:
: Any non-primitive object
`childObject`:
: Any non-primitive object

### Returns:

A `boolean` value that is true if the `parentObject` is the parent of the `childObject`, and false otherwise.

---

## hasDescendent(`ancestorObject`, `descendantObject`))

The hasDescendent() function returns a `boolean` indicating whether a specific `descendantObject` is a descendant of `ancestorObject`.

### Syntax

```js
bool = hasDescendent(ancestorObject, descendentObject);
```

`ancestorObject`
: Any non-primitive object

`descendentObject`
: Any non-primitive object

### Returns:

A `boolean` value that is `true` if the object is an ancestor of descendentObject, and `false` otherwise.

---

## hasAncestor(`descendantObject`, `ancestorObject`)

The hasAncestor() function returns a `boolean` indicating whether a specific `descendantObject` is a descendant of `ancestorObject`.

### Syntax

```js
bool = hasAncestor(descendantObject, ancestorObject);
```

`descendentObject`
: Any non-primitive object

`ancestorObject`
: Any non-primitive object

### Returns:

A `boolean` value that is `true` if the object is a `descendantObject` of `ancestorObject`, and `false` otherwise.

---

---
# Traversal Functions

## getAncestors(`descendentObject`)

The getAncestors() function returns an array containing the `parentObject` and it's `parentObject` and it's `parentObject` and so forth. The array is ordered with the root object first, up to but **not including** `descendentObject`.

### Syntax

```js
ancestorsArray = getAncestors(descendentObject);
```

`descendentObject`
: Any non-primitive object

### Returns:

`ancestorsArray`
: An array containing all of the `parentObjects` objects

If there are no parents an empty array is returned

---

## getInclusiveAncestors(`descendentObject`)

The getInclusiveAncestors() function returns an array containing the `parentObject` and it's `parentObject` and it's `parentObject` and so forth. The array is ordered with the root object first, up to and **including** `descendentObject`.

### Syntax

```js
ancestorsArray = getInclusiveAncestors(descendentObject);
```

`descendentObject`
: Any non-primitive object

### Returns:

`ancestorsArray`
: An array containing all of the `parentObjects` objects as well as the `descendentObject`

---

## getFirstChild(`parentObject`)

The getFirstChild() function returns the first child attached to an object, or null, if `parentObject` has no children.

### Syntax

```js
childObject = getFirstChild(parentObject);
```

`parentObject`
: Any non-primitive object

### Returns:

`childObject`
: The first child of the parent

if `parentObject` has no children `null` is returned

---

## getLastChild(`parentObject`)

The getLastChild() function returns the last child attached to an object, or null, if `parentObject` has no children.

### Syntax

```js
childObject = getLastChild(parentObject);
```

`parentObject`
: Any non-primitive object

### Returns:

`childObject`:
The last child of the parent

If `parentObject` has no children `null` is returned

---

## getSiblings(`siblingObject`)

The getSiblings() function returns all of the objects that share a parent with `siblingObject` **Not including itself**.

### Syntax

```js
siblingsArray = getSiblings(siblingObject);
```

`siblingObject`
: Any non-primitive object

### Returns:

`siblingsArray`:
An array containing all of the sibling objects

If `siblingObject` has no siblings an empty array is returned

---

## getInclusiveSiblings(`siblingObject`)

The getInclusiveSiblings() function returns all of the objects that share a parent with `siblingObject` **including itself**.

### Syntax

```js
siblingsArray = getInclusiveSiblings(siblingObject);
```

`siblingObject`
: Any non-primitive object

### Returns:

`siblingsArray`:
An array containing all of the `siblingObjects` as well as the `siblingObject`

---

## getPreviousSiblings(`siblingObject`)

The getPreviousSiblings() function returns all of the objects preceding `siblingObject` which share an ancestor.

### Syntax

```js
siblingsArray = getPreviousSiblings(siblingObject);
```

`siblingObject`
: Any non-primitive object

### Returns:

`siblingsArray`:
An array containing all of the `siblingObjects` preceding `siblingObject`

If `siblingObject` has no siblings an empty array is returned

---

## getPreviousSibling(`siblingObject`)

The getPreviousSibling() function returns the object which immediately precedes `siblingObject`.

### Syntax

```js
previousObject = getPreviousSibling(siblingObject);
```

`siblingObject`
: Any non-primitive object

### Returns:

`previousObject`:
The object immediately preceding the `siblingObject`

If `siblingObject` is the first sibling `null` is returned

---

## getNextSiblings(`siblingObject`)

The getNextSiblings() function returns all of the objects following `siblingObject` which share an ancestor.

### Syntax

```js
siblingsArray = getNextSiblings(siblingObject);
```

`siblingObject`
: Any non-primitive object

### Returns:

`siblingsArray`:
An array containing all of the `siblingObjects` following `siblingObject`

If `siblingObject` is the last sibling an empty array is returned

---

## getNextSibling(`siblingObject`)

The getNextSibling() function returns the object which immediately follows `siblingObject`.

### Syntax

```js
previousObject = getPreviousSibling(siblingObject);
```

`siblingObject`
: Any non-primitive object

### Returns:

`previousObject`:
The object immediately following the `siblingObject`

If `siblingObject` is the last sibling `null` is returned

---

---
## A note about ...spread operators

Relatables finds relationships by using the reference to the actual object, meaning if you add some relationships to an object, and then spread it into an new one, relatables will still be looking for the old reference. That's where replace() comes in.

> tldr: use the replace function when you spread and relationships will remain in-tact.

```js
myObject = replace(myObject, { ...myObject, name: "newName" });
```

> And for a more detailed explanation:

```js
const { appendChildren, getChildren, getParent, replace } = require("../dist");

// If we create an object and add some children
let myObject = { name: "myObject" };
let child1 = { name: "child1" };
let child2 = { name: "child2" };
let child3 = { name: "child3" };
appendChildren(myObject, child1, child2, child3);
console.log(myObject.name, getChildren(myObject));
/* prints: myObject [ { name: 'child1' }, { name: 'child2' }, { name: 'child3' } ] */

// then later, we overwrite it with a new object...
myObject = { ...myObject, name: "newName" };

// the children aren't there because myObject is now a brand new object
console.log(myObject.name, getChildren(myObject));
/* prints: newName [] (an empty array) */

// and if we check the parent of one of the children
console.log(child1.name, getParent(child1));
/* prints: child1 { name: 'myObject' } (still attached to the old parent )*/

// We could obviously re-append the children
appendChildren(myObject, child1, child2, child3);
console.log(myObject.name, getChildren(myObject));
/* prints: newName [ { name: 'child1' }, { name: 'child2' }, { name: 'child3' } ] */

// but if you just use replace when you spread
myObject = replace(myObject, { ...myObject, name: "newerName" });
// you still get a brand new object, but the children, (and parents) will have followed
console.log(myObject.name, getChildren(myObject));
/* prints: newerName [ { name: 'child1' }, { name: 'child2' }, { name: 'child3' } ]*/
```

---

---
