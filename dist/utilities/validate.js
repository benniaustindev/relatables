"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidRelatable = exports.areValidRelatables = void 0;
const strict_1 = require("assert/strict");
const types_1 = require("util/types");
function areValidRelatables(...objects) {
    objects.forEach((object) => isValidRelatable(object));
}
exports.areValidRelatables = areValidRelatables;
function isValidRelatable(object) {
    strict_1.strict(object !== null, TypeError(`Invalid type passed to relatables [null]`));
    strict_1.strict(object !== undefined, TypeError(`Invalid type passed to relatables [undefined]`));
    if (typeof object === "string") {
        strict_1.strict(types_1.isBoxedPrimitive(object), TypeError(`Unboxed primitives don't work as relatables, did you mean to use new String(myValue)?`));
    }
    if (typeof object === "symbol") {
        strict_1.strict(types_1.isBoxedPrimitive(object), TypeError(`Unboxed primitives don't work as relatables, did you mean to use Object(Symbol())?`));
    }
    if (typeof object === "boolean") {
        strict_1.strict(types_1.isBoxedPrimitive(object), TypeError(`Unboxed primitives don't work as relatables, did you mean to use new Boolean(myValue)?`));
    }
    if (typeof object === "number") {
        strict_1.strict(types_1.isBoxedPrimitive(object), TypeError(`Unboxed primitives don't work as relatables, did you mean to use new Number(myValue)?`));
    }
    if (typeof object === "bigint") {
        strict_1.strict(types_1.isBoxedPrimitive(object), TypeError(`Unboxed primitives don't work as relatables, did you mean to use Object(BigInt(myValue))?`));
    }
}
exports.isValidRelatable = isValidRelatable;
