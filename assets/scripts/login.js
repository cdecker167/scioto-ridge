/*This file is connected to the login page, and sends POST requests to the /login
route to validate the login information. */

import {Backend} from './backend.js';
const loginButtonNav = document.querySelector('nav-bar').shadowRoot.querySelector('#login-button');
const loginButtonFoot = document.querySelector('footer-pro').shadowRoot.querySelector('#login-button');
//const registerButtonFoot = document.querySelector('footer-pro').shadowRoot.querySelector('#register-button');
const email = document.querySelector('#email');
const emailWarn = document.querySelector('#email-warning');
const password = document.querySelector('#password');
const submitButton = document.querySelector('#submit-button')
const loginForm = document.querySelector('#login-form');
const errorMes = document.querySelector('#error-message');
const API = new Backend();
API.setBaseUrl('https://whispering-garden-35353.herokuapp.com');




window.onload = () => {
    loginButtonNav.style.display = 'none';
    loginButtonFoot.style.display = 'none';
}

/*displays the text about email validity */
email.addEventListener('keyup', () => {
    if (email.validity.valid) {
        emailWarn.classList.remove('active');
    } else {
        emailWarn.classList.add('active');
    }
});

/*controls if the user can submit the form, both fields have to be filled out*/
loginForm.addEventListener('keyup', () => {
    if (email.value && password.value && email.validity.valid) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});

/*Sends the data from the form in the body of the request, the API responds with
whether the login was successful. If it was successful, the page redirects back home.
If it was unsuccessful, or the request could not be fulfilled, an error message displays.*/


loginForm.addEventListener('submit', event => {
    event.preventDefault();
    submitButton.disabled = true;
    API.post('/login', {
        email: `${email.value}`,
        pass: `${password.value}`
    })
    .then(response => {
       if (response.success == 'true') {
          errorMes.style.display = 'none';
          window.location.href = 'index.html';
       } else {
          errorMes.textContent = 'ERROR: Incorrect Email or Password';
          errorMes.style.display = 'block';
          password.value = "";
       }
    })
    .catch(error => {
        console.log('here?');
        errorMes.textContent = 'ERROR: Internal Server Error. Please Try Again.'
        errorMes.style.display = 'block';
    })
});