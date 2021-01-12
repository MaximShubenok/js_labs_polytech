for (let i = 1; i < 2; i++) {
    let word = prompt(`Введите слова разделяя их ";"`, "");
    if (word && word.search(';') != -1) {
        let array = word.split(';');
        for (let j = 0; j < array.length; j++) {
            if (array[j]) {
                document.write(array[j] + '<br>')
            }
        }
    } else {
        i--;
    }
}