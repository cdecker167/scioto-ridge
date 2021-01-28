import {Backend} from './backend.js';
const navBar = document.querySelector('nav-bar');
const loginButton = document.querySelector('nav-bar').shadowRoot.querySelector('#login-button');
const registerButton = document.querySelector('nav-bar').shadowRoot.querySelector('#register-button');
const footLogin = document.querySelector('footer-pro').shadowRoot.querySelector('#login-button');
const footRegister = document.querySelector('footer-pro').shadowRoot.querySelector('#register-button');
const headMessage = document.querySelector('#header-message');
const headLogin = document.querySelector('#head-login-button');
const headRegister = document.querySelector('#head-register-button');
const itinbutt = document.querySelector('#itinbutt');

const API = new Backend();
API.setBaseUrl('https://whispering-garden-35353.herokuapp.com');

let user = {};
window.onload = () => {
    API.get('/login/v')
    .then(response => {
        if (response.session == 'true') {
            user = response;
            loginButton.textContent= 'Profile';
            loginButton.setAttribute('href', 'profile.html');
            registerButton.textContent = 'Logout';
            registerButton.setAttribute('href', '#');
            registerButton.addEventListener('click', () => {
                API.get('/logout')
                .then(response => {
                    if (response.success == 'true') {
                        location.reload();
                    }
                })
            });
            headMessage.innerHTML = `<em>Welcome, ${user.firstName}! Click the button below to reserve your spot at a ride or restaurant!<em>`;
            headRegister.style.display = 'none';
            headLogin.textContent = 'Reserve';
            headLogin.setAttribute('href','reserve.html');
            footRegister.style.display = 'none';
            footLogin.textContent = 'Reserve';
            footLogin.setAttribute('href','reserve.html');
            itinbutt.setAttribute('href', 'profile.html');
        }
    })
}