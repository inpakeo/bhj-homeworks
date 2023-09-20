// Получаем элементы textarea и кнопку "Очистить содержимое"
const editor = document.getElementById("editor");
const clearButton = document.getElementById("clearButton");

// Проверяем, есть ли сохраненное значение в локальном хранилище
const savedText = localStorage.getItem("editorText");

// Если значение есть, устанавливаем его в текстовый редактор
if (savedText) {
  editor.value = savedText;
}

// Добавляем обработчик события "input", чтобы сохранять текст в локальное хранилище при изменениях
editor.addEventListener("input", function() {
  const textToSave = editor.value;
  localStorage.setItem("editorText", textToSave);
});

// Добавляем обработчик события "click" для кнопки "Очистить содержимое"
clearButton.addEventListener("click", function() {
  // Очищаем содержимое текстового редактора
  editor.value = "";
  // Удаляем сохраненное значение из локального хранилища
  localStorage.removeItem("editorText");
});