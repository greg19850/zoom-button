const btnBig = document.querySelector('button.big');
const btnSmall = document.querySelector('button.small');
const text = document.querySelector('p.text');

let fontSize = 16

function fontBigger() {
    fontSize++
    text.style.fontSize = `${fontSize}px`
};

function fontSmaller() {
    fontSize--
    text.style.fontSize = `${fontSize}px`
};

btnBig.addEventListener('click', fontBigger)
btnSmall.addEventListener('click', fontSmaller)