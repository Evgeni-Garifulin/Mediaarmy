import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

const swiperMenuHookah = new Swiper('.menu__swiper-hookah', {
	spaceBetween: 30,
	// loop: true,
	navigation: {
		nextEl: '.menu__swiper-button-next--hookah',
		prevEl: '.menu__swiper-button-prev--hookah',
	},

	// Отключение функционала, если количество слайдов меньше требуется для работы
	watchOverflow: true,

	breakpoints: {
		320: {
			slidesPerView: 'auto',
			spaceBetween: 10,
			simulateTouch: true,
		},
		768: {
			slidesPerView: 3,
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

const swiperMenuSigars = new Swiper('.menu__swiper-sigars', {
	spaceBetween: 30,
	// loop: true,
	navigation: {
		nextEl: '.menu__swiper-button-next--sigars',
		prevEl: '.menu__swiper-button-prev--sigars',
	},

	// Отключение функционала, если количество слайдов меньше требуется для работы
	watchOverflow: true,

	breakpoints: {
		320: {
			slidesPerView: 'auto',
			spaceBetween: 10,
			simulateTouch: true,
		},
		768: {
			slidesPerView: 3,
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

const swiperMenuAlcohol = new Swiper('.menu__swiper-alcohol', {
	spaceBetween: 30,
	// loop: true,
	navigation: {
		nextEl: '.menu__swiper-button-next--alcohol',
		prevEl: '.menu__swiper-button-prev--alcohol',
	},

	// Отключение функционала, если количество слайдов меньше требуется для работы
	watchOverflow: true,

	breakpoints: {
		320: {
			slidesPerView: 'auto',
			spaceBetween: 10,
			simulateTouch: true,
		},
		768: {
			slidesPerView: 3,
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

export { swiperMenuHookah, swiperMenuSigars, swiperMenuAlcohol };
