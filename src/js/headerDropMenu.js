export default function headerDropMenu() {
	// Находим блок header для ограничения зоны поиска элементов
	const headerSection = document.querySelector('.header');
	// Находим в шапке сайта пункты навигационного меню
	const headerNavItems = headerSection.querySelectorAll('.header__nav__item');

	// Находим в nav каждое выпадающее меню по их классу
	const headerDropConsult = headerSection.querySelector('.drop__consult');
	const headerDropArtifacts = headerSection.querySelector('.drop__artifacts');

	findNavItems();

	// Перебираем все элементы навигационного меню
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
			headerDropConsult.classList.toggle('drop__shown');
			headerDropConsult.classList.toggle('drop__hidden');
		} else {
			// Если кликнули на другой пункт меню навигации
			headerDropConsult.classList.remove('drop__shown');
			headerDropConsult.classList.add('drop__hidden');
		}

		// Если кликнули на "Артефакты"
		if (event.target.textContent.toLowerCase().trim() == 'артефакты') {
			headerDropArtifacts.classList.toggle('drop__shown');
			headerDropArtifacts.classList.toggle('drop__hidden');
		} else {
			// Если кликнули на другой пункт меню навигации
			headerDropArtifacts.classList.remove('drop__shown');
			headerDropArtifacts.classList.add('drop__hidden');
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
