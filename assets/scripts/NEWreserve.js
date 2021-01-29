/*this file is attached to reserve.html, and controls the form and form submission*/

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
API.setBaseUrl('https://whispering-garden-35353.herokuapp.com');

/*on window load, validates the user session. If no session could be found,
then it changes the page and directs the user to login or create an account */
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
    });
    /*since reservations can't be within 30 minutes of each other, a list of 
    unavailable times is created via the database, and the unavailable times 
    are disabled on the form */
    API.get('/reserve/forbidden')
    .then(response => {
        const timesList = response.unavailableTimes;
        timeOptions.forEach(option => {
            if (timesList.includes(option.value)){
                option.disabled = true;
            }
        });
    });
}

/*this function ensures that the form can only be submitted when all of the 
select elements are not empty, and also changes the times to the ones available
for the magic show if that is selected. */
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

/*on form submit, the data in the form is posted to the api, and then inserted 
into the database, when the API responds that the action was successful, 
the success message and confirmation code are displayed. */
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
    });
});