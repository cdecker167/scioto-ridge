import {Backend} from './backend.js';
const loginButton = document.querySelector('nav-bar').shadowRoot.querySelector('#login-button');
const registerButton = document.querySelector('nav-bar').shadowRoot.querySelector('#register-button');
const footLogin = document.querySelector('footer-pro').shadowRoot.querySelector('#login-button');
const footRegister = document.querySelector('footer-pro').shadowRoot.querySelector('#register-button');
const fName = document.querySelector('#f-name');
const lName = document.querySelector('#l-name');
const email = document.querySelector('#email');
const table = document.querySelector('#report');
const ratingDiv = document.querySelector('#rating');
const attSelect = document.querySelector('#att-select');
const buttons = document.querySelectorAll('.stary');
const submitButton = document.querySelector('#submit-button');
const form = document.querySelector('#stars-form');
let disabled = [];
let rating = "";

const API = new Backend();
API.setBaseUrl('https://whispering-garden-35353.herokuapp.com');

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
    footLogin.textContent = 'Reserve';
    footLogin.setAttribute('href','reserve.html');
    footRegister.style.display = 'none';
    API.get('/login/v')
    .then(response => {
        if (response.session == 'true') {
            fName.textContent = `${response.firstName}`;
            lName.textContent = `${response.lastName}`;
        }
    });
    API.get('/email')
    .then(response => {
        email.textContent = `${response.email}`
    });
    API.get('/report')
    .then(response => {
        let options = [];
        let resArray = response.reservations;
        resArray.forEach(res => {
            table.insertAdjacentHTML('beforeend',`<tr>
            <td>${res.time}</td>
            <td>${res.attraction}</td>
            <td>${res.confirmation}</td>
        </tr>`);
            options.push({name: `${res.attraction}`,id: Number.parseInt(res.att_id, 10)});
        });
        options.forEach(op => {
            attSelect.insertAdjacentHTML('beforeend',`<option value="${op.id}">${op.name}</option>`)
        });
    });
}

ratingDiv.addEventListener('click', () => {
    if (attSelect.value != 'false' && (buttons[0].checked || buttons[1].checked || buttons[2].checked || buttons[3].checked || buttons[4].checked) && !disabled.includes(attSelect.value)) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});

form.addEventListener('submit', event => {
    event.preventDefault();
    buttons.forEach(butt => {
        if (butt.checked) {
            rating = `${butt.value}`;
        }
    });
    API.post('/review', {id: `${attSelect.value}`, rating: `${rating}`})
    .then(response => {
        buttons.forEach(butt => {
            butt.checked = false;
        });
        submitButton.disabled = true;
        disabled.push(attSelect.value);
    })
});
