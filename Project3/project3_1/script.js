"use strict";

const word = prompt("Введите вашу фразу(слово:)", "");
let reverseWord = word;

reverseWord = word.split("");
console.log(reverseWord);

reverseWord = reverseWord.reverse();
console.log(reverseWord);
reverseWord = reverseWord.join("");
console.log(reverseWord);


if (reverseWord == word) {
    alert("Фраза является палиндромом");
} else {
    alert("Фраза не является палиндромом");
}
