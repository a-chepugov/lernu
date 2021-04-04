const fibonacci = n => {
	if (n <= 2) {
		return 1;
	} else {
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
};

const cache = {};

function fibCached(n) {
	if (cache[n]) {
		return cache[n];
	} else {
		if (n <= 2) {
			return 1;
		} else {
			const result = fibCached(n - 1) + fibCached(n - 2);
			cache[n] = result;
			return result;
		}
	}
}

for (let i = 0; i < 50; i += 1) {
	const start = Date.now();
	const result = fibCached(i);
	const interval = Date.now() - start;
	console.log(`${i}\t${interval}\t`, result);
}


for (let i = 0; i < 50; i += 1) {
	const start = Date.now();
	const result = fibonacci(i);
	const interval = Date.now() - start;
	console.log(`${i}\t${interval}\t`, result);
}
