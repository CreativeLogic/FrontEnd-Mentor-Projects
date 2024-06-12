'use strict';

const form = document.querySelector('#form');
const signUpSection = document.querySelector('.sign-up');
const picture = document.querySelector('picture');
const confirmationSection = document.querySelector('.confirmation-section');
const span = confirmationSection.querySelector('span');
const dismissButton = confirmationSection.querySelector('button');
const emailInput = document.querySelector('#email');

const submitEmail = e => {
  e.preventDefault();
  const emailValue = new FormData(e.target).get('email');

  if (emailValue == '' || !validateEmail(emailValue)) {
    form.classList.add('error');
  } else {
    form.classList.remove('error');
    console.log('email valid');
    signUpSection.style.display = 'none';
    confirmationSection.style.display = 'flex';
    picture.style.display = 'none';
    span.textContent = emailValue;
    confirmationSection.removeAttribute('hidden');
  }
};

const validateEmail = email => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
};

const checkEmailInput = e => {
  const input = e.target;
  if (validateEmail(input.value)) {
    input.style.outline = '2px solid #4BB543';
    input.style.border = 'none';
    form.classList.remove('error');
  } else {
    input.style.outline = '';
  }
};

const returnToSignUp = () => {
  signUpSection.style.display = 'flex';
  picture.style.display = 'block';
  confirmationSection.style.display = 'none';
  form.reset();
  confirmationSection.setAttribute('hidden', 'true');
  emailInput.style.outline = 'var(--input-border)';
};

form.addEventListener('submit', submitEmail);
dismissButton.addEventListener('click', returnToSignUp);
emailInput.addEventListener('input', checkEmailInput);
