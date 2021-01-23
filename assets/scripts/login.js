import {Backend} from './backend.js';
const loginButtonNav = document.querySelector('nav-bar').shadowRoot.querySelector('#login-button');
const loginButtonFoot = document.querySelector('footer-pro').shadowRoot.querySelector('#login-button');
//const registerButtonFoot = document.querySelector('footer-pro').shadowRoot.querySelector('#register-button');
const email = document.querySelector('#email');
const emailWarn = document.querySelector('#email-warning');
const password = document.querySelector('#password');
const submitButton = document.querySelector('#submit-button')
const loginForm = document.querySelector('#login-form');
const errorMes = document.querySelector('#error-message');
const API = new Backend();
API.setBaseUrl('http://127.0.0.1:5000');




window.onload = () => {
    loginButtonNav.style.display = 'none';
    loginButtonFoot.style.display = 'none';
}

email.addEventListener('keyup', () => {
    if (email.validity.valid) {
        emailWarn.classList.remove('active');
    } else {
        emailWarn.classList.add('active');
    }
});

loginForm.addEventListener('keyup', () => {
    if (email.value && password.value && email.validity.valid) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});

loginForm.addEventListener('submit', event => {
    event.preventDefault();
    API.post('/login', {
        email: `${email.value}`,
        pass: `${password.value}`
    })
    .then(response => {
       if (response.success == 'true') {
          errorMes.classList.remove('active');
          window.location.href = 'index.html';
       } else {
          errorMes.textContent = 'ERROR: Incorrect Email or Password';
          errosMes.classList.add('active');
       }
    })
    .catch(error => {
        errorMes.textContent = 'ERROR: Internal Server Error. Please Try Again.'
        errorMes.classList.add('active');
    })
});