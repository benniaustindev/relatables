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
