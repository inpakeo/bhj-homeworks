// script.js

// Функция для загрузки и отображения опроса
async function loadPoll() {
  try {
    // Отправляем GET-запрос для загрузки опроса
    const response = await fetch('https://students.netoservices.ru/nestjs-backend/poll');

    if (!response.ok) {
      throw new Error('Ошибка при загрузке опроса');
    }

    const pollData = await response.json();

    // Отображаем загруженный вопрос
    const pollTitle = document.getElementById('poll__title');
    pollTitle.textContent = pollData.data.title;

    // Отображаем кнопки с ответами
    const pollAnswers = document.getElementById('poll__answers');
    pollData.data.answers.forEach((answer, index) => {
      const answerButton = document.createElement('button');
      answerButton.className = 'poll__answer';
      answerButton.textContent = answer;
      answerButton.addEventListener('click', () => {
        // При клике на ответ выводим диалоговое окно
        alert('Спасибо, ваш голос засчитан!');
      });
      pollAnswers.appendChild(answerButton);
    });
  } catch (error) {
    console.error(error);
  }
}

// Вызываем функцию загрузки опроса при загрузке страницы
window.addEventListener('load', loadPoll);
