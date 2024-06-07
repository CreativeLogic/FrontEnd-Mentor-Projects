const buttons = document.querySelectorAll('button');

const buttonEventListener = buttons => {
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const paragraph = btn.closest('section').querySelector('p');
      const icon = btn.querySelector('img');

      paragraph.classList.toggle('show');
      if (paragraph.classList.contains('show')) {
        icon.src = './assets/images/icon-minus.svg';
        icon.alt = 'minus icon';
        paragraph.setAttribute('aria-hidden', 'false');
        btn.setAttribute('aria-expanded', 'true');
      } else {
        icon.src = './assets/images/icon-plus.svg';
        icon.alt = 'plus icon';
        paragraph.setAttribute('aria-hidden', 'true');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });
};

buttonEventListener(buttons);

