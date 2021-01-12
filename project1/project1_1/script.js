const dayEnd = +prompt("Сколько дней прошло?", "");

let dayStart = 100 - dayEnd;

if (dayStart % 100 <= 9) {
    if (dayStart == 1) {
        console.log(`Остался ${dayStart} день`);
    } else if (dayStart == 2 || dayStart == 3 || dayStart == 4) {
        console.log(`Осталось ${dayStart} дня`);
    } else {
        console.log(`Осталось ${dayStart} дней`);
    }
} else if (dayStart % 100 > 9 && dayStart % 100 < 20) {
    console.log(`Осталось ${dayStart} дней`);
} else if (dayStart % 100 >= 20) {
    if (dayStart % 10 == 2 || dayStart % 10 == 3 || dayStart % 10 == 4) {
        console.log(`Осталось ${dayStart} дня`);
    } else {
        console.log(`Осталось ${dayStart} дней`);
    }
} else {
    console.log("Error");
}