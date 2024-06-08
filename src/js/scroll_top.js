// Прокручиваем страницу в начало
export default function scrollTop() {
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
