const button = document.querySelector('.dice-button');
const adviceTitle = document.querySelector('h2');
const adviceParagraph = document.querySelector('p');
const url = 'https://api.adviceslip.com/advice';

const getAdvice = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const id = data.slip.id;
  const advice = data.slip.advice;
  displayAdvice(id, advice);
};

const displayAdvice = (id, advice) => {
  adviceTitle.textContent = `Advice #${id}`;
  adviceParagraph.textContent = advice;
};

button.addEventListener('click', getAdvice);
document.addEventListener('DOMContentLoaded', getAdvice);
