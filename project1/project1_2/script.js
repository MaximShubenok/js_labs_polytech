const multiplication = 9;

for (let i = 1; i <= multiplication; i++) {
    let arr = [];
    for (let j = 1; j <= multiplication; j++) {
        arr[j-1] = (i * j);
    }
    console.log(arr.join(" "));
}
