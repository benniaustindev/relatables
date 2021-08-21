import { isValidRelatable } from "./validate";

test("validator should throw an error when it sees a primitive", () => {
	expect(() => isValidRelatable("string")).toThrowError();
	expect(() => isValidRelatable(1)).toThrow();
	expect(() => isValidRelatable(false)).toThrow();
	expect(() => isValidRelatable(Symbol("huh?"))).toThrowError();
	expect(() => isValidRelatable(BigInt(42))).toThrowError();
});
test("validator should allow boxed primitives", () => {
	expect(() => isValidRelatable(new String("string"))).not.toThrowError();
	expect(() => isValidRelatable(new Number(1))).not.toThrow();
	expect(() => isValidRelatable(new Boolean(false))).not.toThrow();
	expect(() => isValidRelatable(Object(Symbol()))).not.toThrowError();
	expect(() => isValidRelatable(Object(BigInt(42)))).not.toThrowError();
});
