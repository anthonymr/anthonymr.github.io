function goTo(id) {
    var element = document.getElementById(id);
    window.scroll({
        top: element.offsetTop - 43,
        behavior: 'smooth'
    });
}

function toggleMenu() {
    let menu = document.getElementById('menu');
    let mobileMenu = document.getElementById('mobile-menu');

    menu.classList.toggle('hidden');
    mobileMenu.classList.toggle('close');
}