export default function cart() {
	// Находим иконку корзины
	const headerCartIcon = document.querySelector('.header__cart');

	// Находим тёмный фон
	const darkHeader = document.querySelector('.dark__header');
	console.log('darkHeader: ', darkHeader);

	// Находим блок меню корзины
	const cartMenu = document.querySelector('.cart-menu');
	console.log('cartMenu: ', cartMenu);

	// Отслеживаем нажатие иконки корзины
	headerCartIcon.addEventListener('click', (event) => {
		showCart();
	});

	// Отслеживаем нажатие тёмного фона (для закрытия меню корзины)
	darkHeader.addEventListener('click', (event) => {
		hideCart();
	});

	window.addEventListener('click', (event) => {
		console.log(event.target);
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
