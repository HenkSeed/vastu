// Находим в шапке сайта пункты навигационного меню
const headerSection = document.querySelector('.header');
const headerNavItems = headerSection.querySelectorAll('.header__nav__item');

// Находим в блоке hero массив выпадающих меню
const heroSection = document.querySelector('.hero');
const takeDropMenus = heroSection.querySelectorAll('.hero__drop__menu');

// Находим в nav каждое выпадающее меню по их классу
const heroDropConsult = heroSection.querySelector('.hero__drop__consult');
const heroDropArtifacts = heroSection.querySelector('.hero__drop__artifacts');

// Находим иконку бургера
const headerBurger = headerSection.querySelector('.header__burger__icon');

// Находим тёмное окно
const darkBg = document.querySelector('.dark-bg');

// Находим бургер-меню
const darkBurgerMenu = darkBg.querySelector('.dark-bg__burger-menu');

// Находим крест бургер-меню
const darkBgBurgerMenuCross = darkBg.querySelector(
	'.dark-bg__burger-menu__cross'
);

// Находим массив элементов (якорные ссылки) бургер-меню
const burgerMenuItems = darkBurgerMenu.querySelectorAll(
	'.dark-bg__burger-menu__item a'
);

// Находим в бургер-меню каждое выпадающее меню по их классу
const darkBurgerConsult = darkBg.querySelector('.dark-bg__burger__consult');
console.log('darkBurgerConsult: ', darkBurgerConsult);
const darkBurgerArtifacts = darkBg.querySelector('.dark-bg__burger__artifacts');
console.log('darkBurgerArtifacts: ', darkBurgerArtifacts);

// Находим крестики закрытия подменю бургера
const darkBurgerConsultCross = darkBurgerConsult.querySelector(
	'.dark-bg__burger__consult__cross'
);
console.log('darkBurgerConsultCross: ', darkBurgerConsultCross);

const darkBurgerArtifactstCross = darkBurgerArtifacts.querySelector(
	'.dark-bg__burger__artifacts__cross'
);
console.log('darkBurgerArtifactstCross: ', darkBurgerArtifactstCross);

findNavItems();
findBurgerMenuItems();
showBurgerMenu();
hideBurgerMenu();

// Перебираем все элементы бургер-меню
function findBurgerMenuItems() {
	burgerMenuItems.forEach((menuItem) => {
		menuItem.addEventListener('click', (event) => {
			event.preventDefault();
			// Открываем выпадающее из бургера меню, соответствующее клику
			showBurgerDropMenu(event);
		});
	});
}

// Обрабатываем нажатие пунктов, вызывающих бургер-подменю
function showBurgerDropMenu(event) {
	console.log('event.target: ', event.target.innerText);
	// Если кликнули на "Консультации"
	if (event.target.textContent.toLowerCase().trim() == 'консультации') {
		darkBurgerConsult.classList.toggle('get-invisible');
		darkBurgerConsult.classList.toggle('get-visible');

		darkBurgerMenu.classList.add('get-invisible');
		darkBurgerMenu.classList.remove('get-visible');
		// heroDropConsult.classList.toggle('hero__drop__shown');
		// heroDropConsult.classList.toggle('hero__drop__hidden');
		console.log('Pressed CONSULT');
	} else {
		console.log('Not pressed CONSULT');
		// Если кликнули на другой пункт меню навигации
		// heroDropConsult.classList.remove('hero__drop__shown');
		// heroDropConsult.classList.add('hero__drop__hidden');
	}
}

// Перебераем все элементы навигационного меню
function findNavItems() {
	headerNavItems.forEach((navItem) => {
		navItem.addEventListener('click', (event) => {
			event.preventDefault();
			// Открываем выпадающее меню, соответствующее клику
			showDropMenu(event);
		});
	});
}

// Обрабатываем нажатие пунктов навигационного меню
function showDropMenu(event) {
	// Если кликнули на "Консультации"
	if (event.target.textContent.toLowerCase().trim() == 'консультации') {
		heroDropConsult.classList.toggle('hero__drop__shown');
		heroDropConsult.classList.toggle('hero__drop__hidden');
	} else {
		// Если кликнули на другой пункт меню навигации
		heroDropConsult.classList.remove('hero__drop__shown');
		heroDropConsult.classList.add('hero__drop__hidden');
	}

	// Если кликнули на "Артефакты"
	if (event.target.textContent.toLowerCase().trim() == 'артефакты') {
		heroDropArtifacts.classList.toggle('hero__drop__shown');
		heroDropArtifacts.classList.toggle('hero__drop__hidden');
	} else {
		// Если кликнули на другой пункт меню навигации
		heroDropArtifacts.classList.remove('hero__drop__shown');
		heroDropArtifacts.classList.add('hero__drop__hidden');
	}

	// Если кликнули на "О компании"
	if (event.target.textContent.toLowerCase() == 'о компании') {
		console.log('О компании');
		window.location.href = 'about.html';
	}

	// Если кликнули на "Отзывы"
	if (event.target.textContent.toLowerCase() == 'отзывы') {
		console.log('Отзывы');
		window.location.href = 'reviews.html';
	}

	// Если кликнули на "Новости"
	if (event.target.textContent.toLowerCase() == 'новости') {
		console.log('Новости');
		window.location.href = 'news.html';
	}

	// Если кликнули на "Контакты"
	if (event.target.textContent.toLowerCase() == 'контакты') {
		console.log('Контакты');
		window.location.href = 'contacts.html';
	}
}

// Показываем затемнённое окно
function showDark() {
	darkBg.classList.add('dark-bg__show');
	document.body.style.overflow = 'hidden';
}

// Убираем затемнённое окно
function hideDark() {
	darkBg.classList.remove('dark-bg__show');
	document.body.style.overflow = '';
}

// Вызываем бургер-меню
function showBurgerMenu() {
	headerBurger.addEventListener('click', (event) => {
		console.log('event: ', event.target);
		// Открываем бургер-меню в затемнённом окне

		// Показываем затемнение окно
		showDark();
	});
}

function hideBurgerMenu() {
	darkBgBurgerMenuCross.addEventListener('click', (event) => {
		// Скрываем бургер-меню в затемнённом окне
		// Убираем затемнённое окно

		hideDark();
	});
}
