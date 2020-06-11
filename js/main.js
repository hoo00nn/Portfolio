'use strict';

// 스크롤 됐을 경우 Navbar Style 변경
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

// Navbar menu 클릭 시 해당하는 위치로 Scrolling
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const navbar_height = document.querySelector('#navbar').clientHeight;
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    const scrollY = (document.querySelector(link).offsetTop) - navbar_height;
    window.scrollTo({ top: scrollY, behavior: 'smooth' })
});

// "Contact me" Button Click Event
const ContactMeBtn = document.querySelector('.home__contact');
ContactMeBtn.addEventListener('click', (event) => {
    const scrollTo = document.querySelector('#contact');
    scrollTo.scrollIntoView({ behavior: 'smooth' });
});

// Scrolling responsive opcity
const home = document.querySelector('.home__container');
document.addEventListener('scroll', () => {
    const scrollPer = 1 - (window.scrollY / document.querySelector('#home').clientHeight);
    if (scrollPer <= 1) {
        home.style.opacity = scrollPer;
    }
});


// Arrow Up Button Event
const Arrow = document.querySelector(".arrow-up");
Arrow.addEventListener('click', () => {
    const home = document.getElementById("home");
    home.scrollIntoView({ behavior: 'smooth' });
});
document.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        Arrow.classList.add('visible');
    } else {
        Arrow.classList.remove('visible');
    }
});
