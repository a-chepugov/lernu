## 1. Объявление переменных
Написать функцию содержащую:
- использование переменнрй с поднятием
- переменную `dublicate` объявленую дважды в пределах тела функции (предложить максимоальное количество вариантов)

## 2. Работа с переменными
- Написать функцию умножающую поле count входящего объекта на 2
```js
/**
 * @param {{count: number}} param
 * @return {undefined}
 */
function mul(param) {
}
```

таким образом чтобы выполнялся код

```js
const data = {count: 3};
mul(data);
console.assert(data.count === 6, 'Обнаружена ошибка');
```

- Объяснить почему не работает следующий код
```js
/**
 * @param {number} count
 * @return {undefined}
 */
function mul2(count) {
  count = count * 2;
}

const scalar = 3;
mul2(scalar);
console.assert(scalar === 6, 'Обнаружена ошибка');
```

## 3. Типы
Подсчитать и напечатать количество элементов различного типа в массиве
```js
const data = ['world', true, -9, 12,  null, Infinity, false, {}, 2, false, [], 'kitty', new Array, NaN, new Object]
```
Для решения создать пустой(!) объект и добавлять туда элементы по мере необходимости.
Должен получиться результат вида `{ number: 3, object: 7 }` 
