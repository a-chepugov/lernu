const fs = require('fs');

console.log('before');

const consoleLogOriginal = console.log;

console.log = (...args) => {
	fs.appendFileSync('logs.log', args.join(', '));
	consoleLogOriginal(...args);
}

/*
console.log = process.env.NODE_ENV === 'production' ?
	(...args) => fs.appendFileSync('logs.log', args.join(', ')) :
	console.log;
*/

console.log('after');
