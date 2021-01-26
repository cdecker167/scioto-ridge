import {Backend} from './backend.js';
const loginButton = document.querySelector('nav-bar').shadowRoot.querySelector('#login-button');
const registerButton = document.querySelector('nav-bar').shadowRoot.querySelector('#register-button');
const footLogin = document.querySelector('footer-pro').shadowRoot.querySelector('#login-button');
const footRegister = document.querySelector('footer-pro').shadowRoot.querySelector('#register-button');
const fName = document.querySelector('#f-name');
const lName = document.querySelector('#l-name');
const email = document.querySelector('#email');
const table = document.querySelector('#report');

const API = new Backend();
API.setBaseUrl('http://127.0.0.1:5000');

window.onload = () => {
    loginButton.style.display = 'none';
    registerButton.textContent = 'Logout';
    registerButton.setAttribute('href','#');
    registerButton.addEventListener('click', () => {
        API.get('/logout')
        .then(response => {
            if (response.success == 'true') {
                window.location.href = 'index.html';
            }
        });
    });
    API.get('/login/v')
    .then(response => {
        
    })
}