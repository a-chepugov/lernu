const factorial = (n) => (n === 0) ? 1 : n * factorial(n - 1);

/**
 * @description n! = 1 + (1/1! + (1/2! + (1/3! + (...))))
 */
const euler = (n) => {
	function recursive(current, max) {
		if (current > max) {
			return 0;
		} else {
			return 1 / factorial(current) + recursive(current + 1, max);
		}
	}

	return /* не рекурсивная часть */ 1 + /* рекурсивная часть */ recursive(1, n);
};

for (let i = 0; i < 10000; i += 1) {
	const start = Date.now();
	const result = euler(i);
	const interval = Date.now() - start;
	console.log(`${i}\t${interval}\t`, result);
}

// Выделить рекурсивную и не рекурсивную части (не включается в рекурсивную часть функции)
// Выбрать направление обхода рекурсии (из конца к началу или из начала в конец)
// Определить передаваемые в рекурсивную функцию аргументы (изменяющиеся аргументы, метки максимальной глубины)
// Определить условие выхода (if)
// Установить хвостовое значение (ветка выхода из рекурсии)
// Написать выражение для вычиселения рекурсивной части (ветка рекурсивного вызова)
