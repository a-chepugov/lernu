console.log('\n\n scalar =>');
console.log("\nconsole.log('log'); =>");
console.log('log message');
console.log("\nconsole.info('info'); =>");
console.info('info message');
console.log("\nconsole.error('error'); =>");
console.error('error message');

var nested = {1: {2: {3: {4: {5: {6: null}}}}}};
console.log(`\n\n nested ${JSON.stringify(nested)} =>`);
console.log("\nconsole.log(nested); =>");
console.log(nested);
console.log("\nconsole.info(nested); =>");
console.info(nested);
console.log("\nconsole.error(nested); =>");
console.error(nested);

console.log('\n\nconsole.dir(nested); =>');
console.dir(nested);
console.log('\n\nconsole.dir(nested, {colors: true, depth: 0}); =>');
console.dir(nested, {colors: true, depth: 0});
console.log('\n\nconsole.dir(nested, {colors: true, depth: 1}); =>');
console.dir(nested, {colors: true, depth: 1});
console.log('\n\nconsole.dir(nested, {colors: true, depth: null}); =>');
console.dir(nested, {colors: true, depth: null});
console.log('\n\nconsole.dir(nested, {colors: false, depth: null}); =>');
console.dir(nested, {colors: false, depth: null});

console.log('\n\nconsole.table');
console.log('\nconsole.table(obj); =>');
var obj = {name: 'Alex', born: '3000', place: 'Mars'}
console.table(obj);

console.log('\nconsole.table(objs); =>');
var objs = [
  {name: 'Alex', born: '3000', place: 'Mars'},
  {name: 'Zoi', born: '3005', place: 'Earth'},
]
console.table(objs);

console.log('\n\nconsole.assert');
console.log("\nconst data = 7;\nconsole.assert(data === 8, 'Обнаружена ошибка');");
var data = 7;
console.assert(data === 8, 'Обнаружена ошибка');

console.log("\nconst data = 5;\nconsole.assert(data === 5, 'Обнаружена ошибка');");
var data = 5;
console.assert(data === 5, 'Обнаружена ошибка');
