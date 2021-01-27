import {Backend} from './backend.js';
const times = document.querySelectorAll('.time');
const ratings = [];

const API = new Backend();
API.setBaseUrl('http://127.0.0.1:5000');


let currentModal = 0;
window.onload = () => {
    API.get('/attractions')
    .then(response => {
        for (let i=0; i<17; i++) {
            times[currentModal].textContent = `${response[`index${i+1}`].waitTime} minutes`;
            currentModal++;
        }
    });
}