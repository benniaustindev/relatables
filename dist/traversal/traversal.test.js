"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const index_1 = require("./index");
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
utilities_1.setChildren(root, parent1, parent2, parent3);
utilities_1.setChildren(parent1, child1, child2);
utilities_1.setChildren(parent2, child3, child4);
utilities_1.setChildren(parent3);
utilities_1.setChildren(child1, grandChild1, grandChild2, grandChild3);
utilities_1.setChildren(child2, grandChild4, grandChild5);
utilities_1.setChildren(child3, grandChild6);
utilities_1.setChildren(child4);
test("getParent", () => {
    expect(index_1.getParent(root)).toBe(null);
    expect(index_1.getParent(parent1)).toBe(root);
    expect(index_1.getParent(parent2)).toBe(root);
    expect(index_1.getParent(parent3)).toBe(root);
    expect(index_1.getParent(child1)).toBe(parent1);
    expect(index_1.getParent(child2)).toBe(parent1);
    expect(index_1.getParent(child3)).toBe(parent2);
    expect(index_1.getParent(child4)).toBe(parent2);
    expect(index_1.getParent(grandChild1)).toBe(child1);
    expect(index_1.getParent(grandChild2)).toBe(child1);
    expect(index_1.getParent(grandChild3)).toBe(child1);
    expect(index_1.getParent(grandChild4)).toBe(child2);
    expect(index_1.getParent(grandChild5)).toBe(child2);
    expect(index_1.getParent(grandChild6)).toBe(child3);
});
test("getAncestors", () => {
    expect(index_1.getAncestors(root)).toStrictEqual(null);
    expect(index_1.getAncestors(parent1)).toStrictEqual([root]);
    expect(index_1.getAncestors(parent2)).toStrictEqual([root]);
    expect(index_1.getAncestors(parent3)).toStrictEqual([root]);
    expect(index_1.getAncestors(child1)).toStrictEqual([root, parent1]);
    expect(index_1.getAncestors(child2)).toStrictEqual([root, parent1]);
    expect(index_1.getAncestors(child3)).toStrictEqual([root, parent2]);
    expect(index_1.getAncestors(child4)).toStrictEqual([root, parent2]);
    expect(index_1.getAncestors(grandChild1)).toStrictEqual([root, parent1, child1]);
    expect(index_1.getAncestors(grandChild2)).toStrictEqual([root, parent1, child1]);
    expect(index_1.getAncestors(grandChild3)).toStrictEqual([root, parent1, child1]);
    expect(index_1.getAncestors(grandChild4)).toStrictEqual([root, parent1, child2]);
    expect(index_1.getAncestors(grandChild5)).toStrictEqual([root, parent1, child2]);
    expect(index_1.getAncestors(grandChild6)).toStrictEqual([root, parent2, child3]);
});
test("getInclusiveAncestors", () => {
    expect(index_1.getInclusiveAncestors(root)).toStrictEqual([root]);
    expect(index_1.getInclusiveAncestors(parent1)).toStrictEqual([root, parent1]);
    expect(index_1.getInclusiveAncestors(parent2)).toStrictEqual([root, parent2]);
    expect(index_1.getInclusiveAncestors(parent3)).toStrictEqual([root, parent3]);
    expect(index_1.getInclusiveAncestors(child1)).toStrictEqual([root, parent1, child1]);
    expect(index_1.getInclusiveAncestors(child2)).toStrictEqual([root, parent1, child2]);
    expect(index_1.getInclusiveAncestors(child3)).toStrictEqual([root, parent2, child3]);
    expect(index_1.getInclusiveAncestors(child4)).toStrictEqual([root, parent2, child4]);
    expect(index_1.getInclusiveAncestors(grandChild1)).toStrictEqual([
        root,
        parent1,
        child1,
        grandChild1,
    ]);
    expect(index_1.getInclusiveAncestors(grandChild2)).toStrictEqual([
        root,
        parent1,
        child1,
        grandChild2,
    ]);
    expect(index_1.getInclusiveAncestors(grandChild3)).toStrictEqual([
        root,
        parent1,
        child1,
        grandChild3,
    ]);
    expect(index_1.getInclusiveAncestors(grandChild4)).toStrictEqual([
        root,
        parent1,
        child2,
        grandChild4,
    ]);
    expect(index_1.getInclusiveAncestors(grandChild5)).toStrictEqual([
        root,
        parent1,
        child2,
        grandChild5,
    ]);
    expect(index_1.getInclusiveAncestors(grandChild6)).toStrictEqual([
        root,
        parent2,
        child3,
        grandChild6,
    ]);
});
test("getChildren", () => {
    expect(index_1.getChildren(root)).toStrictEqual([parent1, parent2, parent3]);
    expect(index_1.getChildren(parent1)).toStrictEqual([child1, child2]);
    expect(index_1.getChildren(parent2)).toStrictEqual([child3, child4]);
    expect(index_1.getChildren(parent3)).toStrictEqual([]);
    expect(index_1.getChildren(child1)).toStrictEqual([
        grandChild1,
        grandChild2,
        grandChild3,
    ]);
    expect(index_1.getChildren(child2)).toStrictEqual([grandChild4, grandChild5]);
    expect(index_1.getChildren(child3)).toStrictEqual([grandChild6]);
    expect(index_1.getChildren(child4)).toStrictEqual([]);
    expect(index_1.getChildren(grandChild1)).toStrictEqual([]);
    expect(index_1.getChildren(grandChild2)).toStrictEqual([]);
    expect(index_1.getChildren(grandChild3)).toStrictEqual([]);
    expect(index_1.getChildren(grandChild4)).toStrictEqual([]);
    expect(index_1.getChildren(grandChild5)).toStrictEqual([]);
    expect(index_1.getChildren(grandChild6)).toStrictEqual([]);
});
test("getFirstChild", () => {
    expect(index_1.getFirstChild(root)).toBe(parent1);
    expect(index_1.getFirstChild(parent1)).toBe(child1);
    expect(index_1.getFirstChild(parent2)).toBe(child3);
    expect(index_1.getFirstChild(parent3)).toBe(null);
    expect(index_1.getFirstChild(child1)).toBe(grandChild1);
    expect(index_1.getFirstChild(child2)).toBe(grandChild4);
    expect(index_1.getFirstChild(child3)).toBe(grandChild6);
    expect(index_1.getFirstChild(child4)).toBe(null);
    expect(index_1.getFirstChild(grandChild1)).toBe(null);
    expect(index_1.getFirstChild(grandChild2)).toBe(null);
    expect(index_1.getFirstChild(grandChild3)).toBe(null);
    expect(index_1.getFirstChild(grandChild4)).toBe(null);
    expect(index_1.getFirstChild(grandChild5)).toBe(null);
    expect(index_1.getFirstChild(grandChild6)).toBe(null);
});
test("getLastChild", () => {
    expect(index_1.getLastChild(root)).toBe(parent3);
    expect(index_1.getLastChild(parent1)).toBe(child2);
    expect(index_1.getLastChild(parent2)).toBe(child4);
    expect(index_1.getLastChild(parent3)).toBe(null);
    expect(index_1.getLastChild(child1)).toBe(grandChild3);
    expect(index_1.getLastChild(child2)).toBe(grandChild5);
    expect(index_1.getLastChild(child3)).toBe(grandChild6);
    expect(index_1.getLastChild(child4)).toBe(null);
    expect(index_1.getLastChild(grandChild1)).toBe(null);
    expect(index_1.getLastChild(grandChild2)).toBe(null);
    expect(index_1.getLastChild(grandChild3)).toBe(null);
    expect(index_1.getLastChild(grandChild4)).toBe(null);
    expect(index_1.getLastChild(grandChild5)).toBe(null);
    expect(index_1.getLastChild(grandChild6)).toBe(null);
});
test("getInclusiveSiblings", () => {
    expect(index_1.getInclusiveSiblings(root)).toStrictEqual(null);
    expect(index_1.getInclusiveSiblings(parent1)).toStrictEqual([
        parent1,
        parent2,
        parent3,
    ]);
    expect(index_1.getInclusiveSiblings(parent2)).toStrictEqual([
        parent1,
        parent2,
        parent3,
    ]);
    expect(index_1.getInclusiveSiblings(parent3)).toStrictEqual([
        parent1,
        parent2,
        parent3,
    ]);
    expect(index_1.getInclusiveSiblings(child1)).toStrictEqual([child1, child2]);
    expect(index_1.getInclusiveSiblings(child2)).toStrictEqual([child1, child2]);
    expect(index_1.getInclusiveSiblings(child3)).toStrictEqual([child3, child4]);
    expect(index_1.getInclusiveSiblings(child4)).toStrictEqual([child3, child4]);
    expect(index_1.getInclusiveSiblings(grandChild1)).toStrictEqual([
        grandChild1,
        grandChild2,
        grandChild3,
    ]);
    expect(index_1.getInclusiveSiblings(grandChild2)).toStrictEqual([
        grandChild1,
        grandChild2,
        grandChild3,
    ]);
    expect(index_1.getInclusiveSiblings(grandChild3)).toStrictEqual([
        grandChild1,
        grandChild2,
        grandChild3,
    ]);
    expect(index_1.getInclusiveSiblings(grandChild4)).toStrictEqual([
        grandChild4,
        grandChild5,
    ]);
    expect(index_1.getInclusiveSiblings(grandChild5)).toStrictEqual([
        grandChild4,
        grandChild5,
    ]);
    expect(index_1.getInclusiveSiblings(grandChild6)).toStrictEqual([grandChild6]);
});
test("getSiblings", () => {
    expect(index_1.getSiblings(root)).toStrictEqual(null);
    expect(index_1.getSiblings(parent1)).toStrictEqual([parent2, parent3]);
    expect(index_1.getSiblings(parent2)).toStrictEqual([parent1, parent3]);
    expect(index_1.getSiblings(parent3)).toStrictEqual([parent1, parent2]);
    expect(index_1.getSiblings(child1)).toStrictEqual([child2]);
    expect(index_1.getSiblings(child2)).toStrictEqual([child1]);
    expect(index_1.getSiblings(child3)).toStrictEqual([child4]);
    expect(index_1.getSiblings(child4)).toStrictEqual([child3]);
    expect(index_1.getSiblings(grandChild1)).toStrictEqual([grandChild2, grandChild3]);
    expect(index_1.getSiblings(grandChild2)).toStrictEqual([grandChild1, grandChild3]);
    expect(index_1.getSiblings(grandChild3)).toStrictEqual([grandChild1, grandChild2]);
    expect(index_1.getSiblings(grandChild4)).toStrictEqual([grandChild5]);
    expect(index_1.getSiblings(grandChild5)).toStrictEqual([grandChild4]);
    expect(index_1.getSiblings(grandChild6)).toStrictEqual([]);
});
test("getPreviousSiblings", () => {
    expect(index_1.getPreviousSiblings(root)).toStrictEqual(null);
    expect(index_1.getPreviousSiblings(parent1)).toStrictEqual([]);
    expect(index_1.getPreviousSiblings(parent2)).toStrictEqual([parent1]);
    expect(index_1.getPreviousSiblings(parent3)).toStrictEqual([parent1, parent2]);
    expect(index_1.getPreviousSiblings(child1)).toStrictEqual([]);
    expect(index_1.getPreviousSiblings(child2)).toStrictEqual([child1]);
    expect(index_1.getPreviousSiblings(child3)).toStrictEqual([]);
    expect(index_1.getPreviousSiblings(child4)).toStrictEqual([child3]);
    expect(index_1.getPreviousSiblings(grandChild1)).toStrictEqual([]);
    expect(index_1.getPreviousSiblings(grandChild2)).toStrictEqual([grandChild1]);
    expect(index_1.getPreviousSiblings(grandChild3)).toStrictEqual([
        grandChild1,
        grandChild2,
    ]);
    expect(index_1.getPreviousSiblings(grandChild4)).toStrictEqual([]);
    expect(index_1.getPreviousSiblings(grandChild5)).toStrictEqual([grandChild4]);
    expect(index_1.getPreviousSiblings(grandChild6)).toStrictEqual([]);
});
test("getPreviousSibling", () => {
    expect(index_1.getPreviousSibling(root)).toStrictEqual(null);
    expect(index_1.getPreviousSibling(parent1)).toStrictEqual(null);
    expect(index_1.getPreviousSibling(parent2)).toStrictEqual(parent1);
    expect(index_1.getPreviousSibling(parent3)).toStrictEqual(parent2);
    expect(index_1.getPreviousSibling(child1)).toStrictEqual(null);
    expect(index_1.getPreviousSibling(child2)).toStrictEqual(child1);
    expect(index_1.getPreviousSibling(child3)).toStrictEqual(null);
    expect(index_1.getPreviousSibling(child4)).toStrictEqual(child3);
    expect(index_1.getPreviousSibling(grandChild1)).toStrictEqual(null);
    expect(index_1.getPreviousSibling(grandChild2)).toStrictEqual(grandChild1);
    expect(index_1.getPreviousSibling(grandChild3)).toStrictEqual(grandChild2);
    expect(index_1.getPreviousSibling(grandChild4)).toStrictEqual(null);
    expect(index_1.getPreviousSibling(grandChild5)).toStrictEqual(grandChild4);
    expect(index_1.getPreviousSibling(grandChild6)).toStrictEqual(null);
});
test("getNextSiblings", () => {
    expect(index_1.getNextSiblings(root)).toStrictEqual(null);
    expect(index_1.getNextSiblings(parent1)).toStrictEqual([parent2, parent3]);
    expect(index_1.getNextSiblings(parent2)).toStrictEqual([parent3]);
    expect(index_1.getNextSiblings(parent3)).toStrictEqual([]);
    expect(index_1.getNextSiblings(child1)).toStrictEqual([child2]);
    expect(index_1.getNextSiblings(child2)).toStrictEqual([]);
    expect(index_1.getNextSiblings(child3)).toStrictEqual([child4]);
    expect(index_1.getNextSiblings(child4)).toStrictEqual([]);
    expect(index_1.getNextSiblings(grandChild1)).toStrictEqual([
        grandChild2,
        grandChild3,
    ]);
    expect(index_1.getNextSiblings(grandChild2)).toStrictEqual([grandChild3]);
    expect(index_1.getNextSiblings(grandChild3)).toStrictEqual([]);
    expect(index_1.getNextSiblings(grandChild4)).toStrictEqual([grandChild5]);
    expect(index_1.getNextSiblings(grandChild5)).toStrictEqual([]);
    expect(index_1.getNextSiblings(grandChild6)).toStrictEqual([]);
});
test("getNextSibling", () => {
    expect(index_1.getNextSibling(root)).toBe(null);
    expect(index_1.getNextSibling(parent1)).toBe(parent2);
    expect(index_1.getNextSibling(parent2)).toBe(parent3);
    expect(index_1.getNextSibling(parent3)).toBe(null);
    expect(index_1.getNextSibling(child1)).toBe(child2);
    expect(index_1.getNextSibling(child2)).toBe(null);
    expect(index_1.getNextSibling(child3)).toBe(child4);
    expect(index_1.getNextSibling(child4)).toBe(null);
    expect(index_1.getNextSibling(grandChild1)).toBe(grandChild2);
    expect(index_1.getNextSibling(grandChild2)).toBe(grandChild3);
    expect(index_1.getNextSibling(grandChild3)).toBe(null);
    expect(index_1.getNextSibling(grandChild4)).toBe(grandChild5);
    expect(index_1.getNextSibling(grandChild5)).toBe(null);
    expect(index_1.getNextSibling(grandChild6)).toBe(null);
});
