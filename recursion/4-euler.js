// e = 1 + (1/1! + (1/2! + (1/3! + (...))))

function factorial(n) {
	if (n === 0) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
}

const euler = (n) => {
	function r(current, max) {
		if (current > max) {
			return 0;
		} else {
			return 1 / factorial(current) + r(current + 1, max);
		}
	}

	return 1 + r(1, n);
};

for (let i = 0; i < 10000; i += 1) {
	const start = Date.now();
	const result = euler(i);
	const interval = Date.now() - start;
	console.log(`${i}\t${interval}\t`, result);
}

// Выделить рекурсивную и не рекурсивную части
// Определить условие выхода
// Установить хвостовое значение
// Написать выражение для вычиселения рекурсивной части
