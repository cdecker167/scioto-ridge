import {Backend} from './backend.js';
const navBar = document.querySelector('nav-bar');
const loginButton = document.querySelector('nav-bar').shadowRoot.querySelector('#login-button');

const API = new Backend();
API.setBaseUrl('http://127.0.0.1:5000');
window.onload = () => {
    //console.log(navBar);
    //console.log(loginButton);
    //console.log(loginButton.href);
    API.get('/login/v')
    .then(response => {
        if (response.session == 'true') {
            loginButton.textContent= 'Profile';
            loginButton.href = 'profile.html';
        }
    })
}