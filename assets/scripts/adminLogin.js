import {Backend} from './backend.js';
const form = document.querySelector('form');
const email = document.querySelector('#email');
const pass = document.querySelector('#password');
const button = document.querySelector('#submit-button');
const errorMes = document.querySelector('#error-message');

const API = new Backend();
API.setBaseUrl('https://whispering-garden-35353.herokuapp.com');

form.addEventListener('keyup', () => {
    if (email.validity.valid && pass.value) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
});

form.addEventListener('submit', event => {
    event.preventDefault();
    button.disabled = true;
    API.post('/admin-login', {
        email: `${email.value}`,
        pass: `${pass.value}`
    })
    .then(response => {
        if (response.success == 'true') {
            window.location.href = 'admin.html';
        } else {
            errorMes.textContent = 'ERROR: Invalid Admin Credentials';
            errorMes.style.display = 'block';
            button.disabled = false;
            pass.value = "";
        }
    });
    
});