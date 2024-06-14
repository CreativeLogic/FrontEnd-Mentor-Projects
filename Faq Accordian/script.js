const summaries = document.querySelectorAll('summary');

const toggleIcon = e => {
  const summary = e.currentTarget;
  const details = summary.closest('details');
  const icon = summary.querySelector('img');

  if (details.open) {
    icon.src = './assets/images/icon-minus.svg';
  } else {
    icon.src = './assets/images/icon-plus.svg';
  }
};

summaries.forEach(summary => {
  summary.addEventListener('click', toggleIcon);
});
