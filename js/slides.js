// console.log('hello');

const primeImg = document.querySelector('.slide-primary__img-container');
const sideImg = document.querySelector('.side-slide__img-container');
const primePageNumb = document.querySelector('.slide__footer__middle__pagenumb-container');
const dotA = document.querySelector('.dot.A');
const dotB = document.querySelector('.dot.B');
const logo = document.querySelector('.logo-bg');
console.log(logo);

function slideOn(){
    primeImg.classList.add('slidePrimeBG')
    sideImg.classList.add('slideSideBG')
    primePageNumb.classList.add('slidePageNumber')
    dotA.classList.add('activeDotA')
    dotB.classList.add('activeDotB')
    logo.classList.add('techwear-logo')
}

// slideOn();





