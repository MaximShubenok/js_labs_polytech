"use strict";

let text = '654651494jsj654s65j46546564556j j4522 65';
// let res = text.match(/\d/g);
// let res = text.replace(/\d/g, '-');
// console.log(res);

let myExp = new RegExp(/\d/, 'g');
let res = text.replace(RegExp, '-');


const searchURL = prompt("Введите текст с URL адресом", "");
