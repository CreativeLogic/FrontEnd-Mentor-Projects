const button = document.querySelector('.slideon-slider');
const basicPrice = document.querySelector('.basic').querySelector('h3');
const professionalPrice = document
  .querySelector('.professional')
  .querySelector('h3');
const masterPrice = document.querySelector('.master').querySelector('h3');
let isMonthly = false;

const priceAjust = () => {
  if (isMonthly) {
    basicPrice.textContent = '199.99';
    professionalPrice.textContent = '249.99';
    masterPrice.textContent = '399.99';
    isMonthly = false;
  } else {
    basicPrice.textContent = '19.99';
    professionalPrice.textContent = '24.99';
    masterPrice.textContent = '39.99';
    isMonthly = true;
  }
};

button.addEventListener('click', priceAjust);
