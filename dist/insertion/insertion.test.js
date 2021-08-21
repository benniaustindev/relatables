"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const maps_1 = require("../utilities/maps");
const index_1 = require("./index");
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
    maps_1.clearAllRelatables();
    expect(index_1.setChildren(root, child1, child2)).toStrictEqual([child1, child2]);
    expect(maps_1.getChildren(root)).toStrictEqual([child1, child2]);
    expect(index_1.setChildren(root, child3, child4)).toStrictEqual([child3, child4]);
    expect(maps_1.getChildren(root)).toStrictEqual([child3, child4]);
    expect(maps_1.getParent(root)).toStrictEqual(null);
    expect(maps_1.getParent(child1)).toStrictEqual(null);
    expect(maps_1.getParent(child2)).toStrictEqual(null);
    expect(maps_1.getParent(child3)).toStrictEqual(root);
    expect(maps_1.getParent(child4)).toStrictEqual(root);
    expect(index_1.setChildren(root2, child1, child2, child3, child4)).toStrictEqual([
        child1,
        child2,
        child3,
        child4,
    ]);
    expect(maps_1.getParent(child1)).toStrictEqual(root2);
    expect(maps_1.getParent(child2)).toStrictEqual(root2);
    expect(maps_1.getParent(child3)).toStrictEqual(root2);
    expect(maps_1.getParent(child4)).toStrictEqual(root2);
    expect(maps_1.getChildren(root)).toStrictEqual([]);
    expect(maps_1.getChildren(root2)).toStrictEqual([child1, child2, child3, child4]);
    expect(index_1.setChildren(root2, root2, child1)).toStrictEqual([child1]);
});
test("appendChild should not allow you to set any object as a child of itself", () => {
    maps_1.clearAllRelatables();
    expect(index_1.appendChild(root, child1)).toBe(child1);
    expect(index_1.appendChild(root, child2)).toBe(child2);
    expect(index_1.appendChild(child1, grandChild1)).toBe(grandChild1);
});
test("appendChild should return the correct child", () => {
    maps_1.clearAllRelatables();
    expect(index_1.appendChild(root, child1)).toBe(child1);
    expect(index_1.appendChild(root, child2)).toBe(child2);
    expect(index_1.appendChild(child1, grandChild1)).toBe(grandChild1);
});
test("appendChild should set the reference to the child and parent", () => {
    maps_1.clearAllRelatables();
    index_1.setChildren(root, child1, child2);
    index_1.setChildren(child1, grandChild1, grandChild2);
    expect(maps_1.getChildren(root)).toEqual([child1, child2]);
    expect(maps_1.getChildren(child1)).toEqual([grandChild1, grandChild2]);
    expect(maps_1.getChildren(child2)).toEqual([]);
    expect(maps_1.getChildren(grandChild1)).toEqual([]);
    expect(maps_1.getParent(root)).toBe(null);
    expect(maps_1.getParent(child1)).toBe(root);
    expect(maps_1.getParent(child2)).toBe(root);
    expect(maps_1.getParent(grandChild1)).toBe(child1);
    expect(maps_1.getParent(grandChild2)).toBe(child1);
});
test("appendChildren should return the parent", () => {
    maps_1.clearAllRelatables();
    expect(index_1.appendChildren(root, child1, child2)).toBe(root);
    expect(index_1.appendChildren(child1, grandChild1)).toBe(child1);
});
test("appendChildren should set the reference to the child and parent", () => {
    maps_1.clearAllRelatables();
    index_1.setChildren(root, child1, child2);
    index_1.setChildren(child1, grandChild1, grandChild2);
    expect(maps_1.getChildren(root)).toEqual([child1, child2]);
    expect(maps_1.getChildren(child1)).toEqual([grandChild1, grandChild2]);
    expect(maps_1.getChildren(child2)).toEqual([]);
    expect(maps_1.getChildren(grandChild1)).toEqual([]);
    expect(maps_1.getParent(root)).toBe(null);
    expect(maps_1.getParent(child1)).toBe(root);
    expect(maps_1.getParent(child2)).toBe(root);
    expect(maps_1.getParent(grandChild1)).toBe(child1);
    expect(maps_1.getParent(grandChild2)).toBe(child1);
});
test("prependChild should return the correct child", () => {
    expect(index_1.prependChild(root, child1)).toBe(child1);
    expect(index_1.prependChild(root, child2)).toBe(child2);
    expect(index_1.prependChild(child1, grandChild1)).toBe(grandChild1);
});
test("prependChild should set the reference to the child and parent", () => {
    maps_1.clearAllRelatables();
    index_1.setChildren(root, child1, child2);
    index_1.setChildren(child1, grandChild1, grandChild2);
    expect(maps_1.getChildren(root)).toEqual([child1, child2]);
    expect(maps_1.getChildren(child1)).toEqual([grandChild1, grandChild2]);
    expect(maps_1.getChildren(child2)).toEqual([]);
    expect(maps_1.getChildren(grandChild1)).toEqual([]);
    expect(maps_1.getParent(root)).toBe(null);
    expect(maps_1.getParent(child1)).toBe(root);
    expect(maps_1.getParent(child2)).toBe(root);
    expect(maps_1.getParent(grandChild1)).toBe(child1);
    expect(maps_1.getParent(grandChild2)).toBe(child1);
});
test("prependChildren should return the parent", () => {
    maps_1.clearAllRelatables();
    expect(index_1.prependChildren(root, child1, child2)).toBe(root);
    expect(index_1.prependChildren(child1, grandChild1)).toBe(child1);
});
test("prependChildren should set the reference to the child and parent", () => {
    maps_1.clearAllRelatables();
    index_1.setChildren(root, child1, child2);
    index_1.setChildren(child1, grandChild1, grandChild2);
    expect(maps_1.getChildren(root)).toEqual([child1, child2]);
    expect(maps_1.getChildren(child1)).toEqual([grandChild1, grandChild2]);
    expect(maps_1.getChildren(child2)).toEqual([]);
    expect(maps_1.getChildren(grandChild1)).toEqual([]);
    expect(maps_1.getParent(root)).toBe(null);
    expect(maps_1.getParent(child1)).toBe(root);
    expect(maps_1.getParent(child2)).toBe(root);
    expect(maps_1.getParent(grandChild1)).toBe(child1);
    expect(maps_1.getParent(grandChild2)).toBe(child1);
});
test("insertBefore should return the reference sibling", () => {
    maps_1.clearAllRelatables();
    index_1.setChildren(root, child4);
    expect(() => index_1.insertBefore(child3, child1, child2, child3)).toThrowError();
    expect(index_1.insertBefore(child4, child3)).toBe(child4);
    expect(index_1.insertBefore(child3, child1, child2, child3)).toBe(child3);
});
test("insertBefore should set the reference to the child and the parent", () => {
    maps_1.clearAllRelatables();
    index_1.setChildren(root, child4);
    index_1.insertBefore(child4, child3);
    index_1.insertBefore(child3, child1, child2);
    expect(maps_1.getChildren(root)).toEqual([child1, child2, child3, child4]);
    expect(maps_1.getParent(child1)).toEqual(root);
    expect(maps_1.getParent(child2)).toEqual(root);
    expect(maps_1.getParent(child3)).toEqual(root);
    expect(maps_1.getParent(child4)).toEqual(root);
    expect(maps_1.getParent(root)).toEqual(null);
    expect(maps_1.getChildren(child1)).toEqual([]);
    expect(maps_1.getChildren(child2)).toEqual([]);
    expect(maps_1.getChildren(child3)).toEqual([]);
    expect(maps_1.getChildren(child4)).toEqual([]);
});
test("insertAfter should return the reference sibling", () => {
    maps_1.clearAllRelatables();
    index_1.setChildren(root, child1);
    expect(() => index_1.insertAfter(child2, child3, child4)).toThrowError();
    expect(index_1.insertAfter(child1, child2)).toBe(child1);
    expect(index_1.insertAfter(child2, child3, child4)).toBe(child2);
});
test("insertAfter should set the reference to the child and the parent", () => {
    maps_1.clearAllRelatables();
    index_1.setChildren(root, child1);
    index_1.insertAfter(child1, child2);
    index_1.insertAfter(child2, child3, child4);
    expect(maps_1.getChildren(root)).toEqual([child1, child2, child3, child4]);
    expect(maps_1.getParent(child1)).toEqual(root);
    expect(maps_1.getParent(child2)).toEqual(root);
    expect(maps_1.getParent(child3)).toEqual(root);
    expect(maps_1.getParent(child4)).toEqual(root);
    expect(maps_1.getParent(root)).toEqual(null);
    expect(maps_1.getChildren(child1)).toEqual([]);
    expect(maps_1.getChildren(child2)).toEqual([]);
    expect(maps_1.getChildren(child3)).toEqual([]);
    expect(maps_1.getChildren(child4)).toEqual([]);
});
test("replace should return the inserted item", () => {
    maps_1.clearAllRelatables();
    index_1.setChildren(root, child1, child5, child3);
    expect(index_1.replace(child5, child2)).toBe(child2);
});
test("replace should set the reference to both children and the parent", () => {
    maps_1.clearAllRelatables();
    index_1.setChildren(root, child1, child4, child3);
    index_1.replace(child4, child2);
    expect(maps_1.getChildren(root)).toEqual([child1, child2, child3]);
    expect(maps_1.getParent(child1)).toEqual(root);
    expect(maps_1.getParent(child2)).toEqual(root);
    expect(maps_1.getParent(child3)).toEqual(root);
    expect(maps_1.getParent(child4)).toEqual(null);
    expect(maps_1.getParent(root)).toEqual(null);
    expect(maps_1.getChildren(child1)).toEqual([]);
    expect(maps_1.getChildren(child2)).toEqual([]);
    expect(maps_1.getChildren(child3)).toEqual([]);
    expect(maps_1.getChildren(child4)).toEqual([]);
});
test("replace should allow us to ...spread an object without losing relationships", () => {
    maps_1.clearAllRelatables();
    index_1.setChildren(root, child1);
    index_1.setChildren(child1, child2, child3);
    const newChild = index_1.replace(child1, { ...child1 });
    expect(maps_1.getParent(child1)).toBeNull();
    expect(maps_1.getChildren(child1)).toStrictEqual([]);
    expect(maps_1.getParent(newChild)).toBe(root);
    expect(maps_1.getChildren(newChild)).toStrictEqual([child2, child3]);
});
