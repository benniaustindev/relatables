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
