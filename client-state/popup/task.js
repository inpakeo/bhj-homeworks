const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal__close');

let modalClosed = false;

function closeModal() {
  modal.classList.remove('modal_active');
  setModalClosed(true);
}

modalCloseButton.addEventListener('click', closeModal);

function setModalClosed(value) {
  modalClosed = value;
  document.cookie = `modalClosed=${value ? 'true' : 'false'}`;
}

function checkClosedModal() {
  const modalClosedCookie = document.cookie.split('; ')
    .find(cookie => cookie.startsWith('modalClosed='));
  setModalClosed(modalClosedCookie ? modalClosedCookie.split('=')[1] === 'true' : false);

  if (!modalClosed) {
    modal.classList.add('modal_active');
    setModalClosed(false);
  }
}

window.addEventListener('DOMContentLoaded', checkClosedModal);

window.addEventListener('beforeunload', () => {
  if (!modalClosed) {
    setModalClosed(false);
  }
});