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
