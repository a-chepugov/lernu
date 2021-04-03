## 1. Генерация случайного числа 

Создать функцию для генерации случайного числа в определенном диапазоне
```js
/**
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
const random = (min, max) => {
};
```

Смотри:
- [Math.random()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- [Math.floor()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)

## 2. Генерация случайной строки

Создать функцию для генерации строки заданной длины заполненной значениями взятыми из второго аргумента, являющегося массивом символов

```js
/**
 * @param {number} length
 * @param {Array<string>} values
 * @return {string}
 */
const key = (length, values) => {
};
```

Смотри:
- [new Array(length)](https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/Array)
- [Array.prototype.join()](https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

new Array(length)

## 3. Генерация случайной строки 
Создать функцию для генерации случайной строки заданной длины с символами в диапазоне определонном вторым аргументов
```js
/**
 * @param {number} length
 * @param {number} radix
 * @return {string}
 */
const keyRadix = (length, radix) => {
};
```

Смотри:
- [Number.prototype.toString()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)