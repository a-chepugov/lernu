console.log('\nvar =>');

console.log('before declaration\t', {variable});
variable = 5;
console.log('after assignment\t', {variable});
var variable;
console.log('after declaration\t', {variable});


console.log('\nlet =>');
// variableScalarLet = 1; // ReferenceError
let variableScalarLet = 2;
console.log('let. after assignment\t', {variableScalarLet});
variableScalarLet = 3;
console.log('let. after reassignment\t', {variableScalarLet});

console.log('\nconst =>');
// variableScalarConst = 1; // ReferenceError
const variableScalarConst = 2;
console.log('const. after reassignment\t', {variableScalarConst});
// variableScalarConst = 3; // TypeError

console.log('\nreference =>');

const variableRef = {a: 1, b: '2'};
console.log({variableRef});

variableRef.c = [3, 4, 5];
console.log({variableRef});

Object.defineProperty(variableRef, 'd', {value: 5, writable: false});
variableRef.d = 7;
console.log('variableRef.d ===', variableRef.d);

console.log('function =>');

console.log('fn declaration. before\t', sum(1, 2));

function sum(a, b) {
  return a + b;
}

console.log('fn declaration. after\t', sum(1, 2));

// console.log('fn expression. before\t', mul(3, 4)); // TypeError:

var mul = function(a, b) {
  return a * b;
}
console.log('fn expression. after\t', mul(3, 4));


console.log('class =>');

// console.log('class. before declaration\t', new Cls()); // ReferenceError

class Cls {
}

console.log('mul. after declaration\t', new Cls());
// console.log('mul. after declaration. without new\t', Cls()); // TypeError
