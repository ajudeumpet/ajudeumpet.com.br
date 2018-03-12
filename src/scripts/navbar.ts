// tslint:disable
import pageLoadScrollIn from '../util/scroll';
setTimeout(function () {
    const navbar = document.querySelector('#toFix-navbar');
    const navbarPosition = navbar.getBoundingClientRect().top;
    pageLoadScrollIn(0);
    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > navbarPosition) {
            jQuery('.navbar').addClass('navbar-fixed');
            jQuery('#acessibilidade').addClass('acessibilidade-nav');
        }
        if (jQuery(window).scrollTop() < navbarPosition + 1) {
            jQuery('.navbar').removeClass('navbar-fixed');
            jQuery('#acessibilidade').removeClass('acessibilidade-nav');
        }
    });
}, 1000)