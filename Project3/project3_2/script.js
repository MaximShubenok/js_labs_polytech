const arr = [0, -11, 11, 1, 12, 2, 0.1, 1.1, 22, 3, 100];
const sortArr = arr.sort(sortNumbers);

function sortNumbers(a, b) {
    return a - b;
}

console.log(sortArr);