class ChildrenMap extends Map<object, Array<object>> {}
class ParentMap extends Map<object, object | null> {}

export const childMap = new ChildrenMap();
export const parentMap = new ParentMap();

export function clearAllRelatables() {
	childMap.clear();
	parentMap.clear();
}

export function setChildren(
	newParent: object,
	...newChildren: Array<object>
): Array<object> {
	const previousChildren = getChildren(newParent);
	previousChildren.forEach((previousChild) => {
		if (!newChildren.includes(previousChild)) {
			removeParent(previousChild);
		}
	});
	newChildren = newChildren.filter((child) => {
		if (child !== newParent) {
			removeParent(child);
			parentMap.set(child, newParent);
		}
		return child !== newParent;
	});
	childMap.set(newParent, newChildren);
	return newChildren;
}

export function getChildren(parent: object): Array<object> {
	const children = childMap.get(parent);
	return Array.isArray(children) ? [...children] : [];
}

export function removeParent(childObject: object): object {
	const previousParent = getParent(childObject);
	if (previousParent) {
		const previousChildren = getChildren(previousParent);
		const nextChildren = previousChildren.filter((previousChild) => {
			return previousChild !== childObject;
		});
		childMap.set(previousParent, nextChildren);
	}
	parentMap.delete(childObject);
	return childObject;
}

export function getParent(child: object): object | null {
	return parentMap.get(child) || null;
}
