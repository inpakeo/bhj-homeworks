function hideLoader() {
  document.getElementById('loader').classList.remove('loader_active');
}

async function loadCurrencyExchangeRates() {
  try {
    const cachedData = localStorage.getItem('currencyExchangeRates');
    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      updateUI(parsedData);
    }

    const response = await fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses');
    const data = await response.json();
    localStorage.setItem('currencyExchangeRates', JSON.stringify(data));
    updateUI(data);
  } catch (error) {
    console.error('Произошла ошибка при загрузке данных:', error);
  }
}

function updateUI(data) {
  const valuteData = data.response.Valute;
  const itemsContainer = document.getElementById('items');
  itemsContainer.innerHTML = '';

  for (const key in valuteData) {
    if (valuteData.hasOwnProperty(key)) {
      const valute = valuteData[key];
      const item = document.createElement('div');
      item.classList.add('item');
      item.innerHTML = `
        <div class="item__code">${valute.CharCode}</div>
        <div class="item__value">${valute.Value}</div>
        <div class="item__currency">руб.</div>
      `;
      itemsContainer.appendChild(item);
    }
  }

  hideLoader();
}

window.addEventListener('load', loadCurrencyExchangeRates);
