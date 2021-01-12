let letter = ['а', 'a', 'б', 'b', 'в', 'v', 'г', 'g', 'д', 'd', 'е', 'e', 'ё', 'yo', 'ж', 'zh', 'з', 'z', 'и', 'i', 'й', 'j', 'к', 'k', 'л', 'l', 'м', 'm', 'н', 'n', 'о', 'o', 'п', 'p', 'р', 'r', 'с', 's', 'т', 't', 'у', 'u', 'ф', 'f', 'х', 'h', 'ц', 'c', 'ч', 'ch', 'ш', 'sh', 'щ', 'shh', 'ъ', '``', 'ы', 'y', 'ь', '`', 'э', 'e', 'ю', 'yu', 'я', 'ya',
'А', 'A', 'Б', 'B', 'В', 'V', 'Г', 'G', 'Д', 'D', 'Е', 'E', 'Ё', 'Yo', 'Ж', 'Zh', 'З', 'Z', 'И', 'I', 'Й', 'J', 'К', 'K', 'Л', 'L', 'М', 'M', 'Н', 'N', 'О', 'O', 'П', 'P', 'Р', 'R', 'С', 'S', 'Т', 'T', 'У', 'U', 'Ф', 'F', 'Х', 'H', 'Ц', 'C', 'Ч', 'Ch', 'Ш', 'Sh', 'Щ', 'Shh', 'Ъ', '``', 'Ы', 'Y', 'Ь', '`', 'Э', 'E', 'Ю', 'Yu', 'Я', 'Ya',
' ', ',', ':', '!', '?', ';', '.'];

for (let i = 1; i < 2; i++) {
    let word = prompt('Введите сообщение', '');

    if (word) {
        let translateWord = '';

        for (let value of word) {
            if (letter.indexOf(value) % 2 === 0 && letter.indexOf(value) < 66) {
                let wordTranslit = letter.indexOf(value);
                translateWord += letter[wordTranslit+1];
            } else {
                let wordTranslit = letter.indexOf(value);
                translateWord += letter[wordTranslit];
            }
        }
        console.log(translateWord);
    } else {
        i--;
    }
}