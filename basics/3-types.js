console.log('\n\nscalar =>');

const integer = 5;
console.log('integer\t', integer);
const float = 10.3;
console.log('float\t', float)
const string = 'Hello';
console.log('string\t', string)
const boolean = true;
console.log('boolean\t', boolean)

console.log('\n\nreference =>');
const obj = {
  name: 'Alex',
  born: 2000,
  place: 'Earth',
};
console.log("\nobj =>");
console.log(obj);

console.log('\narray');
const arr = ['Paris', 'London', 'Berlin'];
console.log(arr);

console.log('\ntypeof');
console.log(`typeof(integer) ===`, `'${typeof (integer)}'`, '//', integer);
console.log(`typeof integer ===`, `'${typeof integer}'`, '//', integer);
console.log(`typeof float ===`, `'${typeof float}'`, '//', float);
console.log(`typeof string ===`, `'${typeof string}'`, '//', string);
console.log(`typeof boolean ===`, `'${typeof boolean}'`, '//', boolean);

console.log('typeof obj ===', `'${typeof obj}'`, '//', JSON.stringify(obj));
console.log('typeof arr ===', `'${typeof arr}'`, '//', JSON.stringify(arr));

console.log('\ninstanceof');
console.log('obj instanceof Array ===', obj instanceof Array);
console.log('arr instanceof Array ===', arr instanceof Array);

console.log('\nArray.isArray');
console.log('Array.isArray(obj) ===', Array.isArray(obj));
console.log('Array.isArray(arr) ===', Array.isArray(arr));

console.log('\n\nConclusions');
console.table([
  {name: 'integer', value: integer, typeof: typeof integer},
  {name: 'float', value: float, typeof: typeof float},
  {name: 'string', value: string, typeof: typeof string},
  {name: 'boolean', value: boolean, typeof: typeof boolean},
  {name: 'obj', value: obj, typeof: typeof obj},
  {name: 'arr', value: arr, typeof: typeof arr},
]);
