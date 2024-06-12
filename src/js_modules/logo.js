export default function logo() {
	// Находим Лого
	const logos = document.querySelectorAll('.header__logo');

	findLogos();

	// Перебираем логотипы и по клику на любой из них переходим
	// на главную страницу
	function findLogos() {
		logos.forEach((logo) => {
			logo.addEventListener('click', (event) => {
				event.preventDefault();
				window.location.href = 'index.html';
			});
		});
	}
}
