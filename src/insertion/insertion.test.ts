import { getChildren, getParent, clearAllRelatables } from "../utilities/maps";
import {
	setChildren,
	appendChild,
	appendChildren,
	insertAfter,
	insertBefore,
	prependChild,
	prependChildren,
	replace,
} from "./index";

const root = { name: "root" };
const root2 = { name: "root" };
const child1 = { name: "child 1" };
const child2 = { name: "child 2" };
const child3 = { name: "child 3" };
const child4 = { name: "child 4" };
const child5 = { name: "child 4" };
const grandChild1 = { name: "grandChild 1" };
const grandChild2 = { name: "grandChild 2" };

test("setChildren should set the reference to both children and the parent", () => {
	clearAllRelatables();
	expect(setChildren(root, child1, child2)).toStrictEqual([child1, child2]);
	expect(getChildren(root)).toStrictEqual([child1, child2]);
	expect(setChildren(root, child3, child4)).toStrictEqual([child3, child4]);
	expect(getChildren(root)).toStrictEqual([child3, child4]);
	expect(getParent(root)).toStrictEqual(null);
	expect(getParent(child1)).toStrictEqual(null);
	expect(getParent(child2)).toStrictEqual(null);
	expect(getParent(child3)).toStrictEqual(root);
	expect(getParent(child4)).toStrictEqual(root);
	expect(setChildren(root2, child1, child2, child3, child4)).toStrictEqual([
		child1,
		child2,
		child3,
		child4,
	]);
	expect(getParent(child1)).toStrictEqual(root2);
	expect(getParent(child2)).toStrictEqual(root2);
	expect(getParent(child3)).toStrictEqual(root2);
	expect(getParent(child4)).toStrictEqual(root2);
	expect(getChildren(root)).toStrictEqual([]);
	expect(getChildren(root2)).toStrictEqual([child1, child2, child3, child4]);
	expect(setChildren(root2, root2, child1)).toStrictEqual([child1]);
});

test("appendChild should not allow you to set any object as a child of itself", () => {
	clearAllRelatables();
	expect(appendChild(root, child1)).toBe(child1);
	expect(appendChild(root, child2)).toBe(child2);
	expect(appendChild(child1, grandChild1)).toBe(grandChild1);
});
test("appendChild should return the correct child", () => {
	clearAllRelatables();
	expect(appendChild(root, child1)).toBe(child1);
	expect(appendChild(root, child2)).toBe(child2);
	expect(appendChild(child1, grandChild1)).toBe(grandChild1);
});
test("appendChild should set the reference to the child and parent", () => {
	clearAllRelatables();
	setChildren(root, child1, child2);
	setChildren(child1, grandChild1, grandChild2);

	expect(getChildren(root)).toEqual([child1, child2]);
	expect(getChildren(child1)).toEqual([grandChild1, grandChild2]);
	expect(getChildren(child2)).toEqual([]);
	expect(getChildren(grandChild1)).toEqual([]);

	expect(getParent(root)).toBe(null);
	expect(getParent(child1)).toBe(root);
	expect(getParent(child2)).toBe(root);
	expect(getParent(grandChild1)).toBe(child1);
	expect(getParent(grandChild2)).toBe(child1);
});
test("appendChildren should return the parent", () => {
	clearAllRelatables();
	expect(appendChildren(root, child1, child2)).toBe(root);
	expect(appendChildren(child1, grandChild1)).toBe(child1);
});

test("appendChildren should set the reference to the child and parent", () => {
	clearAllRelatables();
	setChildren(root, child1, child2);
	setChildren(child1, grandChild1, grandChild2);

	expect(getChildren(root)).toEqual([child1, child2]);
	expect(getChildren(child1)).toEqual([grandChild1, grandChild2]);
	expect(getChildren(child2)).toEqual([]);
	expect(getChildren(grandChild1)).toEqual([]);
	expect(getParent(root)).toBe(null);
	expect(getParent(child1)).toBe(root);
	expect(getParent(child2)).toBe(root);
	expect(getParent(grandChild1)).toBe(child1);
	expect(getParent(grandChild2)).toBe(child1);
});
test("prependChild should return the correct child", () => {
	expect(prependChild(root, child1)).toBe(child1);
	expect(prependChild(root, child2)).toBe(child2);
	expect(prependChild(child1, grandChild1)).toBe(grandChild1);
});
test("prependChild should set the reference to the child and parent", () => {
	clearAllRelatables();
	setChildren(root, child1, child2);
	setChildren(child1, grandChild1, grandChild2);

	expect(getChildren(root)).toEqual([child1, child2]);
	expect(getChildren(child1)).toEqual([grandChild1, grandChild2]);
	expect(getChildren(child2)).toEqual([]);
	expect(getChildren(grandChild1)).toEqual([]);
	expect(getParent(root)).toBe(null);
	expect(getParent(child1)).toBe(root);
	expect(getParent(child2)).toBe(root);
	expect(getParent(grandChild1)).toBe(child1);
	expect(getParent(grandChild2)).toBe(child1);
});
test("prependChildren should return the parent", () => {
	clearAllRelatables();
	expect(prependChildren(root, child1, child2)).toBe(root);
	expect(prependChildren(child1, grandChild1)).toBe(child1);
});

test("prependChildren should set the reference to the child and parent", () => {
	clearAllRelatables();
	setChildren(root, child1, child2);
	setChildren(child1, grandChild1, grandChild2);

	expect(getChildren(root)).toEqual([child1, child2]);
	expect(getChildren(child1)).toEqual([grandChild1, grandChild2]);
	expect(getChildren(child2)).toEqual([]);
	expect(getChildren(grandChild1)).toEqual([]);
	expect(getParent(root)).toBe(null);
	expect(getParent(child1)).toBe(root);
	expect(getParent(child2)).toBe(root);
	expect(getParent(grandChild1)).toBe(child1);
	expect(getParent(grandChild2)).toBe(child1);
});

test("insertBefore should return the reference sibling", () => {
	clearAllRelatables();
	setChildren(root, child4);

	expect(() => insertBefore(child3, child1, child2, child3)).toThrowError();
	expect(insertBefore(child4, child3)).toBe(child4);
	expect(insertBefore(child3, child1, child2, child3)).toBe(child3);
});
test("insertBefore should set the reference to the child and the parent", () => {
	clearAllRelatables();
	setChildren(root, child4);
	insertBefore(child4, child3);
	insertBefore(child3, child1, child2);

	expect(getChildren(root)).toEqual([child1, child2, child3, child4]);
	expect(getParent(child1)).toEqual(root);
	expect(getParent(child2)).toEqual(root);
	expect(getParent(child3)).toEqual(root);
	expect(getParent(child4)).toEqual(root);
	expect(getParent(root)).toEqual(null);
	expect(getChildren(child1)).toEqual([]);
	expect(getChildren(child2)).toEqual([]);
	expect(getChildren(child3)).toEqual([]);
	expect(getChildren(child4)).toEqual([]);
});
test("insertAfter should return the reference sibling", () => {
	clearAllRelatables();
	setChildren(root, child1);

	expect(() => insertAfter(child2, child3, child4)).toThrowError();
	expect(insertAfter(child1, child2)).toBe(child1);
	expect(insertAfter(child2, child3, child4)).toBe(child2);
});
test("insertAfter should set the reference to the child and the parent", () => {
	clearAllRelatables();
	setChildren(root, child1);
	insertAfter(child1, child2);
	insertAfter(child2, child3, child4);

	expect(getChildren(root)).toEqual([child1, child2, child3, child4]);
	expect(getParent(child1)).toEqual(root);
	expect(getParent(child2)).toEqual(root);
	expect(getParent(child3)).toEqual(root);
	expect(getParent(child4)).toEqual(root);
	expect(getParent(root)).toEqual(null);
	expect(getChildren(child1)).toEqual([]);
	expect(getChildren(child2)).toEqual([]);
	expect(getChildren(child3)).toEqual([]);
	expect(getChildren(child4)).toEqual([]);
});

test("replace should return the inserted item", () => {
	clearAllRelatables();
	setChildren(root, child1, child5, child3);
	expect(replace(child5, child2)).toBe(child2);
});
test("replace should set the reference to both children and the parent", () => {
	clearAllRelatables();
	setChildren(root, child1, child4, child3);
	replace(child4, child2);
	expect(getChildren(root)).toEqual([child1, child2, child3]);
	expect(getParent(child1)).toEqual(root);
	expect(getParent(child2)).toEqual(root);
	expect(getParent(child3)).toEqual(root);
	expect(getParent(child4)).toEqual(null);
	expect(getParent(root)).toEqual(null);
	expect(getChildren(child1)).toEqual([]);
	expect(getChildren(child2)).toEqual([]);
	expect(getChildren(child3)).toEqual([]);
	expect(getChildren(child4)).toEqual([]);
});
test("replace should allow us to ...spread an object without losing relationships", () => {
	clearAllRelatables();
	setChildren(root, child1);
	setChildren(child1, child2, child3);
	const newChild = replace(child1, { ...child1 });
	expect(getParent(child1)).toBeNull();
	expect(getChildren(child1)).toStrictEqual([]);
	expect(getParent(newChild)).toBe(root);
	expect(getChildren(newChild)).toStrictEqual([child2, child3]);
});
