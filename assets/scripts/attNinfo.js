import {Backend} from './backend.js';
const loginButton = document.querySelector('nav-bar').shadowRoot.querySelector('#login-button');
const registerButton = document.querySelector('nav-bar').shadowRoot.querySelector('#register-button');
const footLogin = document.querySelector('footer-pro').shadowRoot.querySelector('#login-button');
const footRegister = document.querySelector('footer-pro').shadowRoot.querySelector('#register-button');

const API = new Backend();
API.setBaseUrl('http://127.0.0.1:5000');
console.log('here in attNinfo');
window.onload = () => {
    API.get('/login/v')
    .then(response => {
        console.log(response);
        if (response.session == 'true') {
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
                })
            });
            footRegister.style.display = 'none';
            footLogin.textContent = 'Reserve';
            footLogin.setAttribute('href','reserve.html');
        }
    })    
}