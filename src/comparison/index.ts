import { areValidRelatables, isValidRelatable } from "../utilities/validate";
import { getChildren, getParent } from "../utilities/maps";

export function hasChildren(parentObject: object): boolean {
	try {
		isValidRelatable(parentObject);
	} catch {
		return false;
	}
	return Boolean(getChildren(parentObject).length);
}
export function hasChild(parentObject: object, childObject: object): boolean {
	try {
		areValidRelatables(parentObject, childObject);
	} catch {
		return false;
	}
	return getParent(childObject) === parentObject;
}
export function hasDescendent(
	ancestorObject: object,
	descendantObject: object
): boolean {
	try {
		areValidRelatables(ancestorObject, descendantObject);
	} catch {
		return false;
	}
	const children = getChildren(ancestorObject);
	if (!children) {
		return false;
	}
	if (children.includes(descendantObject)) {
		return true;
	}
	for (let grandchild of children) {
		if (hasDescendent(grandchild, descendantObject)) {
			return true;
		}
	}
	return false;
}
export function hasAncestor(
	descendantObject: any,
	ancestorObject: any
): boolean {
	return hasDescendent(ancestorObject, descendantObject);
}
