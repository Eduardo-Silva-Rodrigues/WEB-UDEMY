const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const computedStyleBody = getComputedStyle(document.body);
const colorBody = computedStyleBody.backgroundColor;

function stylePs() {
    for (let p of ps) {
        p.style.backgroundColor = colorBody;
        p.style.color = '#FFF'
    }
}

stylePs();

function divColorAltered () {
    paragrafos.style.backgroundColor = 'brown';
}

divColorAltered();