/*This file controls the register page, and is responsible for submitting the data
for new users to the API, where it can be inserted into the database. */

import {Backend} from './backend.js';
const registerButton = document.querySelector('nav-bar').shadowRoot.querySelector('#register-button');
const footRegister = document.querySelector('footer-pro').shadowRoot.querySelector('#register-button');
const signUp = document.querySelector('#signForm');
const fName = document.querySelector('#fName');
const lName = document.querySelector('#lName');
const email = document.querySelector('#email');
const emailWarn = document.querySelector('#email-warning');
const pass = document.querySelector('#password');
const passwords = document.querySelectorAll('.passbox');
const button = document.querySelector('#submit-button');
const passWarn = document.querySelector('#password-warning');
const errorMes = document.querySelector('#error-message');
const API = new Backend();
API.setBaseUrl('https://whispering-garden-35353.herokuapp.com');


window.onload = () => {
    registerButton.style.display = 'none';
    footRegister.style.display = 'none';
}

/*controls the submit button. can only submit with a valid email, 
matching passwords, and all fields filled out */
signUp.addEventListener('keyup', () => {
    if (fName.value && lName.value && email.validity.valid && passwords[0].value === passwords[1].value && email.value && passwords[0].value) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
});

/*displays the text about passwords matching if the two do not match */
passwords[1].addEventListener('keyup' , () => {
    if (passwords[0].value === passwords[1].value) {
        passWarn.classList.remove('active');
    } else {
        passWarn.classList.add('active');
    }
});

/* displays the email validity text if the value is not a valid email */
email.addEventListener('keyup' , () => {
    console.log('keyup');
    if (email.validity.valid) {
        emailWarn.classList.remove('active');
    } else {
        emailWarn.classList.add('active')
    }
}); 

/*on form submit, the form data is sent in the body of a POST request to the API, the 
API validates it, and responds whether the insertion was successful. 
If it was unsuccesful, or the request could not be fulfilled, an error message 
is displayed accordingly. */
signUp.addEventListener('submit', event => {
    event.preventDefault();
    button.disabled = true;
    API.post('/login/new', {
        fName: `${fName.value}`,
        lName: `${lName.value}`,
        email: `${email.value}`,
        password: `${pass.value}`
    }).then(response => {
        if (response.success == 'true') {
            errorMes.style.display = 'none';
            window.location.href = 'index.html';
        } else {
            errorMes.textContent = 'ERROR: Account with this email already exists!';
            errorMes.style.display = 'block';
            email.value = "";
            passwords[1].value = "";
        }
    })
    .catch(error => {
        errorMes.textContent = 'ERROR: Internal Server Error. Please Try Again';
        errorMes.style.display = 'block';
    });
});