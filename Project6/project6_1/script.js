"use strict";

// let pont = {
//     x: 10,
//     y:20,
//     sum: function () {
//         return this.x + this.y;
//     }
// };

// console.log(pont.sum());



// Создание классов ↓↓↓↓↓

class Person {
    constructor(name = Person.getDefaultString(), surname = Person.getDefaultString()) {
        // В кавычках можем сделать значение по умолчанию 
        this.name = name;
        this.surname = surname;
        this.invited = false;
        Person.count++;
    }

    toggleInvited() {
        // метод класса. При создании метода класса слово function писать не нужно
        this.invited = !this.invited;
    }

    static getDefaultString() {
        return "-";
    }
    // Статический метод класса. Это методы класса, а не его экземпляров

}
Person.count = 0;
// Статические свойства классов. Свойства, которые относятся к классам, а не к его объектам. Т.е. у объектов статического свойства не будет, а у самих классов будет.

let user1 = new Person('Vasya', 'Ivanov');

user1.toggleInvited();
// Вызов метода класса

console.log(Person.count);
// Будет выведена 2 т.к. Мы создали 2 эеземпляра класса




// console.log(user1 instanceof Person);
// // user1 является экземпляром Person

// console.log(user1);




// Наследование ↓↓↓↓↓