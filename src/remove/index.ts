import { strict as assert } from "assert/strict";

import { getParent, getChildren } from "../traversal";

import { areValidRelatables } from "../utilities/validate";
import { removeParent } from "../utilities/maps";

export { removeParent };

export function removeChild(parentObject: object, childObject: object) {
	areValidRelatables(parentObject, childObject);
	const previousParent = getParent(childObject);
	assert.equal(previousParent, parentObject);
	removeParent(childObject);
	return childObject;
}
export function removeChildren(
	parentObject: object,
	...childObjects: Array<object>
): object {
	areValidRelatables(parentObject, ...childObjects);
	childObjects.forEach((child) => {
		const previousParent = getParent(child);
		assert.equal(previousParent, parentObject);
	});
	childObjects.map((child) => removeParent(child));
	return parentObject;
}
export function removeAllChildren(parentObject: object): object {
	getChildren(parentObject).map((child: object) => removeParent(child));
	return parentObject;
}
export default {
	removeParent,
	removeChild,
	removeChildren,
	removeAllChildren,
};
