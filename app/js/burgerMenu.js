const burgerMenuShow = () => {
	const menu = document.querySelector('.header__mobile-menu');
	const close = document.querySelector('.header__mobile-close');
	const body = document.querySelector('body');
	const button = document.querySelector('.header__mobile');
	const overlay = document.querySelector('.page-overlay');
	const link = document.querySelectorAll('.header__mobile-menu-item');

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

	link.forEach((item) => {
		item.addEventListener('click', () => {
			body.classList.remove('no-scroll');
			menu.style.display = 'none';
			overlay.style.display = 'none';
		});
	});
};

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

export { burgerMenuShow };
