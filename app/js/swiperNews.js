import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

const swiperNews = new Swiper('.news__swiper', {
	slidesPerView: 1,
	// loop: true,
	navigation: {
		nextEl: '.news__swiper-button--next',
		prevEl: '.news__swiper-button--prev',
	},

	// Отключение функционала, если количество слайдов меньше требуется для работы
	// watchOverflow: true,

	breakpoints: {
		320: {
			slidesPerView: 'auto',
			spaceBetween: 10,
			simulateTouch: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 10,
			simulateTouch: true,
		},
		900: {
			slidesPerView: 3,
			spaceBetween: 20,
			simulateTouch: true,
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 30,
			simulateTouch: true,
		},
	},
});

export { swiperNews };
