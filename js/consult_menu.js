export default function consultMenu() {
	// Находим выпадающие из nav меню
	const dropConsult = document.querySelectorAll('.drop__consult');
	console.log('dropConsult: ', dropConsult);

	// Находим пункты выпадающего меню
	const dropConsultItem = document.querySelectorAll('.drop__consult__item');

	// Перебираем все пункты выпадающего меню
	dropConsultItem.forEach((item) => {
		// console.log(item.textContent);
		item.addEventListener('click', (event) => {
			preventDefault();

			useConsultMenu();
		});
	});

	function useConsultMenu() {
		if (item.textContent.toLoverCase() == 'все консультации') {
			console.log('Pressed =All=');
		} else {
			console.log('Pressed');
		}
	}

	function goToConsultPage() {}
}
