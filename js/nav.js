// console.log('hello');
const mobileNav = document.querySelector('.mobile-nav');
const cross = document.querySelector('.cross');
const navContainer = document.querySelector('.nav-container');

// console.log(navContainer);

mobileNav.addEventListener('click',()=>{

        cross.classList.add('open')
    navContainer.classList.add('activeNav')
    mobileNav.classList.add('mobile-navMove')
    
})

cross.addEventListener('click',()=>{
     cross.classList.remove('open')
    navContainer.classList.remove('activeNav')
    mobileNav.classList.remove('mobile-navMove')
})