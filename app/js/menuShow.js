const nenuShow = () => {
	const chooseButton = document.querySelectorAll('.menu__choose');
	const menu = document.querySelectorAll('.menu__result');
	const swiperButtons = document.querySelectorAll('.menu__swiper-buttons');

	let activePreview = 0;

	chooseButton[activePreview].classList.add('menu__choose--active');
	menu[activePreview].classList.remove('d-none');
	swiperButtons[activePreview].classList.remove('d-none');

	chooseButton.forEach((item, i) => {
		item.addEventListener('click', () => {
			chooseButton[activePreview].classList.remove('menu__choose--active');
			menu[activePreview].classList.add('d-none');
			swiperButtons[activePreview].classList.add('d-none');

			activePreview = i;

			chooseButton[activePreview].classList.add('menu__choose--active');
			menu[activePreview].classList.remove('d-none');
			swiperButtons[activePreview].classList.remove('d-none');
		});
	});
};

export { nenuShow };
