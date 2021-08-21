"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = require("./validate");
test("validator should throw an error when it sees a primitive", () => {
    expect(() => validate_1.isValidRelatable("string")).toThrowError();
    expect(() => validate_1.isValidRelatable(1)).toThrow();
    expect(() => validate_1.isValidRelatable(false)).toThrow();
    expect(() => validate_1.isValidRelatable(Symbol("huh?"))).toThrowError();
    expect(() => validate_1.isValidRelatable(BigInt(42))).toThrowError();
});
test("validator should allow boxed primitives", () => {
    expect(() => validate_1.isValidRelatable(new String("string"))).not.toThrowError();
    expect(() => validate_1.isValidRelatable(new Number(1))).not.toThrow();
    expect(() => validate_1.isValidRelatable(new Boolean(false))).not.toThrow();
    expect(() => validate_1.isValidRelatable(Object(Symbol()))).not.toThrowError();
    expect(() => validate_1.isValidRelatable(Object(BigInt(42)))).not.toThrowError();
});
