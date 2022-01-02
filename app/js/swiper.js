import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

const swiper = new Swiper('.swiper', {
    spaceBetween: 22,
    // loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            simulateTouch: true,
        },
        600: {
            slidesPerView: 2,
            simulateTouch: true,
        },
        900: {
            slidesPerView: 3,
            simulateTouch: true,
        },
        1200: {
            slidesPerView: 4,
            simulateTouch: true,
        },
    },
});

export { swiper };
