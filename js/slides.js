// console.log('hello');

const primeImg = document.querySelector('.slide-primary__img-container');
const sideImg = document.querySelector('.side-slide__img-container');
const sideContainer = document.querySelector('.side-slide__container');
const primePageNumb = document.querySelector('.slide__footer__middle__pagenumb-container');
const dotA = document.querySelector('.dot.A');
const dotB = document.querySelector('.dot.B');
const logo = document.querySelector('.logo-bg');
const pageRight = document.querySelector('.slide__pagination-right');
const pageLeft = document.querySelector('.slide__pagination-left');
const playBtn = document.querySelector('.slide-footer__left__play-btn');
// console.log(sideContainer);


let slideTracker = null;


function slideOn(){
    primeImg.classList.add('slidePrimeBG')
    sideImg.classList.add('slideSideBG')
    primePageNumb.classList.add('slidePageNumber')
    dotA.classList.add('activeDotA')
    dotB.classList.add('activeDotB')
    logo.classList.add('techwear-logo')
}

// slideOn();

function transition(element){
    element.style.transition = 'all 1s ease-in-out 100ms';
}

function slideRight(primary,directionPrime,side,directionSide,pagenumber,directionPage){
    primary.style.transform = `translateX(-${directionPrime}vw) `;
    side.style.transform=  `translateX(-${directionSide}vw)`;
    pagenumber.style.transform = `translateY(-${directionPage}vh)`;
    slideTracker = true;
    console.log(slideTracker);
    activePageTracker();
    logo.style.transition = 'all 1s ease-in-out 100ms';
    logo.style.background = '#c54820';

}


function slideLeft(primary,directionPrime,side,directionSide,pagenumber,directionPage){
    primary.style.transform = `translateX(${directionPrime}vw) `;
    side.style.transform=  `translateX(${directionSide}vw)`;
    pagenumber.style.transform = `translateY(${directionPage}vh)`;
    slideTracker = false;
    console.log(slideTracker);
    activePageTracker();
    logo.style.transition = 'all 1s ease-in-out 100ms';
    logo.style.background = '#79e2bd';
    
    
    
}

function activePageTracker(){
    if(slideTracker  === true){
        dotA.classList.remove('dot-active');
        dotB.classList.add('dot-active');
    }else{
        dotB.classList.remove('dot-active');
        dotA.classList.add('dot-active');
    }
}

pageRight.addEventListener('click',()=>{
    transition(primeImg);
    transition(sideImg);
    transition(primePageNumb);
    slideRight(primeImg,70,sideImg,30,primePageNumb,17)
})

pageLeft.addEventListener('click',()=>{
    // console.log('Leftclick!');
     transition(primeImg);
    transition(sideImg);
    transition(primePageNumb);
    slideLeft(primeImg,0,sideImg,0,primeImg,0)
})

playBtn.addEventListener('click',()=>{
    alert('Fecthes the video source of the lookbook or any vdo :) Thank you!')
})




