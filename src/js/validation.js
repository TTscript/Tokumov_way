/*jshint esversion: 6 */

const tel = document.querySelector('#tel');
const email = document.querySelector('#email');
const shape = document.querySelector('#shape');
const errorPhoneInput = document.querySelector('.contact-us__error-phone-input');
const errorEmailInput = document.querySelector('.contact-us__error-email-input');


tel.addEventListener('focusin', e => {
  tel.value = '+7'
});

tel.addEventListener('focusout', e => {
  if (tel.value === '+7') {
    tel.value = '';
    tel.placeholder = '+7 Введите 10 цифр номера';
  }
})

shape.addEventListener('submit', (e) => {
  e.preventDefault();

  validateInputs();
});

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function setError(element) {
  if (element === tel) {
    errorPhoneInput.classList.add('contact-us__error-message');
  } else if (element === email) {
    errorEmailInput.classList.add('contact-us__error-message');
  }
  element.style.border = `1px solid rgba(254, 120, 101, 1)`;
}

function setSuccess(element) {
  if (element === tel) {
    errorPhoneInput.classList.remove('contact-us__error-message');
  } else if (element === email) {
    errorEmailInput.classList.remove('contact-us__error-message');
  }
  element.style.border = `1px solid rgba(44, 46, 63, 0.3)`;
}

function validateInputs() {
  const telValue = tel.value.trim();
  const emailValue = email.value.trim();

  if (telValue === '') {
    setError(tel);
  } else if (telValue.length !== 12) {
    setError(tel);
  }else {
    setSuccess(tel);
  }

  if (emailValue === '') {
    setError(email);
  } else if (!isValidEmail(emailValue)) {
    setError(email);
  } else {
    setSuccess(email);
  }
}

