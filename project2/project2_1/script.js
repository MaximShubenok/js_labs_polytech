let arr = [];

for (let i = 1; i <= 10; i++) {
    arr[i] = [];

    for (let j = 1; j <= 10; j++) {
        arr[i][j] = i * j;
    }
}

let multiplication = arr[2][5];

let checktype = typeof(multiplication);

if (checktype === 'number') {
    console.log(`Результат умножения: ${multiplication}`);
} else {
    console.log('Введены неправильные числа');
}