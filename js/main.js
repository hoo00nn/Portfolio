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
    let navbar_height = null;
    const navFullHeight = document.querySelector('#navbar').getBoundingClientRect().height;
    const navMenuHeight = document.querySelector('.navbar__menu-wrap').getBoundingClientRect().height;
    if (window.innerWidth < 768) {
        navbar_height = navFullHeight - navMenuHeight;
    } else {
        navbar_height = document.querySelector('#navbar').getBoundingClientRect().height;
    }
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    navbarMenu.classList.remove('show');
    const scrollY = (document.querySelector(link).offsetTop) - navbar_height;
    window.scrollTo({ top: scrollY, behavior: 'smooth' });
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

// Navbar Toggle Button Event
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('show');
});

// Project
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) {
        return;
    } 

    projectContainer.classList.add('anim-out');

    setTimeout(() => {
        projects.forEach((project) => {
            if(filter === '*' || filter === project.dataset.type) {
                project .classList.remove('invisible');
            }  else {
                project.classList.add('invisible');
            }
          });
        projectContainer.classList.remove('anim-out');
    }, 300);
});
