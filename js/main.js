document.addEventListener("DOMContentLoaded", () => {

    const orderButton = document.querySelector(".solution-button");
    const dialog = document.querySelector('.order-popup');
    const closeButton = document.querySelector(".order-popup .close");

    orderButton.addEventListener("click", () => {
        dialog.classList.toggle('is-hidden');
    }, false);
    closeButton.addEventListener("click", () => {
        dialog.classList.toggle('is-hidden');
    }, false);


    const burgerButton = document.querySelector(".burger");
    const burgerMenu = document.querySelector('.menu-popup');
    const closeBurgerButton = document.querySelector(".menu-popup .close");
    const allBody = document.querySelector("body");
    const viewPortHeight = document.querySelector(".menu-popup .wrapper");

    viewPortHeight.style.height = self.innerHeight + 'px';
    burgerButton.addEventListener("click", () => {
        burgerMenu.classList.toggle('is-open');
        allBody.classList.toggle('disable-scroll');
    }, false);
    closeBurgerButton.addEventListener("click", () => {
        burgerMenu.classList.toggle('is-open');
        allBody.classList.toggle('disable-scroll');
    }, false);
});


