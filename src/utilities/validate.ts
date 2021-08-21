import { strict as assert } from "assert/strict";
import { isBoxedPrimitive } from "util/types";
export function areValidRelatables(...objects: unknown[]) {
	objects.forEach((object) => isValidRelatable(object));
}
export function isValidRelatable(object: unknown) {
	assert(
		object !== null,
		TypeError(`Invalid type passed to relatables [null]`)
	);
	assert(
		object !== undefined,
		TypeError(`Invalid type passed to relatables [undefined]`)
	);
	if (typeof object === "string") {
		assert(
			isBoxedPrimitive(object),
			TypeError(
				`Unboxed primitives don't work as relatables, did you mean to use new String(myValue)?`
			)
		);
	}
	if (typeof object === "symbol") {
		assert(
			isBoxedPrimitive(object),
			TypeError(
				`Unboxed primitives don't work as relatables, did you mean to use Object(Symbol())?`
			)
		);
	}
	if (typeof object === "boolean") {
		assert(
			isBoxedPrimitive(object),
			TypeError(
				`Unboxed primitives don't work as relatables, did you mean to use new Boolean(myValue)?`
			)
		);
	}
	if (typeof object === "number") {
		assert(
			isBoxedPrimitive(object),
			TypeError(
				`Unboxed primitives don't work as relatables, did you mean to use new Number(myValue)?`
			)
		);
	}
	if (typeof object === "bigint") {
		assert(
			isBoxedPrimitive(object),
			TypeError(
				`Unboxed primitives don't work as relatables, did you mean to use Object(BigInt(myValue))?`
			)
		);
	}
}
