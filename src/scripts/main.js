(function() {
  const link = document.querySelector('.services__link');
  const modal = document.querySelector('.modal');
  const close = document.querySelector('.modal__close');


  link.addEventListener('click', (e) => {
    modal.classList.add('show');
  })


  close.addEventListener('click', () => {
    modal.classList.remove('show');
  })



})()