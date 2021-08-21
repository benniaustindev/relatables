// tldr: use the replace function when you spread
//myObject = replace(myObject, { ...myObject, newName: "newerName" });

//here's why:
const { appendChildren, getChildren, getParent, replace } = require("../dist");

// For example if we create an object and add some children
let myObject = { name: "myObject" };
let child1 = { name: "child1" };
let child2 = { name: "child2" };
let child3 = { name: "child3" };
appendChildren(myObject, child1, child2, child3);
console.log(myObject.name, getChildren(myObject));
/* prints: myObject [ { name: 'child1' }, { name: 'child2' }, { name: 'child3' } ] */

// then later, we overwrite it with a new object...
myObject = { ...myObject, name: "newName" };
// the children aren't there because it's a brand new object

console.log(myObject.name, getChildren(myObject));
/* prints: newName [] (an empty array) */

// and if we check the parent of one of the children

console.log(child1.name, getParent(child1));
/* prints: child1 { name: 'myObject' }, still attached to the old parent */

// We could obviously re-append the children
appendChildren(myObject, child1, child2, child3);

console.log(myObject.name, getChildren(myObject));
/* prints: newName [ { name: 'child1' }, { name: 'child2' }, { name: 'child3' } ] */

// but if you just use replace when you spread
myObject = replace(myObject, { ...myObject, name: "newerName" });
// you still get a brand new object, but the children, (and parents) will have followed

console.log(myObject.name, getChildren(myObject));
/* prints: newerName [ { name: 'child1' }, { name: 'child2' }, { name: 'child3' } ]*/
