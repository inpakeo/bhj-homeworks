document.addEventListener("DOMContentLoaded", function () {
  const signinForm = document.getElementById("signin__form");
  const welcomeBlock = document.getElementById("welcome");
  const userIdSpan = document.getElementById("user_id");

  // Проверяем, есть ли сохраненный id пользователя в локальном хранилище
  const userId = localStorage.getItem("user_id");
  if (userId) {
    welcomeBlock.classList.add("welcome_active");
    userIdSpan.textContent = userId;
    // Убираем поля логина и пароля из DOM-дерева
    signinForm.remove();
  }

  // Обработчик отправки формы
  signinForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Предотвращаем стандартное действие формы (перезагрузку страницы)

    const formData = new FormData(signinForm);

    // Отправка POST-запроса на сервер
    fetch("https://students.netoservices.ru/nestjs-backend/auth", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Если авторизация успешна, сохраняем id пользователя в локальное хранилище
          localStorage.setItem("user_id", data.user_id);

          // Отображаем блок приветствия
          welcomeBlock.classList.add("welcome_active");
          userIdSpan.textContent = data.user_id;

          // Убираем поля логина и пароля из DOM-дерева
          signinForm.remove();
        } else {
          // Если авторизация не удалась, выводим сообщение об ошибке
          alert("Неверный логин/пароль");
        }
      })
      .catch((error) => {
        console.error("Произошла ошибка:", error);
      });
  });
});
