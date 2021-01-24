import {Backend} from './backend.js';
const registerButton = document.querySelector('nav-bar').shadowRoot.querySelector('#register-button');
const footRegister = document.querySelector('footer-pro').shadowRoot.querySelector('#register-button');
const signUp = document.querySelector('#signForm');
const fName = document.querySelector('#fName');
const lName = document.querySelector('#lName');
const email = document.querySelector('#email');
const emailWarn = document.querySelector('#email-warning');
const pass = document.querySelector('#password');
const passwords = document.querySelectorAll('.passbox');
const button = document.querySelector('#submit-button');
const passWarn = document.querySelector('#password-warning');
const errorMes = document.querySelector('#error-message');
const API = new Backend();
API.setBaseUrl('http://127.0.0.1:5000');


window.onload = () => {
    registerButton.style.display = 'none';
    footRegister.style.display = 'none';
}

signUp.addEventListener('keyup', () => {
    if (fName.value && lName.value && email.validity.valid && passwords[0].value === passwords[1].value && email.value && passwords[0].value) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
});

passwords[1].addEventListener('keyup' , () => {
    if (passwords[0].value === passwords[1].value) {
        passWarn.classList.remove('active');
    } else {
        passWarn.classList.add('active');
    }
});

email.addEventListener('keyup' , () => {
    console.log('keyup');
    if (email.validity.valid) {
        emailWarn.classList.remove('active');
    } else {
        emailWarn.classList.add('active')
    }
}); 

signUp.addEventListener('submit', event => {
    event.preventDefault();
    API.post('/login/new', {
        fName: `${fName.value}`,
        lName: `${lName.value}`,
        email: `${email.value}`,
        password: `${pass.value}`
    }).then(response => {
        if (response.success == 'true') {
            errorMes.classList.remove('active');
            window.location.href = 'index.html';
        } else {
            errorMes.textContent = 'ERROR: Account with this email already exists!';
            errorMes.classList.add('active');
        }
    })
    .catch(error => {
        errorMes.textContent = 'ERROR: Internal Server Error. Our Engineers are hard at work to address this!';
    });
});