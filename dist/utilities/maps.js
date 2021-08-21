"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParent = exports.removeParent = exports.getChildren = exports.setChildren = exports.clearAllRelatables = exports.parentMap = exports.childMap = void 0;
class ChildrenMap extends Map {
}
class ParentMap extends Map {
}
exports.childMap = new ChildrenMap();
exports.parentMap = new ParentMap();
function clearAllRelatables() {
    exports.childMap.clear();
    exports.parentMap.clear();
}
exports.clearAllRelatables = clearAllRelatables;
function setChildren(newParent, ...newChildren) {
    const previousChildren = getChildren(newParent);
    previousChildren.forEach((previousChild) => {
        if (!newChildren.includes(previousChild)) {
            removeParent(previousChild);
        }
    });
    newChildren = newChildren.filter((child) => {
        if (child !== newParent) {
            removeParent(child);
            exports.parentMap.set(child, newParent);
        }
        return child !== newParent;
    });
    exports.childMap.set(newParent, newChildren);
    return newChildren;
}
exports.setChildren = setChildren;
function getChildren(parent) {
    const children = exports.childMap.get(parent);
    return Array.isArray(children) ? [...children] : [];
}
exports.getChildren = getChildren;
function removeParent(childObject) {
    const previousParent = getParent(childObject);
    if (previousParent) {
        const previousChildren = getChildren(previousParent);
        const nextChildren = previousChildren.filter((previousChild) => {
            return previousChild !== childObject;
        });
        exports.childMap.set(previousParent, nextChildren);
    }
    exports.parentMap.delete(childObject);
    return childObject;
}
exports.removeParent = removeParent;
function getParent(child) {
    return exports.parentMap.get(child) || null;
}
exports.getParent = getParent;
