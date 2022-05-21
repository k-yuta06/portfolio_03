'use strict';

document.addEventListener('DOMContentLoaded', () => {
    new Main();
});

class Main {
    constructor() {
        this.el = {};
        this.el.mobileMenuBtn =  document.querySelector('.mobile-menu__btn');
        this.el.headerNav = document.querySelector('.header__nav');
        this.el.scrollButton = document.querySelector('.footer__scrollToTop');
        this.el.mobileMenuItems = document.querySelectorAll('.mobile-menu__item');
        this.el.mobileMenuItems = document.querySelectorAll('.mobile-menu__item');
        this.el.links = document.querySelectorAll(".header-menu__item a");
        this.el.mobileLinks = document.querySelectorAll(".mobile-menu__item a");
        this.init();
    }
    init() {
        this.addEvent();
    }
    toggleMobileMenu() {
        this.el.headerNav.classList.toggle('menu-open');
    }
    scrollToTop() {
        window.scrollTo({
            top: 0, 
            behavior: "smooth"
        });
    }
    closeMobileMenu() {
        this.el.headerNav.classList.remove('menu-open');
    }
    closeMobileMenuOnScreenResize() {
        if(window.innerWidth > 960) {
            this.closeMobileMenu();
        }
    }
    clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;
    
        scrollTo({
            top: offsetTop - 68, 
            behavior: "smooth"
        });
    }
    addEvent() {
        this.el.mobileMenuBtn.addEventListener('click', this.toggleMobileMenu.bind(this));
        this.el.scrollButton.addEventListener('click', this.scrollToTop);
        window.addEventListener('resize', this.closeMobileMenuOnScreenResize.bind(this));
        for(let i = 0; i < this.el.mobileMenuItems.length; i++) {
            this.el.mobileMenuItems[i].addEventListener('click', this.closeMobileMenu.bind(this));
        }
        for (const link of this.el.links) {
            link.addEventListener("click", this.clickHandler);
        }
        for (const mobileLink of this.el.mobileLinks) {
            mobileLink.addEventListener("click", this.clickHandler);
        }
    }
}