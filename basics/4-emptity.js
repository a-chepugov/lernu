// 0
let zeroVariable = 0;
console.log({zeroVariable});

// ''
let emptyString = '';
console.log({emptyString});

// undefined
let emptyScalar;
console.log({emptyScalar});

// null
let nullObject = null;
console.log({nullObject});

// NaN
let NotANumber = NaN;
console.log({NotANumber});

let AnotherNotANumber = undefined + 1;
console.dir({AnotherNotANumber});

console.table([
  {value: zeroVariable, typeof: typeof zeroVariable, boolean: Boolean(zeroVariable)},
  {value: emptyString, typeof: typeof emptyString, boolean: Boolean(emptyString)},
  {value: emptyScalar, typeof: typeof emptyScalar, boolean: Boolean(emptyScalar)},
  {value: nullObject, typeof: typeof nullObject, boolean: Boolean(nullObject)},
  {value: NotANumber, typeof: typeof NotANumber, boolean: Boolean(NotANumber)},
])

const minusOne = -1;
const space = ' ';
const emptyObject = {};
const emptyArray = [];

console.table([
  {value: minusOne, typeof: typeof minusOne, boolean: Boolean(minusOne)},
  {value: space, typeof: typeof space, boolean: Boolean(space)},
  {value: emptyObject, typeof: typeof emptyObject, boolean: Boolean(emptyObject)},
  {value: emptyArray, typeof: typeof emptyArray, boolean: Boolean(emptyArray)},
])

console.table([
  {name: 'String(emptyObject)', value: String(emptyObject), typeof: typeof String(emptyObject), boolean: Boolean(String(emptyObject))},
  {name: 'String(emptyArray)', value: String(emptyArray), typeof: typeof String(emptyArray), boolean: Boolean(String(emptyArray))},
])
