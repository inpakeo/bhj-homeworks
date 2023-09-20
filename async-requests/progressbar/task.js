const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    xhr.upload.onprogress = function(event) {
        if(event.lengthComputable) {
            const percentComplete = (event.loaded / event.total) * 100;
            progress.value = percentComplete;
        }
    };

    xhr.onload = function() {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          if (response.success) {
            console.log("Загрузка успешна: " + response.message);
          } else {
            console.log("Ошибка на сервере: " + response.message);
          }
        } else {
          console.log("Ошибка " + xhr.status);
        }
    };

    xhr.onerror = function() {
        console.log("Произошла ошибка при отправке запроса.");
    };

    xhr.send(new FormData(form));
});
