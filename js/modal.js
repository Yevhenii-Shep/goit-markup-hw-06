const modal = document.querySelector('.backdrop');
const openModalBtn = document.querySelector('.hero-button');
const closeModalBtn = document.querySelector('.modal-close-btn');

const toggleModal = () => {
  modal.classList.toggle('is-hidden');
};

openModalBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    toggleModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('is-hidden')) {
    toggleModal();
  }
});