const summaries = document.querySelectorAll('summary');

const toggleIcon = e => {
  const summary = e.currentTarget;
  const icon = summary.querySelector('img');

  if (icon.src.includes('plus')) {
    icon.src = './assets/images/icon-minus.svg';
  } else {
    icon.src = './assets/images/icon-plus.svg';
  }
};

summaries.forEach(summary => {
  summary.addEventListener('click', toggleIcon);
});
