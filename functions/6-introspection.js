function sum(a, b) {
  return a + b;
}

const mul = function mulNearBrackets(a, b) {
  return a * b;
}

const div = function(a, b) {
  return a / b;
}

const inc = (a) => a + 1;

const variative = (a, b, c, ...args) => 3 + args.length;

console.table({
  sum: {
    name: sum.name,
    length: sum.length,
    code: sum.toString(),
  },
  mul: {
    name: mul.name,
    length: mul.length,
    code: mul.toString(),
  },
  div: {
    name: div.name,
    length: div.length,
    code: div.toString(),
  },
  inc: {
    name: inc.name,
    length: inc.length,
    code: inc.toString(),
  },
  variative: {
    name: variative.name,
    length: variative.length,
    code: variative.toString(),
  },
  parseInt: {
    name: parseInt.name,
    length: parseInt.length,
    code: parseInt.toString(),
  }
});
