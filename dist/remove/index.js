"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAllChildren = exports.removeChildren = exports.removeChild = exports.removeParent = void 0;
const strict_1 = require("assert/strict");
const traversal_1 = require("../traversal");
const validate_1 = require("../utilities/validate");
const maps_1 = require("../utilities/maps");
Object.defineProperty(exports, "removeParent", { enumerable: true, get: function () { return maps_1.removeParent; } });
function removeChild(parentObject, childObject) {
    validate_1.areValidRelatables(parentObject, childObject);
    const previousParent = traversal_1.getParent(childObject);
    strict_1.strict.equal(previousParent, parentObject);
    maps_1.removeParent(childObject);
    return childObject;
}
exports.removeChild = removeChild;
function removeChildren(parentObject, ...childObjects) {
    validate_1.areValidRelatables(parentObject, ...childObjects);
    childObjects.forEach((child) => {
        const previousParent = traversal_1.getParent(child);
        strict_1.strict.equal(previousParent, parentObject);
    });
    childObjects.map((child) => maps_1.removeParent(child));
    return parentObject;
}
exports.removeChildren = removeChildren;
function removeAllChildren(parentObject) {
    traversal_1.getChildren(parentObject).map((child) => maps_1.removeParent(child));
    return parentObject;
}
exports.removeAllChildren = removeAllChildren;
exports.default = {
    removeParent: maps_1.removeParent,
    removeChild,
    removeChildren,
    removeAllChildren,
};
