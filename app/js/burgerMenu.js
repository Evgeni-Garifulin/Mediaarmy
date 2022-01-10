const burgerMenuShow = () => {
	const menu = document.querySelector('.header__menu--mobile');
	const close = document.querySelector('.header__menu-close');
	const body = document.querySelector('body');
	const button = document.querySelector('.header__mobile-menu');
	const overlay = document.querySelector('.page-overlay');

	button.addEventListener('click', () => {
		body.classList.add('no-scroll');
		menu.style.display = 'block';
		overlay.style.display = 'block';
	});

	close.addEventListener('click', () => {
		body.classList.remove('no-scroll');
		menu.style.display = 'none';
		overlay.style.display = 'none';
	});

	overlay.addEventListener('click', () => {
		body.classList.remove('no-scroll');
		menu.style.display = 'none';
		overlay.style.display = 'none';
	});
};

export { burgerMenuShow };
