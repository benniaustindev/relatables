"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const _1 = require(".");
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
utilities_1.clearAllRelatables();
utilities_1.setChildren(root, parent1, parent2, parent3);
utilities_1.setChildren(parent1, child1, child2);
utilities_1.setChildren(parent2, child3, child4);
utilities_1.setChildren(parent3);
utilities_1.setChildren(child1, grandChild1, grandChild2);
utilities_1.setChildren(child2, grandChild3, grandChild4);
test("hasChildren should be able to tell whether something has is a parent or not", () => {
    expect(_1.hasChildren(root)).toBe(true);
    expect(_1.hasChildren(parent1)).toBe(true);
    expect(_1.hasChildren(parent2)).toBe(true);
    expect(_1.hasChildren(parent3)).toBe(false);
    expect(_1.hasChildren(child1)).toBe(true);
    expect(_1.hasChildren(child2)).toBe(true);
    expect(_1.hasChildren(child3)).toBe(false);
    expect(_1.hasChildren(child4)).toBe(false);
    expect(_1.hasChildren(grandChild1)).toBe(false);
    expect(_1.hasChildren(grandChild2)).toBe(false);
    expect(_1.hasChildren(grandChild2)).toBe(false);
    expect(_1.hasChildren(grandChild2)).toBe(false);
});
test("hasChild should be able to tell whether something has a specific child or not", () => {
    expect(_1.hasChild(root, parent1)).toBe(true);
    expect(_1.hasChild(parent1, child1)).toBe(true);
    expect(_1.hasChild(parent2, child2)).toBe(false);
    expect(_1.hasChild(parent3, child3)).toBe(false);
    expect(_1.hasChild(parent1, child2)).toBe(true);
});
test("hasDescendent should be able to tell whether something has a specific descendent nor not", () => {
    expect(_1.hasDescendent(root, parent1)).toBe(true);
    expect(_1.hasDescendent(root, parent2)).toBe(true);
    expect(_1.hasDescendent(root, parent3)).toBe(true);
    expect(_1.hasDescendent(root, child1)).toBe(true);
    expect(_1.hasDescendent(root, child2)).toBe(true);
    expect(_1.hasDescendent(root, child2)).toBe(true);
    expect(_1.hasDescendent(root, child3)).toBe(true);
    expect(_1.hasDescendent(root, grandChild1)).toBe(true);
    expect(_1.hasDescendent(root, grandChild1)).toBe(true);
    expect(_1.hasDescendent(root, grandChild1)).toBe(true);
    expect(_1.hasDescendent(root, grandChild1)).toBe(true);
    expect(_1.hasDescendent(parent1, child1)).toBe(true);
    expect(_1.hasDescendent(parent1, child2)).toBe(true);
    expect(_1.hasDescendent(parent1, child3)).toBe(false);
    expect(_1.hasDescendent(parent1, child4)).toBe(false);
});
test("hasAncestor should be able to tell whether something has a specific ancestor nor not", () => {
    expect(_1.hasAncestor(parent1, root)).toBe(true);
    expect(_1.hasAncestor(parent2, root)).toBe(true);
    expect(_1.hasAncestor(parent3, root)).toBe(true);
    expect(_1.hasAncestor(child1, root)).toBe(true);
    expect(_1.hasAncestor(child2, root)).toBe(true);
    expect(_1.hasAncestor(child2, root)).toBe(true);
    expect(_1.hasAncestor(child3, root)).toBe(true);
    expect(_1.hasAncestor(grandChild1, root)).toBe(true);
    expect(_1.hasAncestor(grandChild1, root)).toBe(true);
    expect(_1.hasAncestor(grandChild1, root)).toBe(true);
    expect(_1.hasAncestor(grandChild1, root)).toBe(true);
    expect(_1.hasAncestor(child1, parent1)).toBe(true);
    expect(_1.hasAncestor(child2, parent1)).toBe(true);
    expect(_1.hasAncestor(child3, parent1)).toBe(false);
    expect(_1.hasAncestor(child4, parent1)).toBe(false);
});
