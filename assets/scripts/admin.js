import {Backend} from './backend.js';
const attractions = document.querySelectorAll('.list-item');
const totalRes = document.querySelector('#total-res');
const selectedAtt = document.querySelector('#selected-att');
const selectedRes = document.querySelector('#selected-res');
const waitTime = document.querySelector('#waittime');
const open = document.querySelector('#open');
const closed = document.querySelector('#closed');
const button = document.querySelector('#submit-button');
const table = document.querySelector('#report');
const form = document.querySelector('#modify-data');
let attInfo = {};
let isClosed = '';
let FORMSELECTED = 0;

const API = new Backend();
API.setBaseUrl('https://whispering-garden-35353.herokuapp.com');

window.onload = () => {
    API.get('/admin/v')
    .then(response => {
        attInfo = response;
        console.log(response);
    });
    API.get('/totalres')
    .then(response => {
        totalRes.textContent = response.total;
    });
}

attractions.forEach(att => {
    att.addEventListener('click', () => {
        button.value = 'Submit';
        FORMSELECTED = att.dataset.idNum;
        table.innerHTML=`<tr><th style="border-top-left-radius: 15px;">Time</th><th style ='border-top-right-radius: 15px;'>Confirmation Code</th></tr>`;
        selectedAtt.textContent = attInfo[`index${att.dataset.idNum}`].name;
        waitTime.value = attInfo[`index${att.dataset.idNum}`].wait_time;
        if (attInfo[`index${att.dataset.idNum}`].closed == '!false') {
            open.checked = true;
            closed.checked = false;
        } else if (attInfo[`index${att.dataset.idNum}`].closed == '!true') {
            open.checked = false;
            closed.checked = true;
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
});

form.addEventListener('click', () => {
    if (waitTime.value && (open.checked == true || closed.checked == true) && FORMSELECTED != 0) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
    if (closed.checked) {
        isClosed = '!true';
    } else if (open.checked) {
        isClosed = '!false';
    }
});

form.addEventListener('submit', event => {
    event.preventDefault();
    API.post('/change-attraction',{
        attraction: `${FORMSELECTED}`,
        time: `${waitTime.value}`,
        isClosed: `${isClosed}`
    })
    .then(response => {
        button.disabled = true;
        button.value = 'Success';
    })
});