const cities = ['Paris', 'London', 'Berlin'];
console.log('cities', cities);

console.log("\nconst pushResult = cities.push('Minsk');");
const pushResult = cities.push('Minsk');
console.log({cities, pushResult});

console.log("\nconst popResult = cities.pop();");
const popResult = cities.pop();
console.log({cities, popResult});

console.log("\nconst unshiftResult = cities.unshift('New York');");
const unshiftResult = cities.unshift('New York');
console.log({cities, unshiftResult});

console.log("\nconst shiftResult = cities.shift();");
const shiftResult = cities.shift();
console.log({cities, shiftResult});

console.log("\ncities[2]", cities[2]);

console.log("\nkey in object");
console.log(" 1  in cities ===", 1 in cities);
console.log("'2' in cities ===", '2' in cities);
console.log(" 7  in cities ===", 7 in cities);

console.log("\nfor(let key in cities)");
for(let key in cities) {
  console.log('key ===', key);
}

console.log("\nfor(let value of cities)");
for(let value of cities) {
  console.log('value ===', value);
}
