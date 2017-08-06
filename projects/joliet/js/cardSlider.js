'use strict'

var cal = document.querySelector(".calendar");
const calItems = document.querySelectorAll('.cal-item');



function move() {
    // cal.style.transform = `translate(${e.clientX})`;

}
cal.addEventListener('click', (e) => {
    console.log(e.clientX);
    cal.style.transform = `translate(${e.clientX}px)`;
});
