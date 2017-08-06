'use strict'

var items = document.querySelector('.items');
var itemCount = document.querySelectorAll('.item').length;
var position = 0;

function setTransform() {
  items.style.transform = `translate(${-position * items.offsetWidth}px)`;
}

function prev() {
  position = Math.max(position - 1, 0);
  setTransform();
}

function next() {
  position = Math.min(position + 1, itemCount - 1);
  setTransform();
}

function goTo(pos) {
    position = pos;
    setTransform();
}

window.addEventListener('resize', setTransform);
