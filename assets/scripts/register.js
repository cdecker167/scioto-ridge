import {Backend} from './backend.js';
const signUp = document.querySelector('#signForm');
const fName = document.querySelector('#fName');
const lName = document.querySelector('#lName');
const email = document.querySelector('#email');
const emailWarn = document.querySelector('#email-warning');
const pass = document.querySelector('#password');
const passwords = document.querySelectorAll('.passbox');
const button = document.querySelector('#submit-button');
const passWarn = document.querySelector('#password-warning');
const API = new Backend();
API.setBaseUrl('');

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
})

email.addEventListener('keyup' , () => {
    console.log('keyup');
    if (email.validity.valid) {
        emailWarn.classList.remove('active');
    } else {
        emailWarn.classList.add('active')
    }
}) 