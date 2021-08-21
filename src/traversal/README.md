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
