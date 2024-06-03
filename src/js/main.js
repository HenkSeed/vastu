// Находим в шапке сайта пункты навигационного меню
const headerSection = document.querySelector('.header');
const headerNavItems = headerSection.querySelectorAll('.header__nav__item');

// Находим в блоке hero массив выпадающих меню
const heroSection = document.querySelector('.hero');
const takeDropMenus = heroSection.querySelectorAll('.hero__drop__menu');

// Находим каждое выпадающее меню по его классу
const heroDropConsult = heroSection.querySelector('.hero__drop__consult');
const heroDropArtifacts = heroSection.querySelector('.hero__drop__artifacts');

// Находим иконку бургера
const headerBurger = headerSection.querySelector('.header__burger__icon');

// Находим тёмное окно
const darkBg = document.querySelector('.dark-bg');

// Находим бургер-меню
const darkBurgerMenu = darkBg.querySelector('.dark-bg__burger-menu');
console.log('darkBurgerMenu: ', darkBurgerMenu);

// Находим крест бургер-меню
const darkBgBurgerMenuCross = darkBg.querySelector(
	'.dark-bg__burger-menu__cross'
);

// Перебераем все элементы навигационного меню
headerNavItems.forEach((navItem) => {
	navItem.addEventListener('click', (event) => {
		event.preventDefault();
		// Открываем выпадающее меню, соответствующее клику
		showDropMenu(event);
	});
});

showBurgerMenu();
hideBurgerMenu();

// Обрабатываем нажатие пунктов навигационного меню
function showDropMenu(event) {
	console.log('event.target: ', event.target.textContent);

	// Если кликнули на "Консультации"
	if (event.target.textContent.toLowerCase() == 'консультации') {
		heroDropConsult.classList.toggle('hero__drop__shown');
		heroDropConsult.classList.toggle('hero__drop__hidden');
	} else {
		// Если кликнули на другой пункт меню навигации
		heroDropConsult.classList.remove('hero__drop__shown');
		heroDropConsult.classList.add('hero__drop__hidden');
	}

	// Если кликнули на "Артефакты"
	if (event.target.textContent.toLowerCase() == 'артефакты') {
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
	}

	// Если кликнули на "Отзывы"
	if (event.target.textContent.toLowerCase() == 'отзывы') {
		console.log('Отзывы');
	}

	// Если кликнули на "Новости"
	if (event.target.textContent.toLowerCase() == 'новости') {
		console.log('Новости');
	}

	// Если кликнули на "Контакты"
	if (event.target.textContent.toLowerCase() == 'контакты') {
		console.log('Контакты');
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
