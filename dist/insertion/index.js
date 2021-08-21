"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replace = exports.insertAfter = exports.insertBefore = exports.prependChildren = exports.prependChild = exports.appendChildren = exports.appendChild = exports.setChildren = void 0;
const strict_1 = require("assert/strict");
const validate_1 = require("../utilities/validate");
const maps_1 = require("../utilities/maps");
Object.defineProperty(exports, "setChildren", { enumerable: true, get: function () { return maps_1.setChildren; } });
function appendChild(parentObject, childObject) {
    validate_1.areValidRelatables(parentObject, childObject);
    if (parentObject === childObject) {
        return childObject;
    }
    const previousChildren = maps_1.getChildren(parentObject) || [];
    if (previousChildren[previousChildren.length - 1] === childObject) {
        return childObject;
    }
    const nextChildren = [...previousChildren, childObject];
    maps_1.setChildren(parentObject, ...nextChildren);
    return childObject;
}
exports.appendChild = appendChild;
function appendChildren(parentObjects, ...childObjects) {
    validate_1.areValidRelatables(parentObjects, ...childObjects);
    const previousChildren = maps_1.getChildren(parentObjects) || [];
    const nextChildren = [...previousChildren, ...childObjects].filter((child) => child !== parentObjects);
    maps_1.setChildren(parentObjects, ...nextChildren);
    return parentObjects;
}
exports.appendChildren = appendChildren;
function prependChild(parentObject, childObject) {
    if (parentObject === childObject) {
        return childObject;
    }
    validate_1.areValidRelatables(parentObject, childObject);
    const previousChildren = maps_1.getChildren(parentObject) || [];
    if (previousChildren[previousChildren.length - 1] === childObject) {
        return childObject;
    }
    const nextChildren = [childObject, ...previousChildren];
    maps_1.setChildren(parentObject, ...nextChildren);
    return childObject;
}
exports.prependChild = prependChild;
function prependChildren(parentObject, ...childObjects) {
    validate_1.areValidRelatables(parentObject, ...childObjects);
    const previousChildren = maps_1.getChildren(parentObject) || [];
    const nextChildren = [...childObjects, ...previousChildren].filter((child) => child !== parentObject);
    maps_1.setChildren(parentObject, ...nextChildren);
    return parentObject;
}
exports.prependChildren = prependChildren;
function insertBefore(referenceSibling, ...siblingObjects) {
    validate_1.areValidRelatables(referenceSibling, ...siblingObjects);
    const parent = maps_1.getParent(referenceSibling);
    strict_1.strict(parent !== null);
    const previousChildren = maps_1.getChildren(parent) || [];
    const index = previousChildren.indexOf(referenceSibling);
    const nextChildren = [...previousChildren];
    siblingObjects = siblingObjects.filter((sibling) => sibling !== referenceSibling && sibling !== parent);
    nextChildren.splice(index, 0, ...siblingObjects);
    maps_1.setChildren(parent, ...nextChildren);
    return referenceSibling;
}
exports.insertBefore = insertBefore;
function insertAfter(referenceSibling, ...siblingObjects) {
    validate_1.areValidRelatables(referenceSibling, ...siblingObjects);
    const parent = maps_1.getParent(referenceSibling);
    strict_1.strict(parent !== null);
    const previousChildren = maps_1.getChildren(parent) || [];
    const index = previousChildren.indexOf(referenceSibling);
    const nextChildren = [...previousChildren];
    siblingObjects = siblingObjects.filter((sibling) => sibling !== referenceSibling && sibling !== parent);
    nextChildren.splice(index + 1, 0, ...siblingObjects);
    maps_1.setChildren(parent, ...nextChildren);
    return referenceSibling;
}
exports.insertAfter = insertAfter;
function replace(previousObject, replacementObject) {
    if (previousObject === replacementObject) {
        return replacementObject;
    }
    validate_1.areValidRelatables(previousObject, replacementObject);
    const parent = maps_1.getParent(previousObject);
    const children = maps_1.getChildren(previousObject);
    if (parent !== null) {
        const previousSiblings = maps_1.getChildren(parent) || [];
        const index = previousSiblings.indexOf(previousObject);
        const nextSiblings = [...previousSiblings];
        nextSiblings.splice(index, 1, replacementObject);
        maps_1.setChildren(parent, ...nextSiblings);
    }
    maps_1.setChildren(replacementObject, ...children);
    return replacementObject;
}
exports.replace = replace;
