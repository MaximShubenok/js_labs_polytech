"use strict";

for (let i = 1; i < 2; i++) {
    let user = prompt("Введие имя", "");
    if (user!= '' && user!= null) {
        let check = confirm(`Ваше имя ${user}?`);
        if (check!= '' && check!= null) {
            alert(`Привет ${user}`);
        } else {
            i--;
        }
    } else {
        i--;
    }
}