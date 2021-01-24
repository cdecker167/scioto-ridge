import {Backend} from './backend.js';
const loginButton = document.querySelector('nav-bar').shadowRoot.querySelector('#login-button');
const registerButton = document.querySelector('nav-bar').shadowRoot.querySelector('#register-button');
const footLogin = document.querySelector('footer-pro').shadowRoot.querySelector('#login-button');
const footRegister = document.querySelector('footer-pro').shadowRoot.querySelector('#register-button');
const reserveForm = document.querySelector('#reserve-form');
const attraction = document.querySelector('#attraction');
const time = document.querySelector('#time');
const size = document.querySelector('#size');
const button = document.querySelector('#submit-button');
const noLogin = document.querySelector('#not-logged-in');

const API = new Backend();
API.setBaseUrl('http://127.0.0.1:5000');

window.onload = () => {
    API.get('/login/v')
    .then(response => {
        if (response.session == 'true') {
            noLogin.style.display = 'none';
            loginButton.textContent = 'Profile';
            loginButton.setAttribute('href','profile.html');
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
            footRegister.style.display = 'none';
            footLogin.style.display = 'none';
        } else {
            reserveForm.style.display = 'none';
            noLogin.style.display = 'flex';
        }
    })
    .catch(error => {
        reserveForm.style.display = 'none';
    })
}

reserveForm.addEventListener('click', () => {
    if (attraction.value != "false" && time.value != "false" && size.value != "false") {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
});

reserveForm.addEventListener('submit', event => {
    event.preventDefault();
    button.disabled = true;
    API.post('/reserve', {
        attraction: `${attraction.value}`,
        time: `${time.value}`,
        size: `${size.value}`
    })
    .then(response => {
        if (response.success == 'true') {
           //TODO 
        }
    })
});