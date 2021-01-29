/*Controls the functionality for the admin page, modifynig park data, etc. */

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
const admin = document.querySelector('.adminbox');
const denied = document.querySelector('#denied');
let attInfo = {};
let isClosed = '';
let FORMSELECTED = 0;

const API = new Backend();
API.setBaseUrl('https://whispering-garden-35353.herokuapp.com');

/*verfies admin session, then gets the total reservations from the 
database */
window.onload = () => {
    API.get('/admin/v')
    .then(response => {
        attInfo = response;
        if (response.success == 'true') {
            admin.style.display = 'grid';
            denied.style.display = 'none';
        } else {
            denied.style.display = 'block';
            admin.style.display = 'none;'
        }
    });
    API.get('/totalres')
    .then(response => {
        totalRes.textContent = response.total;
    });
}


/*Each element in the list of attractions on the left populates the form 
with the specific data from the database */
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

/*controls the submission button, and assigns the 'open' or 'closed' value based on
which radio button is selected */
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

/* on form submit, the data from the form is sent to the API, 
where it updates the values for the selected ride in the attractions table */
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