import {Backend} from './backend.js';
const attractions = document.querySelectorAll('.list-item');
const totalRes = document.querySelector('#total-res');
const selectedAtt = document.querySelector('#selected-att');
const selectedRes = document.querySelector('#selected-res');
const waitTime = document.querySelector('#waittime');
const open = document.querySelector('#open');
const closed = document.querySelector('#closed');
const table = document.querySelector('#report');
const tableLand = document.querySelector('#table-landing');
let attInfo = {};
let FORMSELECTED = 0;

const API = new Backend();
API.setBaseUrl('http://127.0.0.1:5000');

window.onload = () => {
    API.get('/admin/v')
    .then(response => {
        console.log(response);
        attInfo = response;
    });
    API.get('/totalres')
    .then(response => {
        totalRes.textContent = response.total;
    });
}

attractions.forEach(att => {
    att.addEventListener('click', () => {
        FORMSELECTED = att.dataset.idNum;
        console.log(FORMSELECTED);
        table.innerHTML=`<tr><th style="border-top-left-radius: 15px;">Time</th><th style ='border-top-right-radius: 15px;'>Confirmation Code</th></tr>`;
        selectedAtt.textContent = attInfo[`index${att.dataset.idNum}`].name;
        waitTime.value = attInfo[`index${att.dataset.idNum}`].wait_time;
        if (attInfo[`index${att.dataset.idNum}`].closed == 'false') {
            open.checked = true;
            closed.checked = false;
        }
        API.get(`/getres/${att.dataset.idNum}`)
        .then(response => {
            let i = 0;
            response.reservations.forEach(res => {
                i++;
                table.insertAdjacentHTML('beforeend',`<tr>
                <td>${res.time}</td>
                <td>${res.confirmation}</td>
            </tr>`)
            });
            selectedRes.textContent = `${i}`;
        });
    });
})