// Получаем все нужные элементы со страницы
const playBtn = document.querySelector('.play');
const stopBtn = document.querySelector('.stop');
const gameArea = document.querySelector('.game-area');
const gameItems = document.querySelectorAll('.game-area__item');
const scoreEl = document.querySelector('.score span');
const timeEl = document.querySelector('.time span');
let timeRemaning = 30; // Оставшееся время игры
let score = 0; // Счёт игрока
let timeInterval; // Идентификатор интервала идущего времени
let generateInterval; // Идентификатор интервала, генерирующего рандомные поля

function startGame() {
    // Обнуляем время и счёт, отображаем их на странице
    timeRemaning = 30;
    score = 0;
    timeEl.textContent = timeRemaning;
    scoreEl.textContent = score;
    // Запускаем генерацию рандомных полей
    generateItems();
    // Показ времени на странице через каждую секунду
    timeInterval = setInterval(() => {
        timeRemaning--;
        timeEl.textContent = timeRemaning;

        // Проверка на окончание времени игры
        if (timeRemaning <= 0) {
            stopGame();
        }
    }, 1000);

    // Добавляем прослушивание события Click на игровом поле
    gameArea.addEventListener('click', e => {
        // Увеличиваем счет и отображаем на странице при клике на поле с классом .active
        if (e.target.closest('.active')) {
            score++;
            scoreEl.textContent = score;
        }
    });
}

// Удаляем интервалы при окончании игры или нажатии кнопки Stop
function stopGame() {
    clearInterval(timeInterval);
    clearInterval(generateInterval);
}

// Генерируем рандомные поля через каждые 1200мс
function generateItems() {
    generateInterval = setInterval(() => {
        let randomNumber = Math.floor(Math.random() * 9);
        gameItems[randomNumber].classList.add('active');

        // Через каждые 900мс активные поля пропадают
        setTimeout(() => {
            gameItems[randomNumber].classList.remove('active');
        }, 900);
    }, 1200);
}


// Добавление прослушивания событий на кнопки Start и Stop
playBtn.addEventListener('click', startGame);
stopBtn.addEventListener('click', stopGame);