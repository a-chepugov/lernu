function mul(a, b) {
  return a * b;
}

function mul2(a) {
  return mul(a, 2);
}

console.log('mul2(3)', mul2(3));

function mul4(a) {
  return mul(a, 4);
}

console.log('mul4(5)', mul4(5));

function mulFactory(multiplier) {
  return function mul___(a) {
    return mul(a, multiplier)
  }
}

const mul6 = mulFactory(6);

console.log('mul6(7)', mul6(7));

const mulRandom = mulFactory(Math.random());

console.log('mulRandom(9)', mulRandom(9));
