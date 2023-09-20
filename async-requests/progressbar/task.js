document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const progress = document.getElementById('progress');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) alert('Файл успешно загружен!');
        else alert('Ошибка при загрузке файла');
      }
    };
    
    xhr.upload.addEventListener('progress', (e) => {
      if (e.lengthComputable) progress.value = (e.loaded / e.total) * 100;
    });
    
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);
    xhr.send(formData);
  });
});
