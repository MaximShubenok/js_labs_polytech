const searchURL = prompt("Введите текст содержащий URL адрес", "");

const checkURL = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,})/g;

console.log(checkURL.test(searchURL));

const searchEmail = prompt("Введите текст содержащий Email", "");

const checkEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gim.test(searchEmail);


console.log(checkEmail);