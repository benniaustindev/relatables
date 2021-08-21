import { isValidRelatable } from "../utilities/validate";
import { getChildren, getParent } from "../utilities/maps";

export { getParent, getChildren };
export function getAncestors(descendentObject: object): Array<object> | null {
	isValidRelatable(descendentObject);
	let parent = getParent(descendentObject);
	if (parent) {
		return getInclusiveAncestors(parent);
	}
	return null;
}
export function getInclusiveAncestors(object: object): Array<object> {
	const ancestors: Array<object> = [object];
	let parent: object | null = getParent(object);
	while (parent !== null) {
		ancestors.unshift(parent);
		parent = getParent(parent);
	}
	return ancestors;
}

export function getFirstChild(parentObject: object): object | null {
	isValidRelatable(parentObject);
	return getChildren(parentObject)[0] || null;
}
export function getLastChild(parentObject: object): object | null {
	isValidRelatable(parentObject);
	const children = getChildren(parentObject);
	return children[children.length - 1] || null;
}
export function getInclusiveSiblings(
	siblingObject: object
): Array<object> | null {
	isValidRelatable(siblingObject);
	const parent = getParent(siblingObject);
	if (parent) {
		const siblings = getChildren(parent);
		return siblings;
	} else return null;
}
export function getSiblings(siblingObject: object): Array<object> | null {
	isValidRelatable(siblingObject);
	const inclusiveSiblings = getInclusiveSiblings(siblingObject);

	if (inclusiveSiblings !== null) {
		return inclusiveSiblings.filter((sibling) => sibling !== siblingObject);
	}
	return null;
}
export function getPreviousSiblings(
	siblingObject: object
): Array<object> | null {
	isValidRelatable(siblingObject);
	const inclusiveSiblings = getInclusiveSiblings(siblingObject);
	if (inclusiveSiblings) {
		const index = inclusiveSiblings.indexOf(siblingObject);
		return inclusiveSiblings.slice(0, index) || [];
	}
	return null;
}
export function getNextSiblings(siblingObject: object): Array<object> | null {
	isValidRelatable(siblingObject);
	const inclusiveSiblings = getInclusiveSiblings(siblingObject);
	if (inclusiveSiblings) {
		const index = inclusiveSiblings.indexOf(siblingObject);
		return inclusiveSiblings.slice(index + 1) || [];
	}
	return null;
}
export function getNextSibling(siblingObject: object): object | null {
	isValidRelatable(siblingObject);
	const inclusiveSiblings = getInclusiveSiblings(siblingObject);
	if (inclusiveSiblings) {
		const index = inclusiveSiblings.indexOf(siblingObject);
		return inclusiveSiblings[index + 1] || null;
	}
	return null;
}
export function getPreviousSibling(siblingObject: object): object | null {
	isValidRelatable(siblingObject);
	const inclusiveSiblings = getInclusiveSiblings(siblingObject);
	if (inclusiveSiblings) {
		const index = inclusiveSiblings.indexOf(siblingObject);
		return inclusiveSiblings[index - 1] || null;
	}
	return null;
}
