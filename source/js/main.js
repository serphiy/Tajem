(function openMenu() {
    var menuIcon = document.querySelector('#main-menu-icon');
    var menu = document.querySelector('#main-menu');
    var body = document.querySelector('body');

    menuIcon.addEventListener('click', function(e) {
        menu.classList.toggle('main-menu_open');
        menuIcon.classList.toggle('main-menu-icon_open');
        e.stopPropagation();
    });
    body.addEventListener('click', function() {
        menu.classList.remove('main-menu_open');
        menuIcon.classList.remove('main-menu-icon_open');
    });
    menu.addEventListener('click', function(e) {
        if (e.target.tagName != 'A') {
            e.stopPropagation();
        }
    });
})();

$(document).ready(function(){
    $('.carousel-intro').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    $('.testimonials-carousel').slick({
        arrows: false,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        asNavFor: '.testimonials-indicators'
    });
    $('.testimonials-indicators').slick({
        arrows: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
        centerPadding: '40px',
        asNavFor: '.testimonials-carousel',
        focusOnSelect: true
    });
});
