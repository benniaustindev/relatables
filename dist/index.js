"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAllChildren = exports.removeChildren = exports.removeParent = exports.removeChild = exports.hasDescendent = exports.hasChildren = exports.hasChild = exports.getPreviousSibling = exports.getNextSibling = exports.getNextSiblings = exports.getPreviousSiblings = exports.getSiblings = exports.getInclusiveSiblings = exports.getLastChild = exports.getFirstChild = exports.getChildren = exports.getAncestors = exports.getInclusiveAncestors = exports.getParent = exports.replace = exports.insertBefore = exports.insertAfter = exports.prependChildren = exports.prependChild = exports.appendChildren = exports.appendChild = exports.setChildren = exports.clearAllRelatables = exports.isValidRelatable = exports.areValidRelatables = void 0;
const traversal_1 = require("./traversal");
Object.defineProperty(exports, "getParent", { enumerable: true, get: function () { return traversal_1.getParent; } });
Object.defineProperty(exports, "getInclusiveAncestors", { enumerable: true, get: function () { return traversal_1.getInclusiveAncestors; } });
Object.defineProperty(exports, "getAncestors", { enumerable: true, get: function () { return traversal_1.getAncestors; } });
Object.defineProperty(exports, "getChildren", { enumerable: true, get: function () { return traversal_1.getChildren; } });
Object.defineProperty(exports, "getFirstChild", { enumerable: true, get: function () { return traversal_1.getFirstChild; } });
Object.defineProperty(exports, "getLastChild", { enumerable: true, get: function () { return traversal_1.getLastChild; } });
Object.defineProperty(exports, "getInclusiveSiblings", { enumerable: true, get: function () { return traversal_1.getInclusiveSiblings; } });
Object.defineProperty(exports, "getSiblings", { enumerable: true, get: function () { return traversal_1.getSiblings; } });
Object.defineProperty(exports, "getPreviousSiblings", { enumerable: true, get: function () { return traversal_1.getPreviousSiblings; } });
Object.defineProperty(exports, "getNextSiblings", { enumerable: true, get: function () { return traversal_1.getNextSiblings; } });
Object.defineProperty(exports, "getNextSibling", { enumerable: true, get: function () { return traversal_1.getNextSibling; } });
Object.defineProperty(exports, "getPreviousSibling", { enumerable: true, get: function () { return traversal_1.getPreviousSibling; } });
const comparison_1 = require("./comparison");
Object.defineProperty(exports, "hasChild", { enumerable: true, get: function () { return comparison_1.hasChild; } });
Object.defineProperty(exports, "hasChildren", { enumerable: true, get: function () { return comparison_1.hasChildren; } });
Object.defineProperty(exports, "hasDescendent", { enumerable: true, get: function () { return comparison_1.hasDescendent; } });
const remove_1 = require("./remove");
Object.defineProperty(exports, "removeChild", { enumerable: true, get: function () { return remove_1.removeChild; } });
Object.defineProperty(exports, "removeParent", { enumerable: true, get: function () { return remove_1.removeParent; } });
Object.defineProperty(exports, "removeChildren", { enumerable: true, get: function () { return remove_1.removeChildren; } });
Object.defineProperty(exports, "removeAllChildren", { enumerable: true, get: function () { return remove_1.removeAllChildren; } });
const insertion_1 = require("./insertion");
Object.defineProperty(exports, "appendChild", { enumerable: true, get: function () { return insertion_1.appendChild; } });
Object.defineProperty(exports, "appendChildren", { enumerable: true, get: function () { return insertion_1.appendChildren; } });
Object.defineProperty(exports, "prependChild", { enumerable: true, get: function () { return insertion_1.prependChild; } });
Object.defineProperty(exports, "prependChildren", { enumerable: true, get: function () { return insertion_1.prependChildren; } });
Object.defineProperty(exports, "insertAfter", { enumerable: true, get: function () { return insertion_1.insertAfter; } });
Object.defineProperty(exports, "insertBefore", { enumerable: true, get: function () { return insertion_1.insertBefore; } });
Object.defineProperty(exports, "replace", { enumerable: true, get: function () { return insertion_1.replace; } });
const validate_1 = require("./utilities/validate");
Object.defineProperty(exports, "areValidRelatables", { enumerable: true, get: function () { return validate_1.areValidRelatables; } });
Object.defineProperty(exports, "isValidRelatable", { enumerable: true, get: function () { return validate_1.isValidRelatable; } });
const maps_1 = require("./utilities/maps");
Object.defineProperty(exports, "clearAllRelatables", { enumerable: true, get: function () { return maps_1.clearAllRelatables; } });
Object.defineProperty(exports, "setChildren", { enumerable: true, get: function () { return maps_1.setChildren; } });
const relatableFunctions = {
    areValidRelatables: validate_1.areValidRelatables,
    isValidRelatable: validate_1.isValidRelatable,
    clearAllRelatables: maps_1.clearAllRelatables,
    setChildren: maps_1.setChildren,
    appendChild: insertion_1.appendChild,
    appendChildren: insertion_1.appendChildren,
    prependChild: insertion_1.prependChild,
    prependChildren: insertion_1.prependChildren,
    insertAfter: insertion_1.insertAfter,
    insertBefore: insertion_1.insertBefore,
    replace: insertion_1.replace,
    getParent: traversal_1.getParent,
    getInclusiveAncestors: traversal_1.getInclusiveAncestors,
    getAncestors: traversal_1.getAncestors,
    getChildren: traversal_1.getChildren,
    getFirstChild: traversal_1.getFirstChild,
    getLastChild: traversal_1.getLastChild,
    getInclusiveSiblings: traversal_1.getInclusiveSiblings,
    getSiblings: traversal_1.getSiblings,
    getPreviousSiblings: traversal_1.getPreviousSiblings,
    getNextSiblings: traversal_1.getNextSiblings,
    getNextSibling: traversal_1.getNextSibling,
    getPreviousSibling: traversal_1.getPreviousSibling,
    hasChild: comparison_1.hasChild,
    hasChildren: comparison_1.hasChildren,
    hasDescendent: comparison_1.hasDescendent,
    removeChild: remove_1.removeChild,
    removeParent: remove_1.removeParent,
    removeChildren: remove_1.removeChildren,
    removeAllChildren: remove_1.removeAllChildren,
};
exports.default = relatableFunctions;
