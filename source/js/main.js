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

