function count() {
	let i = 0;

	function z() {
		i += 1;
		return i;
	}

	return z;
}

const counter1 = count();
const counter2 = count();

console.log('counter1 === counter2', counter1 === counter2);
console.log('counter1() => ', counter1());
console.log('counter1() => ', counter1());
console.log('counter1() => ', counter1());
console.log();
console.log('counter2() => ', counter2());
console.log('counter2() => ', counter2());
console.log();
console.log('counter1() => ', counter1());
