"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const root = { name: "root" };
const child1 = { name: "child 1" };
const child2 = { name: "child 2" };
const child3 = { name: "child 3" };
const child4 = { name: "child 4" };
const index_1 = require("./index");
test("removeParent should return the child", () => {
    utilities_1.setChildren(root, child1);
    expect(index_1.removeParent(child1)).toBe(child1);
});
test("removeParent should delete the reference to the child and the parent", () => {
    utilities_1.clearAllRelatables();
    utilities_1.setChildren(root, child1, child2);
    expect(utilities_1.getChildren(root)).toStrictEqual([child1, child2]);
    expect(index_1.removeParent(child1)).toStrictEqual(child1);
    expect(utilities_1.getParent(root)).toStrictEqual(null);
    expect(utilities_1.getParent(child1)).toStrictEqual(null);
    expect(utilities_1.getParent(child2)).toStrictEqual(root);
    expect(utilities_1.getChildren(root)).toStrictEqual([child2]);
});
test("removeChild should return the child", () => {
    utilities_1.clearAllRelatables();
    utilities_1.setChildren(root, child1);
    expect(index_1.removeChild(root, child1)).toBe(child1);
});
test("removeChild should set the reference to the child and the parent", () => {
    utilities_1.clearAllRelatables();
    utilities_1.setChildren(root, child1, child2);
    index_1.removeChild(root, child1);
    expect(utilities_1.getParent(root)).toStrictEqual(null);
    expect(utilities_1.getParent(child1)).toStrictEqual(null);
    expect(utilities_1.getParent(child2)).toStrictEqual(root);
    expect(utilities_1.getChildren(root)).toStrictEqual([child2]);
});
test("removeChildren should return the parent", () => {
    utilities_1.clearAllRelatables();
    utilities_1.setChildren(root, child1, child2, child3, child4);
    expect(index_1.removeChildren(root, child1, child2)).toStrictEqual(root);
});
test("removeChildren should set the reference to the children and the parent", () => {
    utilities_1.clearAllRelatables();
    utilities_1.setChildren(root, child1, child2, child3, child4);
    index_1.removeChildren(root, child1, child2);
    expect(utilities_1.getParent(root)).toStrictEqual(null);
    expect(utilities_1.getParent(child1)).toStrictEqual(null);
    expect(utilities_1.getParent(child2)).toStrictEqual(null);
    expect(utilities_1.getParent(child3)).toStrictEqual(root);
    expect(utilities_1.getParent(child4)).toStrictEqual(root);
    expect(utilities_1.getChildren(root)).toStrictEqual([child3, child4]);
});
test("removeAllChildren should return the parent", () => {
    utilities_1.clearAllRelatables();
    utilities_1.setChildren(root, child1, child2, child3);
    utilities_1.setChildren(child3, child4);
    expect(index_1.removeAllChildren(root)).toBe(root);
});
test("removeAllChildren should set the reference to the children and the parent", () => {
    utilities_1.clearAllRelatables();
    utilities_1.setChildren(root, child1, child2, child3);
    utilities_1.setChildren(child3, child4);
    expect(index_1.removeAllChildren(root)).toBe(root);
    expect(utilities_1.getParent(root)).toStrictEqual(null);
    expect(utilities_1.getParent(child1)).toStrictEqual(null);
    expect(utilities_1.getParent(child2)).toStrictEqual(null);
    expect(utilities_1.getParent(child3)).toStrictEqual(null);
    expect(utilities_1.getParent(child4)).toStrictEqual(child3);
    expect(utilities_1.getChildren(root)).toStrictEqual([]);
    expect(utilities_1.getChildren(child1)).toStrictEqual([]);
    expect(utilities_1.getChildren(child2)).toStrictEqual([]);
    expect(utilities_1.getChildren(child3)).toStrictEqual([child4]);
    expect(utilities_1.getChildren(child4)).toStrictEqual([]);
});
