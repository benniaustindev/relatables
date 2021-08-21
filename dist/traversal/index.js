"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPreviousSibling = exports.getNextSibling = exports.getNextSiblings = exports.getPreviousSiblings = exports.getSiblings = exports.getInclusiveSiblings = exports.getLastChild = exports.getFirstChild = exports.getInclusiveAncestors = exports.getAncestors = exports.getChildren = exports.getParent = void 0;
const validate_1 = require("../utilities/validate");
const maps_1 = require("../utilities/maps");
Object.defineProperty(exports, "getChildren", { enumerable: true, get: function () { return maps_1.getChildren; } });
Object.defineProperty(exports, "getParent", { enumerable: true, get: function () { return maps_1.getParent; } });
function getAncestors(descendentObject) {
    validate_1.isValidRelatable(descendentObject);
    let parent = maps_1.getParent(descendentObject);
    if (parent) {
        return getInclusiveAncestors(parent);
    }
    return null;
}
exports.getAncestors = getAncestors;
function getInclusiveAncestors(object) {
    const ancestors = [object];
    let parent = maps_1.getParent(object);
    while (parent !== null) {
        ancestors.unshift(parent);
        parent = maps_1.getParent(parent);
    }
    return ancestors;
}
exports.getInclusiveAncestors = getInclusiveAncestors;
function getFirstChild(parentObject) {
    validate_1.isValidRelatable(parentObject);
    return maps_1.getChildren(parentObject)[0] || null;
}
exports.getFirstChild = getFirstChild;
function getLastChild(parentObject) {
    validate_1.isValidRelatable(parentObject);
    const children = maps_1.getChildren(parentObject);
    return children[children.length - 1] || null;
}
exports.getLastChild = getLastChild;
function getInclusiveSiblings(siblingObject) {
    validate_1.isValidRelatable(siblingObject);
    const parent = maps_1.getParent(siblingObject);
    if (parent) {
        const siblings = maps_1.getChildren(parent);
        return siblings;
    }
    else
        return null;
}
exports.getInclusiveSiblings = getInclusiveSiblings;
function getSiblings(siblingObject) {
    validate_1.isValidRelatable(siblingObject);
    const inclusiveSiblings = getInclusiveSiblings(siblingObject);
    if (inclusiveSiblings !== null) {
        return inclusiveSiblings.filter((sibling) => sibling !== siblingObject);
    }
    return null;
}
exports.getSiblings = getSiblings;
function getPreviousSiblings(siblingObject) {
    validate_1.isValidRelatable(siblingObject);
    const inclusiveSiblings = getInclusiveSiblings(siblingObject);
    if (inclusiveSiblings) {
        const index = inclusiveSiblings.indexOf(siblingObject);
        return inclusiveSiblings.slice(0, index) || [];
    }
    return null;
}
exports.getPreviousSiblings = getPreviousSiblings;
function getNextSiblings(siblingObject) {
    validate_1.isValidRelatable(siblingObject);
    const inclusiveSiblings = getInclusiveSiblings(siblingObject);
    if (inclusiveSiblings) {
        const index = inclusiveSiblings.indexOf(siblingObject);
        return inclusiveSiblings.slice(index + 1) || [];
    }
    return null;
}
exports.getNextSiblings = getNextSiblings;
function getNextSibling(siblingObject) {
    validate_1.isValidRelatable(siblingObject);
    const inclusiveSiblings = getInclusiveSiblings(siblingObject);
    if (inclusiveSiblings) {
        const index = inclusiveSiblings.indexOf(siblingObject);
        return inclusiveSiblings[index + 1] || null;
    }
    return null;
}
exports.getNextSibling = getNextSibling;
function getPreviousSibling(siblingObject) {
    validate_1.isValidRelatable(siblingObject);
    const inclusiveSiblings = getInclusiveSiblings(siblingObject);
    if (inclusiveSiblings) {
        const index = inclusiveSiblings.indexOf(siblingObject);
        return inclusiveSiblings[index - 1] || null;
    }
    return null;
}
exports.getPreviousSibling = getPreviousSibling;
