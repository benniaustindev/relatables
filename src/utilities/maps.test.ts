import {
	clearAllRelatables,
	setChildren,
	getChildren,
	removeParent,
	getParent,
	childMap,
	parentMap,
} from "./maps";

const root = { name: "root" };
const parent1 = { name: "parent 1" };
const parent2 = { name: "parent 2" };
const parent3 = { name: "parent 3" };
const child1 = { name: "child 1" };
const child2 = { name: "child 2" };
const child3 = { name: "child 3" };
const child4 = { name: "child 4" };
const grandChild1 = { name: "grandChild 1" };
const grandChild2 = { name: "grandChild 2" };
const grandChild3 = { name: "grandChild 3" };
const grandChild4 = { name: "grandChild 4" };
const grandChild5 = { name: "grandChild 5" };
const grandChild6 = { name: "grandChild 6" };

test("setChildren should overwrite the reference to the children and parent", () => {
	expect(setChildren(root, child1, child2)).toStrictEqual([child1, child2]);
	expect(childMap.get(root)).toStrictEqual([child1, child2]);
	expect(setChildren(root, child3, child4)).toStrictEqual([child3, child4]);
	expect(childMap.get(root)).toStrictEqual([child3, child4]);
	expect(parentMap.get(root)).toStrictEqual(undefined);
	expect(parentMap.get(child1)).toStrictEqual(undefined);
	expect(parentMap.get(child2)).toStrictEqual(undefined);
	expect(parentMap.get(child3)).toStrictEqual(root);
	expect(parentMap.get(child4)).toStrictEqual(root);
});

test("clearAllRelatables should remove all references to parents and children", () => {
	clearAllRelatables();
	expect(childMap.size).toBe(0);
	expect(parentMap.size).toBe(0);
});
test("setChildren should not let you to add a child to itself", () => {
	clearAllRelatables();
	expect(setChildren(child1, child1)).toEqual([]);
	expect(setChildren(child1, child1, child2, child3, child4)).toEqual([
		child2,
		child3,
		child4,
	]);
});
test("getChildren should retrieve the correct children from the parent", () => {
	clearAllRelatables();
	setChildren(root, parent1, parent2, parent3);
	setChildren(parent1, child1, child2);
	setChildren(parent2, child3, child4);
	setChildren(parent3);
	setChildren(child1, grandChild1, grandChild2);
	setChildren(child2, grandChild3, grandChild4);
	setChildren(child3, grandChild5, grandChild6);
	setChildren(child4);

	expect(getChildren(root)).toStrictEqual([parent1, parent2, parent3]);
	expect(getChildren(parent1)).toStrictEqual([child1, child2]);
	expect(getChildren(parent2)).toStrictEqual([child3, child4]);
	expect(getChildren(parent3)).toStrictEqual([]);
	expect(getChildren(child1)).toStrictEqual([grandChild1, grandChild2]);
	expect(getChildren(child2)).toStrictEqual([grandChild3, grandChild4]);
	expect(getChildren(child3)).toStrictEqual([grandChild5, grandChild6]);
	expect(getChildren(child4)).toStrictEqual([]);
	expect(getChildren(grandChild1)).toStrictEqual([]);
	expect(getChildren(grandChild2)).toStrictEqual([]);
	expect(getChildren(grandChild3)).toStrictEqual([]);
	expect(getChildren(grandChild4)).toStrictEqual([]);
	expect(getChildren(grandChild5)).toStrictEqual([]);
	expect(getChildren(grandChild6)).toStrictEqual([]);

	setChildren(parent1, child1, child2, child3, child4);

	expect(getChildren(parent1)).toStrictEqual([child1, child2, child3, child4]);
	expect(getChildren(parent2)).toStrictEqual([]);
	expect(getParent(child1)).toStrictEqual(parent1);
	expect(getParent(child2)).toStrictEqual(parent1);
	expect(getParent(child3)).toStrictEqual(parent1);
	expect(getParent(child4)).toStrictEqual(parent1);
});

test("removeParent should return the child", () => {
	clearAllRelatables();
	setChildren(root, child1);
	expect(removeParent(child1)).toStrictEqual(child1);
});
test("removeParent should delete the reference to the child and the parent", () => {
	clearAllRelatables();
	setChildren(root, child1, child2, child3);
	removeParent(child2);

	expect(getChildren(root)).toStrictEqual([child1, child3]);
	expect(getChildren(child1)).toStrictEqual([]);
	expect(getChildren(child2)).toStrictEqual([]);
	expect(getChildren(child3)).toStrictEqual([]);
	expect(getParent(root)).toStrictEqual(null);
	expect(getParent(child1)).toStrictEqual(root);
	expect(getParent(child2)).toStrictEqual(null);
	expect(getParent(child3)).toStrictEqual(root);
});
