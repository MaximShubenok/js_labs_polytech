"use strict";

<<<<<<< HEAD
let now = new Date();
console.log(now);
console.log(Number(now));

console.log(now.toLocaleString());
// Локольные дата и время
console.log(now.toTimeString());
// Время с часовым поясом
console.log(now.toLocaleTimeString());
// Только время

console.log(now.getFullYear());
// Полный год
console.log(now.getMonth());
=======
// mdn date

// let now = new Date();
// console.log(now);
// console.log(Number(now));

// console.log(now.toLocaleString());
// // Локольные дата и время
// console.log(now.toTimeString());
// // Время с часовым поясом
// console.log(now.toLocaleTimeString());
// // Только время

// console.log(now.getFullYear());
// // Полный год
// console.log(now.getMonth()); 
// // Месяц начинается с 0
// console.log(now.getDate());
// // Число

// now.setMinutes(20);
// // Изменяет минуты

// let newYear = new Date(2020, 0, 1, 10);
// // Можно вводить свои значения даты и времени
// console.log(newYear);

// let now = new Date();
// let newYear = new Date(now.getFullYear() + 1, 0, 1);
// console.log(newYear);

// let d = newYear - now;
// d = d/(1000 * 60 * 60 * 24);
// d = Math.floor(d);
// console.log(`До нового года осталось ${d} дней`);




// Таймеры ↓↓↓↓↓

// Разовое действие ↓↓↓↓↓

// let myTimet = setTimeout(() => {
// // Теперь в переменной myTimer находится идентификатор данного таймаута для того, чтобы мы могли отменить его
//     console.log("Hello");
// }, 2000);
// // callback, количество милисекунд

// clearTimeout(myTimet);
// // Отмена таймаута



// Циклическое действие ↓↓↓↓↓

// let myInterval = setInterval(() => {
//     console.log('Hello');
// }, 1000);

// clearInterval(myInterval);



// let myInterval = setInterval(() => {
//     console.log('Hello');
// }, 1000);

// setTimeout(() => {
//     clearInterval(myInterval);
// }, 5000);

// setInterval(() => {
//     // Код выполняющийся долго. Это время setinterval не учитывает
// }, 1000);

// Для учета времени колбека используют рекурсивный таймаут ↓↓↓↓↓ Рекурсия - вызов самого себя

let myTimeout = setTimeout(function tick() {
    console.log('Hello');
    myTimeout = setTimeout(tick, 1000);
    // Так как повторный вызов таймаута будет после кода, то будет учтено время обработки
}, 1000);


let clockElm = document.getElementById('clock');
clockElm.innerHTML = '<h1>Тут могли бы быть часы</h1>';
console.log(clockElm);
>>>>>>> dd55bde9fecc1f09706fe21a9b4fd2a589ce01b3
