import { setChildren } from "../utilities";
import {
	getParent,
	getAncestors,
	getInclusiveAncestors,
	getChildren,
	getFirstChild,
	getLastChild,
	getInclusiveSiblings,
	getSiblings,
	getPreviousSiblings,
	getNextSiblings,
	getNextSibling,
	getPreviousSibling,
} from "./index";

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

setChildren(root, parent1, parent2, parent3);
setChildren(parent1, child1, child2);
setChildren(parent2, child3, child4);
setChildren(parent3);
setChildren(child1, grandChild1, grandChild2, grandChild3);
setChildren(child2, grandChild4, grandChild5);
setChildren(child3, grandChild6);
setChildren(child4);
test("getParent", () => {
	expect(getParent(root)).toBe(null);
	expect(getParent(parent1)).toBe(root);
	expect(getParent(parent2)).toBe(root);
	expect(getParent(parent3)).toBe(root);
	expect(getParent(child1)).toBe(parent1);
	expect(getParent(child2)).toBe(parent1);
	expect(getParent(child3)).toBe(parent2);
	expect(getParent(child4)).toBe(parent2);
	expect(getParent(grandChild1)).toBe(child1);
	expect(getParent(grandChild2)).toBe(child1);
	expect(getParent(grandChild3)).toBe(child1);
	expect(getParent(grandChild4)).toBe(child2);
	expect(getParent(grandChild5)).toBe(child2);
	expect(getParent(grandChild6)).toBe(child3);
});
test("getAncestors", () => {
	expect(getAncestors(root)).toStrictEqual(null);
	expect(getAncestors(parent1)).toStrictEqual([root]);
	expect(getAncestors(parent2)).toStrictEqual([root]);
	expect(getAncestors(parent3)).toStrictEqual([root]);
	expect(getAncestors(child1)).toStrictEqual([root, parent1]);
	expect(getAncestors(child2)).toStrictEqual([root, parent1]);
	expect(getAncestors(child3)).toStrictEqual([root, parent2]);
	expect(getAncestors(child4)).toStrictEqual([root, parent2]);
	expect(getAncestors(grandChild1)).toStrictEqual([root, parent1, child1]);
	expect(getAncestors(grandChild2)).toStrictEqual([root, parent1, child1]);
	expect(getAncestors(grandChild3)).toStrictEqual([root, parent1, child1]);
	expect(getAncestors(grandChild4)).toStrictEqual([root, parent1, child2]);
	expect(getAncestors(grandChild5)).toStrictEqual([root, parent1, child2]);
	expect(getAncestors(grandChild6)).toStrictEqual([root, parent2, child3]);
});
test("getInclusiveAncestors", () => {
	expect(getInclusiveAncestors(root)).toStrictEqual([root]);
	expect(getInclusiveAncestors(parent1)).toStrictEqual([root, parent1]);
	expect(getInclusiveAncestors(parent2)).toStrictEqual([root, parent2]);
	expect(getInclusiveAncestors(parent3)).toStrictEqual([root, parent3]);
	expect(getInclusiveAncestors(child1)).toStrictEqual([root, parent1, child1]);
	expect(getInclusiveAncestors(child2)).toStrictEqual([root, parent1, child2]);
	expect(getInclusiveAncestors(child3)).toStrictEqual([root, parent2, child3]);
	expect(getInclusiveAncestors(child4)).toStrictEqual([root, parent2, child4]);
	expect(getInclusiveAncestors(grandChild1)).toStrictEqual([
		root,
		parent1,
		child1,
		grandChild1,
	]);
	expect(getInclusiveAncestors(grandChild2)).toStrictEqual([
		root,
		parent1,
		child1,
		grandChild2,
	]);
	expect(getInclusiveAncestors(grandChild3)).toStrictEqual([
		root,
		parent1,
		child1,
		grandChild3,
	]);
	expect(getInclusiveAncestors(grandChild4)).toStrictEqual([
		root,
		parent1,
		child2,
		grandChild4,
	]);
	expect(getInclusiveAncestors(grandChild5)).toStrictEqual([
		root,
		parent1,
		child2,
		grandChild5,
	]);
	expect(getInclusiveAncestors(grandChild6)).toStrictEqual([
		root,
		parent2,
		child3,
		grandChild6,
	]);
});
test("getChildren", () => {
	expect(getChildren(root)).toStrictEqual([parent1, parent2, parent3]);
	expect(getChildren(parent1)).toStrictEqual([child1, child2]);
	expect(getChildren(parent2)).toStrictEqual([child3, child4]);
	expect(getChildren(parent3)).toStrictEqual([]);
	expect(getChildren(child1)).toStrictEqual([
		grandChild1,
		grandChild2,
		grandChild3,
	]);
	expect(getChildren(child2)).toStrictEqual([grandChild4, grandChild5]);
	expect(getChildren(child3)).toStrictEqual([grandChild6]);
	expect(getChildren(child4)).toStrictEqual([]);
	expect(getChildren(grandChild1)).toStrictEqual([]);
	expect(getChildren(grandChild2)).toStrictEqual([]);
	expect(getChildren(grandChild3)).toStrictEqual([]);
	expect(getChildren(grandChild4)).toStrictEqual([]);
	expect(getChildren(grandChild5)).toStrictEqual([]);
	expect(getChildren(grandChild6)).toStrictEqual([]);
});
test("getFirstChild", () => {
	expect(getFirstChild(root)).toBe(parent1);
	expect(getFirstChild(parent1)).toBe(child1);
	expect(getFirstChild(parent2)).toBe(child3);
	expect(getFirstChild(parent3)).toBe(null);
	expect(getFirstChild(child1)).toBe(grandChild1);
	expect(getFirstChild(child2)).toBe(grandChild4);
	expect(getFirstChild(child3)).toBe(grandChild6);
	expect(getFirstChild(child4)).toBe(null);
	expect(getFirstChild(grandChild1)).toBe(null);
	expect(getFirstChild(grandChild2)).toBe(null);
	expect(getFirstChild(grandChild3)).toBe(null);
	expect(getFirstChild(grandChild4)).toBe(null);
	expect(getFirstChild(grandChild5)).toBe(null);
	expect(getFirstChild(grandChild6)).toBe(null);
});
test("getLastChild", () => {
	expect(getLastChild(root)).toBe(parent3);
	expect(getLastChild(parent1)).toBe(child2);
	expect(getLastChild(parent2)).toBe(child4);
	expect(getLastChild(parent3)).toBe(null);
	expect(getLastChild(child1)).toBe(grandChild3);
	expect(getLastChild(child2)).toBe(grandChild5);
	expect(getLastChild(child3)).toBe(grandChild6);
	expect(getLastChild(child4)).toBe(null);
	expect(getLastChild(grandChild1)).toBe(null);
	expect(getLastChild(grandChild2)).toBe(null);
	expect(getLastChild(grandChild3)).toBe(null);
	expect(getLastChild(grandChild4)).toBe(null);
	expect(getLastChild(grandChild5)).toBe(null);
	expect(getLastChild(grandChild6)).toBe(null);
});
test("getInclusiveSiblings", () => {
	expect(getInclusiveSiblings(root)).toStrictEqual(null);
	expect(getInclusiveSiblings(parent1)).toStrictEqual([
		parent1,
		parent2,
		parent3,
	]);
	expect(getInclusiveSiblings(parent2)).toStrictEqual([
		parent1,
		parent2,
		parent3,
	]);
	expect(getInclusiveSiblings(parent3)).toStrictEqual([
		parent1,
		parent2,
		parent3,
	]);
	expect(getInclusiveSiblings(child1)).toStrictEqual([child1, child2]);
	expect(getInclusiveSiblings(child2)).toStrictEqual([child1, child2]);
	expect(getInclusiveSiblings(child3)).toStrictEqual([child3, child4]);
	expect(getInclusiveSiblings(child4)).toStrictEqual([child3, child4]);
	expect(getInclusiveSiblings(grandChild1)).toStrictEqual([
		grandChild1,
		grandChild2,
		grandChild3,
	]);
	expect(getInclusiveSiblings(grandChild2)).toStrictEqual([
		grandChild1,
		grandChild2,
		grandChild3,
	]);
	expect(getInclusiveSiblings(grandChild3)).toStrictEqual([
		grandChild1,
		grandChild2,
		grandChild3,
	]);
	expect(getInclusiveSiblings(grandChild4)).toStrictEqual([
		grandChild4,
		grandChild5,
	]);
	expect(getInclusiveSiblings(grandChild5)).toStrictEqual([
		grandChild4,
		grandChild5,
	]);
	expect(getInclusiveSiblings(grandChild6)).toStrictEqual([grandChild6]);
});
test("getSiblings", () => {
	expect(getSiblings(root)).toStrictEqual(null);
	expect(getSiblings(parent1)).toStrictEqual([parent2, parent3]);
	expect(getSiblings(parent2)).toStrictEqual([parent1, parent3]);
	expect(getSiblings(parent3)).toStrictEqual([parent1, parent2]);
	expect(getSiblings(child1)).toStrictEqual([child2]);
	expect(getSiblings(child2)).toStrictEqual([child1]);
	expect(getSiblings(child3)).toStrictEqual([child4]);
	expect(getSiblings(child4)).toStrictEqual([child3]);
	expect(getSiblings(grandChild1)).toStrictEqual([grandChild2, grandChild3]);
	expect(getSiblings(grandChild2)).toStrictEqual([grandChild1, grandChild3]);
	expect(getSiblings(grandChild3)).toStrictEqual([grandChild1, grandChild2]);
	expect(getSiblings(grandChild4)).toStrictEqual([grandChild5]);
	expect(getSiblings(grandChild5)).toStrictEqual([grandChild4]);
	expect(getSiblings(grandChild6)).toStrictEqual([]);
});
test("getPreviousSiblings", () => {
	expect(getPreviousSiblings(root)).toStrictEqual(null);
	expect(getPreviousSiblings(parent1)).toStrictEqual([]);
	expect(getPreviousSiblings(parent2)).toStrictEqual([parent1]);
	expect(getPreviousSiblings(parent3)).toStrictEqual([parent1, parent2]);
	expect(getPreviousSiblings(child1)).toStrictEqual([]);
	expect(getPreviousSiblings(child2)).toStrictEqual([child1]);
	expect(getPreviousSiblings(child3)).toStrictEqual([]);
	expect(getPreviousSiblings(child4)).toStrictEqual([child3]);
	expect(getPreviousSiblings(grandChild1)).toStrictEqual([]);
	expect(getPreviousSiblings(grandChild2)).toStrictEqual([grandChild1]);
	expect(getPreviousSiblings(grandChild3)).toStrictEqual([
		grandChild1,
		grandChild2,
	]);
	expect(getPreviousSiblings(grandChild4)).toStrictEqual([]);
	expect(getPreviousSiblings(grandChild5)).toStrictEqual([grandChild4]);
	expect(getPreviousSiblings(grandChild6)).toStrictEqual([]);
});

test("getPreviousSibling", () => {
	expect(getPreviousSibling(root)).toStrictEqual(null);
	expect(getPreviousSibling(parent1)).toStrictEqual(null);
	expect(getPreviousSibling(parent2)).toStrictEqual(parent1);
	expect(getPreviousSibling(parent3)).toStrictEqual(parent2);
	expect(getPreviousSibling(child1)).toStrictEqual(null);
	expect(getPreviousSibling(child2)).toStrictEqual(child1);
	expect(getPreviousSibling(child3)).toStrictEqual(null);
	expect(getPreviousSibling(child4)).toStrictEqual(child3);
	expect(getPreviousSibling(grandChild1)).toStrictEqual(null);
	expect(getPreviousSibling(grandChild2)).toStrictEqual(grandChild1);
	expect(getPreviousSibling(grandChild3)).toStrictEqual(grandChild2);
	expect(getPreviousSibling(grandChild4)).toStrictEqual(null);
	expect(getPreviousSibling(grandChild5)).toStrictEqual(grandChild4);
	expect(getPreviousSibling(grandChild6)).toStrictEqual(null);
});

test("getNextSiblings", () => {
	expect(getNextSiblings(root)).toStrictEqual(null);
	expect(getNextSiblings(parent1)).toStrictEqual([parent2, parent3]);
	expect(getNextSiblings(parent2)).toStrictEqual([parent3]);
	expect(getNextSiblings(parent3)).toStrictEqual([]);
	expect(getNextSiblings(child1)).toStrictEqual([child2]);
	expect(getNextSiblings(child2)).toStrictEqual([]);
	expect(getNextSiblings(child3)).toStrictEqual([child4]);
	expect(getNextSiblings(child4)).toStrictEqual([]);
	expect(getNextSiblings(grandChild1)).toStrictEqual([
		grandChild2,
		grandChild3,
	]);
	expect(getNextSiblings(grandChild2)).toStrictEqual([grandChild3]);
	expect(getNextSiblings(grandChild3)).toStrictEqual([]);
	expect(getNextSiblings(grandChild4)).toStrictEqual([grandChild5]);
	expect(getNextSiblings(grandChild5)).toStrictEqual([]);
	expect(getNextSiblings(grandChild6)).toStrictEqual([]);
});
test("getNextSibling", () => {
	expect(getNextSibling(root)).toBe(null);
	expect(getNextSibling(parent1)).toBe(parent2);
	expect(getNextSibling(parent2)).toBe(parent3);
	expect(getNextSibling(parent3)).toBe(null);
	expect(getNextSibling(child1)).toBe(child2);
	expect(getNextSibling(child2)).toBe(null);
	expect(getNextSibling(child3)).toBe(child4);
	expect(getNextSibling(child4)).toBe(null);
	expect(getNextSibling(grandChild1)).toBe(grandChild2);
	expect(getNextSibling(grandChild2)).toBe(grandChild3);
	expect(getNextSibling(grandChild3)).toBe(null);
	expect(getNextSibling(grandChild4)).toBe(grandChild5);
	expect(getNextSibling(grandChild5)).toBe(null);
	expect(getNextSibling(grandChild6)).toBe(null);
});
