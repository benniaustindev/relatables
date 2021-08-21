const { appendChildren, getChildren, getParent } = require("../dist");

//first, we create some random objects
const obj = { name: "example object" };
const arr = ["example", "array"];
const func = () => console.log("and functions too");
const str = new String(`boxed primitives work too`);
const bool = new Boolean(true);
const num = new Number();
const int = Object(BigInt(42));
const sym = Object(Symbol("something symbolic"));

// then append [arr,func] as children to [obj]
appendChildren(obj, arr, func);
// now lets append [str, bool] as children to [func]
appendChildren(func, str, bool);
// finally lets append [num] as children to [bool]
appendChildren(bool, num, int, sym);

console.log(obj);
// { name: 'example object' }

console.log(getChildren(obj));
//[ [ 'example', 'array' ], [Function: func] ]

console.log(getChildren(func));
//[ [String: 'boxed primitives work too'], [Boolean: true] ]

console.log(getChildren(bool).valueOf());
//[ [Number: 0], [BigInt: 42n], [Symbol: Symbol(something symbolic)] ]

console.log(getParent(bool));
// [Function: func]

console.log(getChildren(str));
// [] (no children, empty array)

console.log(getParent(obj));
// null (root element returns null)
