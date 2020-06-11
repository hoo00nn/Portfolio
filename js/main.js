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
