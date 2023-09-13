const initApp = () => {
    const hambutton = document.querySelector('#hamburger-button');
    const hamIcon = document.querySelector('#ham-icon');
    const mobileNav = document.querySelector('#mobile-nav');
    const primaryNav = document.querySelector('#primary-nav');

    addListener(hambutton, 'click', toggleMenu);
    addListener(mobileNav, 'click', toggleMenu);

    // menu toggle function
    function toggleMenu() {
        mobileNav.classList.toggle("hidden");
        mobileNav.classList.toggle("flex");
        hamIcon.classList.toggle("hambutton-toggle");
    }

    // function to add event listener to element
    function addListener(element, event, func) {
        element.addEventListener(event, func);
    }
}

document.addEventListener('DOMContentLoaded', initApp);