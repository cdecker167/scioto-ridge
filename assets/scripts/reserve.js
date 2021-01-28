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
const postSubmit = document.querySelector('#post-submit');
const code = document.querySelector('#code');
const timeOptions = document.querySelectorAll('.time');
const magicTimes = document.querySelectorAll('.magic');
const height = document.querySelector('#extra-height');

const API = new Backend();
API.setBaseUrl('http://127.0.0.1:5000');

window.onload = () => {
    postSubmit.style.display = 'none';
    API.get('/login/v')
    .then(response => {
        if (response.session == 'true') {
            noLogin.style.display = 'none';
            height.style.display = 'none';
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
            height.style.display = 'block';
        }
    })
    .catch(error => {
        reserveForm.style.display = 'none';
        height.style.display = 'none';
    })
    API.get('/reserve/forbidden')
    .then(response => {
        const timesList = response.unavailableTimes;
        timeOptions.forEach(option => {
            if (timesList.includes(option.value)){
                option.disabled = true;
            }
        });
    })
}

reserveForm.addEventListener('click', () => {
    if (attraction.value != "false" && time.value != "false" && size.value != "false") {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
    if (attraction.value == '18') {
        timeOptions.forEach(time => {
            time.style.display = 'none';
        });
        magicTimes.forEach(time => {
            time.style.display = 'inline';
        });
    } else {
        magicTimes.forEach(time => {
            time.style.display = 'none';
        });
        timeOptions.forEach(time => {
            time.style.display = 'inline';
        });
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
           reserveForm.style.display = 'none';
           postSubmit.style.display = 'flex';
           code.textContent = `${response.confirmation}`;
        }
    })
});