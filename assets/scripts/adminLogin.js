/*controls the form and form submission for the administration login. */

import {Backend} from './backend.js';
const form = document.querySelector('form');
const email = document.querySelector('#email');
const pass = document.querySelector('#password');
const button = document.querySelector('#submit-button');
const errorMes = document.querySelector('#error-message');

const API = new Backend();
API.setBaseUrl('https://whispering-garden-35353.herokuapp.com');

/*the submit button is only enabled when all fields have been filled out*/
form.addEventListener('keyup', () => {
    if (email.validity.valid && pass.value) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
});

/*on form submit, the data is posted to the admin login route of the API.
if the credentials are validated, the page redirects to the admin page.
If not, an error message is displayed */
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