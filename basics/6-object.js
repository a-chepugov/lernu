const person = {
  name: 'Alex',
  born: 2000,
};
console.log('person', person);

person.position = 'manager';
console.log("\nperson.position = 'manager';");
console.log(person);

person['salary'] = 1000;
console.log("\nperson['salary'] = 1000;");
console.log(person);

var keyName = 'hobby';
person[keyName] = 'soccer';
console.log("\nconst keyName = 'hobby';\nperson[keyName] = 'soccer';");
console.log(person);


person.born = undefined;
console.log("\nperson.born = undefined;");
console.log(person);

delete person.hobby;
console.log("\ndelete person.hobby;");
console.log(person);

delete person['salary'];
console.log("\ndelete person['salary'];");
console.log(person);


console.log("\nkey in object");
console.log("'name' in person ===", 'name' in person);
console.log("'hobby' in person ===", 'hobby' in person);

console.log("\nkey in object. through variable");
var keyName = 'name'
console.log("var keyName = 'name';\nkeyName in person ===", keyName in person);

console.log("\nfor(let key in person)");
for(let key in person) {
  console.log('key ===', key);
}

// console.log("\nfor(let value of person)");
// for(let value of person) {
//   console.log('value ===', value);
// }
// TypeError: person is not iterable
