

// Select DOM Items
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.mobile');
const main = document.querySelector('.main');
const navBtn = document.querySelectorAll('.nav-link');
// Set Initial State Of Menu
let showMenu = false;

hamburger.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add('active');
        menu.classList.add('active');
        main.classList.add('active');
        navBtn.forEach(item => item.classList.add('show'));

        // Set Menu State
        showMenu = true;
    } else {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
        main.classList.remove('active');
        navBtn.forEach(item => item.classList.remove('show'));

        // Set Menu State
        showMenu = false;
    }
}
