function sum(a, b) {
  return a * b;
}

console.log('mul(1, 2)', sum(1, 2));


function variativeSum() {
  // arguments - array-like object
  // To create fully functional array do
  // const args = [].slice.call(arguments);
  // or
  // const args = Array.prototype.slice.call(arguments);

  let accumulator = 0;
  for (let index in arguments) {
    accumulator += arguments[index];
  }
  return accumulator;
}

console.log('variativeSum(3, 4, 5)', variativeSum(3, 4, 5));


const variativeSum2 = (...allArgumentsInArray) => {
  // allArgumentsInArray - all passed arguments in array
  let accumulator = 0;
  for (let item of allArgumentsInArray) {
    accumulator += item;
  }
  return accumulator;
}

console.log('variativeSum2(6, 7, 8)', variativeSum2(6, 7, 8));
