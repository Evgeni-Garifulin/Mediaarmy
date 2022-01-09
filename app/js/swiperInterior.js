import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

const swiperInterior = new Swiper('.interior__swiper', {
	spaceBetween: 20,
	// loop: true,
	navigation: {
		nextEl: '.interior__swiper-button--next',
		prevEl: '.interior__swiper-button--prev',
	},

	simulateTouch: true,
	// Отключение функционала, если количество слайдов меньше требуется для работы
	// watchOverflow: true,
	slidesPerView: 'auto',

	breakpoints: {
		768: {
			spaceBetween: 30,
		},
	},
});

export { swiperInterior };
