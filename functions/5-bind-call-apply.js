function mul(a, b) {
  return a * b;
}

const mul4 = mul.bind(null, 4);
console.log("\nconst mul4 = mul.bind(null, 4);\nmul4(5) ===", mul4(5));

console.log("\nmul(2, 3) ===", mul(2, 3));
console.log("\nmul.call(null, 2, 3) ===", mul.call(null, 2, 3));

const params = [2, 3];
console.log("\nmul(...params)", mul(...params));
console.log("\nmul.apply(null, params)", mul.apply(null, params));
