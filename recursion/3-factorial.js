/**
 * @description n! = 1 * 2 * 3 * ... * n
 * @param {number} n
 * @return {number}
 */
function factorial(n) {
	if (n === 0) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
}

factorial(5)

/**
factorial 5 = 5 * factorial 4
factorial 5 = 5 * 4 * factorial 3
factorial 5 = 5 * 4 * 3 * factorial 2
factorial 5 = 5 * 4 * 3 * 2 * factorial 1
factorial 5 = 5 * 4 * 3 * 2 * 1 * factorial 0  <-- условие выхода [входящий аргумент равен 0]
---------------------------------------------
factorial 5 = 5 * 4 * 3 * 2 * 1 * 1            <-- хвостовое значение [нейтральным для умножения элемент (1)]

---

factorial 5 = 5 * factorial 4                  <-- выразить входящее значение и числа с помощью переменной
factorial n = n * factorial (n - 1)            <-- выражение для рекурсивной части
*/

/*
направление обхода:
	- от входящего в функцию значения до 0
условие выхода (последний вызов рекурсивной функции):
  - входящий аргумент равен 0
хвостовое значение:
	- нейтральным для умножения элемент (1)
выражение для рекурсивной части
	- factorial n = n * factorial (n - 1)
 */
