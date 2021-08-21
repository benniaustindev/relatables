"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasAncestor = exports.hasDescendent = exports.hasChild = exports.hasChildren = void 0;
const validate_1 = require("../utilities/validate");
const maps_1 = require("../utilities/maps");
function hasChildren(parentObject) {
    try {
        validate_1.isValidRelatable(parentObject);
    }
    catch {
        return false;
    }
    return Boolean(maps_1.getChildren(parentObject).length);
}
exports.hasChildren = hasChildren;
function hasChild(parentObject, childObject) {
    try {
        validate_1.areValidRelatables(parentObject, childObject);
    }
    catch {
        return false;
    }
    return maps_1.getParent(childObject) === parentObject;
}
exports.hasChild = hasChild;
function hasDescendent(ancestorObject, descendantObject) {
    try {
        validate_1.areValidRelatables(ancestorObject, descendantObject);
    }
    catch {
        return false;
    }
    const children = maps_1.getChildren(ancestorObject);
    if (!children) {
        return false;
    }
    if (children.includes(descendantObject)) {
        return true;
    }
    for (let grandchild of children) {
        if (hasDescendent(grandchild, descendantObject)) {
            return true;
        }
    }
    return false;
}
exports.hasDescendent = hasDescendent;
function hasAncestor(descendantObject, ancestorObject) {
    return hasDescendent(ancestorObject, descendantObject);
}
exports.hasAncestor = hasAncestor;
