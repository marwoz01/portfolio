const burgerBtn = document.querySelector('.burger');
const barsIco = burgerBtn.querySelector('.fa-bars');
const xIco = burgerBtn.querySelector('.fa-times');
const navList = document.querySelector('.nav-list');

const handleNav = () => {
    navList.classList.toggle('active');
    burgerBtn.classList.toggle('active');
    barsIco.classList.toggle('hide');
    xIco.classList.toggle('hide');
}

burgerBtn.addEventListener('click', handleNav);
