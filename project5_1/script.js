"use strict";

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
