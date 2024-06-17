export default function quickOrderConsultPopup() {
	// Находим все кнопки запуска меню быстрого заказа
	const consultationsChapterAllBtns = document.querySelectorAll(
		'.consultations__chapter-all-btn'
	);
	// Находим тёмный фон
	const consultationsDark = document.querySelector('.consultations__dark');

	// Находим форму заказа консультации
	const consultationsForm = document.querySelector('.consultations__form');

	// Слушаем все кнопки "Быстрый заказ"
	consultationsChapterAllBtns.forEach((consultation) => {
		consultation.addEventListener('click', (event) => {
			quickOrder();
		});
	});

	// Отслеживаем нажатие тёмного фона (для закрытия меню корзины)
	consultationsDark.addEventListener('click', (event) => {
		// hideCart();
		chequeToCloseForm();
		hideDarkHeader();
	});

	// Функция быстрого заказа
	function quickOrder() {
		showDarkHeader();
		showForm();
	}

	// Функция появления тёмного фона
	function showDarkHeader() {
		consultationsDark.classList.remove('dark--invisible');
		consultationsDark.classList.add('dark--visible');
		document.body.style.overflow = 'hidden';
	}

	// Функция появления формы
	function showForm() {
		consultationsForm.classList.add('consultations__form--visible');
		consultationsForm.classList.remove('consultations__form--invisible');
	}

	// Функция скрытия тёмного фона
	function hideDarkHeader() {
		consultationsDark.classList.add('dark--invisible');
		consultationsDark.classList.remove('dark--visible');
		document.body.style.overflow = '';
	}

	// Функция скрытия формы
	function hideForm() {
		consultationsForm.classList.add('consultations__form--invisible');
		consultationsForm.classList.remove('consultations__form--visible');
	}

	function chequeToCloseForm() {
		const bodyLimit = document.querySelector('body');

		bodyLimit.addEventListener('click', (event) => {
			// if (
			// Отсеиваем клик по иконке корзины, который привёл к открытию этого окна
			// 	event.target.classList.value != 'header__cart' &&
			// 	event.target.classList.value != ''
			// ) {
			// Закрываем окно корзины
			// hideCart();
		});

		// Перехватываем всплытие, если кликнули в пределах окна корзины
		consultationsForm.addEventListener('click', (event) => {
			event.stopPropagation();
			console.log('Clicked');
		});
	}
}
