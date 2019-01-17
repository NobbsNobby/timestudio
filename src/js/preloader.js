const preloader = document.querySelector('.preloader');

window.onload = () => {
    setTimeout(() => {
        preloader.classList.add('-type-disable');
        document.body.classList.remove('no-scroll');
    }, 1000);
};
