const add = function(a, b, c) {
	return a + b + c;
}

const add1 = function(a) {
	return function(b) {
		return function(c) {
			return a + b + c;
		}
	}
}

const add2 = (a) => (b) => (c) => a + b + c;

const add3 = (a) => {
	a = Number(a);
	return (b) => (c) => {
		return a + b + c;
	}
};

console.log("add(1, 2, 3)\t", add(1, 2, 3));
console.log("add1( 1 )(2)(3)\t", add1(1)(2)(3));
console.log("add2( 4 )(5)(6)\t", add2(4)(5)(6));
console.log("add3('7')(8)(9)\t", add3('7')(8)(9));
