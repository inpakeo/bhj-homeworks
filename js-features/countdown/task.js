// Получаем элементы, с которыми будем взаимодействовать
const timerElement = document.getElementById("timer");
const statusElement = document.getElementById("status");

// Устанавливаем стартовое значение таймера
let secondsLeft = parseInt(timerElement.innerText);

// Функция для обновления таймера
function updateTimer() {
    secondsLeft--;

    // Обновляем значение в элементе таймера
    timerElement.innerText = secondsLeft;

    if (secondsLeft <= 0) {
        // Если время вышло, выводим сообщение
        clearInterval(timerInterval);
        statusElement.innerHTML = "Вы победили в конкурсе!";
        alert("Вы победили в конкурсе!");
    }
}

// Запускаем таймер каждую секунду
const timerInterval = setInterval(updateTimer, 1000);
