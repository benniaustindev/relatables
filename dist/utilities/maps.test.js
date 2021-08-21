"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const maps_1 = require("./maps");
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
    expect(maps_1.setChildren(root, child1, child2)).toStrictEqual([child1, child2]);
    expect(maps_1.childMap.get(root)).toStrictEqual([child1, child2]);
    expect(maps_1.setChildren(root, child3, child4)).toStrictEqual([child3, child4]);
    expect(maps_1.childMap.get(root)).toStrictEqual([child3, child4]);
    expect(maps_1.parentMap.get(root)).toStrictEqual(undefined);
    expect(maps_1.parentMap.get(child1)).toStrictEqual(undefined);
    expect(maps_1.parentMap.get(child2)).toStrictEqual(undefined);
    expect(maps_1.parentMap.get(child3)).toStrictEqual(root);
    expect(maps_1.parentMap.get(child4)).toStrictEqual(root);
});
test("clearAllRelatables should remove all references to parents and children", () => {
    maps_1.clearAllRelatables();
    expect(maps_1.childMap.size).toBe(0);
    expect(maps_1.parentMap.size).toBe(0);
});
test("setChildren should not let you to add a child to itself", () => {
    maps_1.clearAllRelatables();
    expect(maps_1.setChildren(child1, child1)).toEqual([]);
    expect(maps_1.setChildren(child1, child1, child2, child3, child4)).toEqual([
        child2,
        child3,
        child4,
    ]);
});
test("getChildren should retrieve the correct children from the parent", () => {
    maps_1.clearAllRelatables();
    maps_1.setChildren(root, parent1, parent2, parent3);
    maps_1.setChildren(parent1, child1, child2);
    maps_1.setChildren(parent2, child3, child4);
    maps_1.setChildren(parent3);
    maps_1.setChildren(child1, grandChild1, grandChild2);
    maps_1.setChildren(child2, grandChild3, grandChild4);
    maps_1.setChildren(child3, grandChild5, grandChild6);
    maps_1.setChildren(child4);
    expect(maps_1.getChildren(root)).toStrictEqual([parent1, parent2, parent3]);
    expect(maps_1.getChildren(parent1)).toStrictEqual([child1, child2]);
    expect(maps_1.getChildren(parent2)).toStrictEqual([child3, child4]);
    expect(maps_1.getChildren(parent3)).toStrictEqual([]);
    expect(maps_1.getChildren(child1)).toStrictEqual([grandChild1, grandChild2]);
    expect(maps_1.getChildren(child2)).toStrictEqual([grandChild3, grandChild4]);
    expect(maps_1.getChildren(child3)).toStrictEqual([grandChild5, grandChild6]);
    expect(maps_1.getChildren(child4)).toStrictEqual([]);
    expect(maps_1.getChildren(grandChild1)).toStrictEqual([]);
    expect(maps_1.getChildren(grandChild2)).toStrictEqual([]);
    expect(maps_1.getChildren(grandChild3)).toStrictEqual([]);
    expect(maps_1.getChildren(grandChild4)).toStrictEqual([]);
    expect(maps_1.getChildren(grandChild5)).toStrictEqual([]);
    expect(maps_1.getChildren(grandChild6)).toStrictEqual([]);
    maps_1.setChildren(parent1, child1, child2, child3, child4);
    expect(maps_1.getChildren(parent1)).toStrictEqual([child1, child2, child3, child4]);
    expect(maps_1.getChildren(parent2)).toStrictEqual([]);
    expect(maps_1.getParent(child1)).toStrictEqual(parent1);
    expect(maps_1.getParent(child2)).toStrictEqual(parent1);
    expect(maps_1.getParent(child3)).toStrictEqual(parent1);
    expect(maps_1.getParent(child4)).toStrictEqual(parent1);
});
test("removeParent should return the child", () => {
    maps_1.clearAllRelatables();
    maps_1.setChildren(root, child1);
    expect(maps_1.removeParent(child1)).toStrictEqual(child1);
});
test("removeParent should delete the reference to the child and the parent", () => {
    maps_1.clearAllRelatables();
    maps_1.setChildren(root, child1, child2, child3);
    maps_1.removeParent(child2);
    expect(maps_1.getChildren(root)).toStrictEqual([child1, child3]);
    expect(maps_1.getChildren(child1)).toStrictEqual([]);
    expect(maps_1.getChildren(child2)).toStrictEqual([]);
    expect(maps_1.getChildren(child3)).toStrictEqual([]);
    expect(maps_1.getParent(root)).toStrictEqual(null);
    expect(maps_1.getParent(child1)).toStrictEqual(root);
    expect(maps_1.getParent(child2)).toStrictEqual(null);
    expect(maps_1.getParent(child3)).toStrictEqual(root);
});
