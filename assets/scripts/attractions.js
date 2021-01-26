import {Backend} from './backend.js';
const times = document.querySelectorAll('.time');

const API = new Backend();
API.setBaseUrl('http://127.0.0.1:5000');

window.onload = () => {
    console.log(times);
    API.get('/attractions')
    .then(response => {
        //console.log(response);
    })
}