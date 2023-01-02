const hamburguerIcon = document.querySelector('.hamburguer-menu-icon');
const floatingMenu = document.querySelector('.floating-menu');
const closeIcon = document.querySelector('.floating-menu__close > img');

hamburguerIcon.addEventListener('click', () => {
  floatingMenu.classList.remove('hidden');
});

closeIcon.addEventListener('click', () => {
  floatingMenu.classList.add('hidden');
});