import { strict as assert } from "assert/strict";

import { areValidRelatables } from "../utilities/validate";
import { getChildren, getParent, setChildren } from "../utilities/maps";

export { setChildren };

export function appendChild(parentObject: object, childObject: object): object {
	areValidRelatables(parentObject, childObject);
	if (parentObject === childObject) {
		return childObject;
	}
	const previousChildren = getChildren(parentObject) || [];
	if (previousChildren[previousChildren.length - 1] === childObject) {
		return childObject;
	}
	const nextChildren = [...previousChildren, childObject];
	setChildren(parentObject, ...nextChildren);
	return childObject;
}

export function appendChildren(
	parentObjects: object,
	...childObjects: Array<object>
): object {
	areValidRelatables(parentObjects, ...childObjects);

	const previousChildren = getChildren(parentObjects) || [];
	const nextChildren = [...previousChildren, ...childObjects].filter(
		(child) => child !== parentObjects
	);
	setChildren(parentObjects, ...nextChildren);
	return parentObjects;
}

export function prependChild(
	parentObject: object,
	childObject: object
): object {
	if (parentObject === childObject) {
		return childObject;
	}
	areValidRelatables(parentObject, childObject);
	const previousChildren = getChildren(parentObject) || [];
	if (previousChildren[previousChildren.length - 1] === childObject) {
		return childObject;
	}
	const nextChildren = [childObject, ...previousChildren];
	setChildren(parentObject, ...nextChildren);
	return childObject;
}

export function prependChildren(
	parentObject: object,
	...childObjects: Array<object>
): object {
	areValidRelatables(parentObject, ...childObjects);
	const previousChildren = getChildren(parentObject) || [];
	const nextChildren = [...childObjects, ...previousChildren].filter(
		(child) => child !== parentObject
	);
	setChildren(parentObject, ...nextChildren);
	return parentObject;
}
export function insertBefore(
	referenceSibling: object,
	...siblingObjects: Array<object>
): object {
	areValidRelatables(referenceSibling, ...siblingObjects);
	const parent = getParent(referenceSibling);
	assert(parent !== null);
	const previousChildren = getChildren(parent) || [];
	const index = previousChildren.indexOf(referenceSibling);
	const nextChildren = [...previousChildren];
	siblingObjects = siblingObjects.filter(
		(sibling) => sibling !== referenceSibling && sibling !== parent
	);
	nextChildren.splice(index, 0, ...siblingObjects);
	setChildren(parent, ...nextChildren);
	return referenceSibling;
}
export function insertAfter(
	referenceSibling: object,
	...siblingObjects: Array<object>
): object {
	areValidRelatables(referenceSibling, ...siblingObjects);
	const parent = getParent(referenceSibling);
	assert(parent !== null);
	const previousChildren = getChildren(parent) || [];
	const index = previousChildren.indexOf(referenceSibling);
	const nextChildren = [...previousChildren];
	siblingObjects = siblingObjects.filter(
		(sibling) => sibling !== referenceSibling && sibling !== parent
	);
	nextChildren.splice(index + 1, 0, ...siblingObjects);

	setChildren(parent, ...nextChildren);
	return referenceSibling;
}
export function replace(
	previousObject: object,
	replacementObject: object
): object {
	if (previousObject === replacementObject) {
		return replacementObject;
	}
	areValidRelatables(previousObject, replacementObject);
	const parent = getParent(previousObject);
	const children = getChildren(previousObject);
	if (parent !== null) {
		const previousSiblings = getChildren(parent) || [];
		const index = previousSiblings.indexOf(previousObject);

		const nextSiblings = [...previousSiblings];
		nextSiblings.splice(index, 1, replacementObject);
		setChildren(parent, ...nextSiblings);
	}
	setChildren(replacementObject, ...children);
	return replacementObject;
}
