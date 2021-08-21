import {
	getParent,
	getChildren,
	setChildren,
	clearAllRelatables,
} from "../utilities";
const root = { name: "root" };
const child1 = { name: "child 1" };
const child2 = { name: "child 2" };
const child3 = { name: "child 3" };
const child4 = { name: "child 4" };
import {
	removeParent,
	removeChild,
	removeChildren,
	removeAllChildren,
} from "./index";
test("removeParent should return the child", () => {
	setChildren(root, child1);
	expect(removeParent(child1)).toBe(child1);
});

test("removeParent should delete the reference to the child and the parent", () => {
	clearAllRelatables();
	setChildren(root, child1, child2);

	expect(getChildren(root)).toStrictEqual([child1, child2]);
	expect(removeParent(child1)).toStrictEqual(child1);
	expect(getParent(root)).toStrictEqual(null);
	expect(getParent(child1)).toStrictEqual(null);
	expect(getParent(child2)).toStrictEqual(root);
	expect(getChildren(root)).toStrictEqual([child2]);
});
test("removeChild should return the child", () => {
	clearAllRelatables();
	setChildren(root, child1);
	expect(removeChild(root, child1)).toBe(child1);
});
test("removeChild should set the reference to the child and the parent", () => {
	clearAllRelatables();
	setChildren(root, child1, child2);
	removeChild(root, child1);
	expect(getParent(root)).toStrictEqual(null);
	expect(getParent(child1)).toStrictEqual(null);
	expect(getParent(child2)).toStrictEqual(root);
	expect(getChildren(root)).toStrictEqual([child2]);
});
test("removeChildren should return the parent", () => {
	clearAllRelatables();
	setChildren(root, child1, child2, child3, child4);
	expect(removeChildren(root, child1, child2)).toStrictEqual(root);
});
test("removeChildren should set the reference to the children and the parent", () => {
	clearAllRelatables();
	setChildren(root, child1, child2, child3, child4);
	removeChildren(root, child1, child2);
	expect(getParent(root)).toStrictEqual(null);
	expect(getParent(child1)).toStrictEqual(null);
	expect(getParent(child2)).toStrictEqual(null);
	expect(getParent(child3)).toStrictEqual(root);
	expect(getParent(child4)).toStrictEqual(root);
	expect(getChildren(root)).toStrictEqual([child3, child4]);
});
test("removeAllChildren should return the parent", () => {
	clearAllRelatables();
	setChildren(root, child1, child2, child3);
	setChildren(child3, child4);
	expect(removeAllChildren(root)).toBe(root);
});
test("removeAllChildren should set the reference to the children and the parent", () => {
	clearAllRelatables();
	setChildren(root, child1, child2, child3);
	setChildren(child3, child4);
	expect(removeAllChildren(root)).toBe(root);
	expect(getParent(root)).toStrictEqual(null);
	expect(getParent(child1)).toStrictEqual(null);
	expect(getParent(child2)).toStrictEqual(null);
	expect(getParent(child3)).toStrictEqual(null);
	expect(getParent(child4)).toStrictEqual(child3);
	expect(getChildren(root)).toStrictEqual([]);
	expect(getChildren(child1)).toStrictEqual([]);
	expect(getChildren(child2)).toStrictEqual([]);
	expect(getChildren(child3)).toStrictEqual([child4]);
	expect(getChildren(child4)).toStrictEqual([]);
});
