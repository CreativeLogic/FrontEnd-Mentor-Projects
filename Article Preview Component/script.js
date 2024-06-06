const button = document.querySelector('#arrow-icon');
const socialContainer = document.querySelector('.social-links-container');

const focusableElements = socialContainer.querySelectorAll('a');
const originalSVG = `<svg xmlns="http://www.w3.org/2000/svg width="32" height="32" viewBox="0 0 32 32" fill="none">
<circle cx="16" cy="16" r="16" fill="#ECF2F8" /> <path d="M24 15.495L17.7663 9.01392V12.8807H16.4409C12.3314 12.8807 9 16.0393 9 19.9358V21.9849L9.58868 21.3733C11.5901 19.2941 14.4221 18.1094 17.3912 18.1094H17.7663V21.9762L24 15.495Z" fill="#6E8098"/></svg>`;

const clickedSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill="#6E8098"/>
    <path d="M24 15.495L17.7663 9.01392V12.8807H16.4409C12.3314 12.8807 9 16.0393 9 19.9358V21.9849L9.58868 21.3733C11.5901 19.2941 14.4221 18.1094 17.3912 18.1094H17.7663V21.9762L24 15.495Z" fill="white"/>
  </svg>`;


button.addEventListener('click', () => {
  const isExpanded = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', !isExpanded);
  socialContainer.setAttribute('aria-hidden', isExpanded);

  focusableElements.forEach(el => {
    if (isExpanded) {
      el.setAttribute('tabindex', '-1');
    } else {
      el.removeAttribute('tabindex');
    }
  });

  socialContainer.classList.toggle('show');

  if (socialContainer.classList.contains('show')) {
    if (window.innerWidth >= 750) {
      button.style.translate = '0 8px';
    } else {
      button.style.translate = '0 0px';
    }
    button.innerHTML = clickedSVG;
  } else {
    button.style.translate = '0 0px';
    button.innerHTML = originalSVG;
  }
});