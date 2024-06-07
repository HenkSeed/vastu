function burger() {
	// Находим шапку сайта для сокращения времени поиска элементов
	const headerSection = document.querySelector('.header');

	// Находим иконку бургера
	const headerBurger = headerSection.querySelector('.header__burger__icon');

	// Находим тёмное окно
	const darkBg = document.querySelector('.dark-bg');

	// Находим бургер-меню
	const darkBurgerMenu = darkBg.querySelector('.dark-bg__burger-menu');
	console.log('darkBurgerMenu: ', darkBurgerMenu);

	// Находим крест бургер-меню
	const darkBgBurgerMenuCross = darkBg.querySelector(
		'.dark-bg__burger-menu-cross'
	);

	// Находим массив элементов (якорные ссылки) бургер-меню
	const burgerMenuItems = darkBurgerMenu.querySelectorAll(
		'.dark-bg__burger-menu-item a'
	);

	// Находим в бургер-меню каждое выпадающее меню по их классу
	const darkBurgerConsult = darkBg.querySelector('.dark-bg__burger-consult');
	const darkBurgerArtifacts = darkBg.querySelector(
		'.dark-bg__burger-artifacts'
	);

	// Находим крестики закрытия подменю Consult бургера
	const darkBurgerConsultCross = darkBurgerConsult.querySelector(
		'.dark-bg__burger-consult-cross'
	);

	// Находим строчку закрытия меню Consult
	const closeConsultItem = darkBurgerConsult.querySelector(
		'.dark-bg__burger-consult>a'
	);

	// Находим крестики закрытия подменю Artifacts бургера
	const darkBurgerArtifactsCross = darkBurgerArtifacts.querySelector(
		'.dark-bg__burger-artifacts-cross'
	);

	// Находим строчку закрытия меню Artifacts
	const closeArtifactsItem = darkBurgerArtifacts.querySelector(
		'.dark-bg__burger-artifacts>a'
	);

	// Отлавливаем нажатие на строку закрытия Artifacts меню
	closeArtifactsItem.addEventListener('click', (event) => {
		closeArtifactsMenu();
	});

	// Отлавливаем нажатие на крестик закрытия Artifacts меню
	darkBurgerArtifactsCross.addEventListener('click', (event) => {
		closeArtifactsMenu();
	});

	// Функция закрытия Artifacts меню
	function closeArtifactsMenu() {
		console.log('Нажат элемент закрытия меню артефактов');
		darkBurgerArtifacts.classList.toggle('get-invisible');
		darkBurgerArtifacts.classList.toggle('get-visible');

		getBurgerMenuVisible();
	}

	// Отлавливаем нажатие на строку закрытия Consult меню
	closeConsultItem.addEventListener('click', (event) => {
		closeConsultMenu();
	});

	// Отлавливаем нажатие на крестик закрытия Consult меню
	darkBurgerConsultCross.addEventListener('click', (event) => {
		closeConsultMenu();
	});

	findBurgerMenuItems();

	showBurgerMenu();
	hideBurgerMenu();

	// Функция закрытия Consult меню
	function closeConsultMenu() {
		console.log('Нажат элемент закрытия меню консультации');
		darkBurgerConsult.classList.toggle('get-invisible');
		darkBurgerConsult.classList.toggle('get-visible');

		getBurgerMenuVisible();
	}

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
		// Если кликнули на "Консультации"
		if (event.target.textContent.toLowerCase().trim() == 'консультации') {
			darkBurgerConsult.classList.toggle('get-invisible');
			darkBurgerConsult.classList.toggle('get-visible');

			getBurgerMenuInvisible();
		}

		// Если кликнули на "Артефакты"
		if (event.target.textContent.toLowerCase().trim() == 'артефакты') {
			darkBurgerArtifacts.classList.toggle('get-invisible');
			darkBurgerArtifacts.classList.toggle('get-visible');

			getBurgerMenuInvisible();
		}

		if (event.target.textContent.toLowerCase().trim() == 'о компании') {
			window.location.href = 'about.html';
		}

		if (event.target.textContent.toLowerCase().trim() == 'отзывы') {
			window.location.href = 'reviews.html';
		}

		if (event.target.textContent.toLowerCase().trim() == 'новости') {
			window.location.href = 'news.html';
		}

		if (event.target.textContent.toLowerCase().trim() == 'контакты') {
			window.location.href = 'contacts.html';
		}
	}

	// Делаем основное бургер-меню невидимым
	function getBurgerMenuInvisible() {
		darkBurgerMenu.classList.add('get-invisible');
		darkBurgerMenu.classList.remove('get-visible');
	}

	// Делаем основное бургер-меню видимым
	function getBurgerMenuVisible() {
		darkBurgerMenu.classList.remove('get-invisible');
		darkBurgerMenu.classList.add('get-visible');
	}

	// Показываем затемнённое окно
	function showDark() {
		darkBg.classList.add('dark-bg--shown');
		document.body.style.overflow = 'hidden';
	}

	// Убираем затемнённое окно
	function hideDark() {
		darkBg.classList.remove('dark-bg--shown');
		document.body.style.overflow = '';
	}

	// Вызываем бургер-меню
	function showBurgerMenu() {
		headerBurger.addEventListener('click', (event) => {
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
}

function cart() {
	// Находим иконку корзины
	const headerCartIcon = document.querySelector('.header__cart');
	console.log('headerCartIcon: ', headerCartIcon);

	// Находим тёмный фон
	const darkHeader = document.querySelector('.dark__header');

	// Находим блок меню корзины
	const cartMenu = document.querySelector('.cart-menu');
	console.log('cartMenu: ', cartMenu);

	// Отслеживаем нажатие иконки корзины
	headerCartIcon.addEventListener('click', (event) => {
		showCart();
	});

	// Отслеживаем нажатие тёмного фона (для закрытия меню корзины)
	darkHeader.addEventListener('click', () => {
		hideCart();
	});

	// Функция появления тёмного фона
	function showDarkHeader() {
		darkHeader.classList.remove('dark--invisible');
		darkHeader.classList.add('dark--visible');
	}

	// Функция скрытия тёмного фона
	function hideDarkHeader() {
		darkHeader.classList.add('dark--invisible');
		darkHeader.classList.remove('dark--visible');
	}

	// Функция появления меню корзины
	function showCartMenu() {
		cartMenu.classList.add('cart-menu--visible');
		cartMenu.classList.remove('cart-menu--invisible');
	}

	// Функция скрытия меню корзины
	function hideCartMenu() {
		cartMenu.classList.remove('cart-menu--visible');
		cartMenu.classList.add('cart-menu--invisible');
	}

	function showCart() {
		showDarkHeader();
		showCartMenu();
	}

	function hideCart() {
		hideDarkHeader();
		hideCartMenu();
	}
}

function headerDropMenu() {
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
			window.location.href = 'about.html';
		}

		// Если кликнули на "Отзывы"
		if (event.target.textContent.toLowerCase() == 'отзывы') {
			window.location.href = 'reviews.html';
		}

		// Если кликнули на "Новости"
		if (event.target.textContent.toLowerCase() == 'новости') {
			window.location.href = 'news.html';
		}

		// Если кликнули на "Контакты"
		if (event.target.textContent.toLowerCase() == 'контакты') {
			window.location.href = 'contacts.html';
		}
	}
}

// import burger from './burger.js';
// import scrollTop from './scroll_top.js';

// Находим в шапке сайта пункты навигационного меню
const headerSection = document.querySelector('.header');
const headerNavItems = headerSection.querySelectorAll('.header__nav__item');

// Находим в блоке hero массив выпадающих меню
const heroSection = document.querySelector('.hero');

// Находим в nav каждое выпадающее меню по их классу
const heroDropConsult = heroSection.querySelector('.hero__drop__consult');
const heroDropArtifacts = heroSection.querySelector('.hero__drop__artifacts');

burger();

headerDropMenu();

cart();

// findNavItems();

scrollTop();

// Прокручиваем страницу в начало
function scrollTop() {
	// Находим логотип
	const headerLogo = document.querySelectorAll('.header__logo');

	// Отслеживаем нажатие на логотип
	headerLogo.forEach((logo) => {
		logo.addEventListener('click', (event) => {
			event.preventDefault();
			windowScrollToTop();
		});
	});

	// Функция скроллинга в начало страницы
	function windowScrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}
}
