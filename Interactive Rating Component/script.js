const button = document.querySelector('.submit-btn');
const ratingComponent = document.querySelector('.rating-component');
const ratings = document.querySelector('.rating-list');
const thankyouComponent = document.querySelector('.thankyou-component');
const selectedParagraph = thankyouComponent.querySelector('p:first-of-type');

let ratingValue;

const submitRating = () => {
  ratingComponent.style.display = 'none';
  thankyouComponent.style.display = 'flex';
  typeof ratingValue == 'number'
    ? (selectedParagraph.innerHTML = `<p>You selected out ${ratingValue} of 5</p>`)
    : (selectedParagraph.innerHTML = '<p>You did not make a selection</p>');
};

const getValue = e => {
  let value = !isNaN(Number(e.target.textContent))
    ? Number(e.target.textContent)
    : null;
  ratingValue = value ?? 'You did not select a number';
  console.log(ratingValue);
};

button.addEventListener('click', submitRating);
ratings.addEventListener('click', getValue);
