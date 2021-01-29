/*This file sends a request to the API, and populates the windows for each
attraction with its rating and wait time */

import {Backend} from './backend.js';
const times = document.querySelectorAll('.time');
const stars = document.querySelectorAll('.starz');
const ratings = [`<span style='color: #ef3e3d'></span><span style='color: #696969'>★★★★★</span>`,`<span style='color: #ef3e3d'>★</span><span style='color: #696969'>★★★★</span>`,`<span style='color: #ef3e3d'>★★</span><span style='color: #696969'>★★★</span>`,`<span style='color: #ef3e3d'>★★★</span><span style='color: #696969'>★★</span>`,`<span style='color: #ef3e3d'>★★★★</span><span style='color: #696969'>★</span>`,`<span style='color: #ef3e3d'>★★★★★</span><span style='color: #696969'></span>`];

const API = new Backend();
API.setBaseUrl('https://whispering-garden-35353.herokuapp.com');


/*When the window loads, the requests are sent to the /attractions and /stars routes, 
and then loops through the returned data and inserts it into the window for each
attraction. */

let currentModal = 0;
window.onload = () => {
    API.get('/attractions')
    .then(response => {
        for (let i=0; i<18; i++) {
            times[currentModal].textContent = `${response[`index${i+1}`].waitTime} minutes`;
            currentModal++;
        }
    });
    API.get('/stars')
    .then(response => {
        let currentStar = 0;
        response.ratings.forEach(rate => {
            stars[currentStar].innerHTML = `${ratings[Number.parseInt(rate.rating, 10)]}`;
            currentStar++;
        });
    });
}