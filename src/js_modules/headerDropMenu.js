export default function headerDropMenu() {
	// Находим в шапке сайта пункты навигационного меню
	const headerSection = document.querySelector('.header');
	const headerNavItems = headerSection.querySelectorAll('.header__nav__item');

	// Находим блок header для ограничения зоны поиска элементов
	// const headerSection = document.querySelector('.header');

	// Находим в nav каждое выпадающее меню по их классу
	const headerDropConsult = headerSection.querySelector(
		'.header__drop__consult'
	);
	console.log('headerDropConsult: ', headerDropConsult);
	const headerDropArtifacts = headerSection.querySelector(
		'.header__drop__artifacts'
	);

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
			headerDropConsult.classList.toggle('header__drop__shown');
			headerDropConsult.classList.toggle('header__drop__hidden');
		} else {
			// Если кликнули на другой пункт меню навигации
			headerDropConsult.classList.remove('header__drop__shown');
			headerDropConsult.classList.add('header__drop__hidden');
		}

		// Если кликнули на "Артефакты"
		if (event.target.textContent.toLowerCase().trim() == 'артефакты') {
			headerDropArtifacts.classList.toggle('header__drop__shown');
			headerDropArtifacts.classList.toggle('header__drop__hidden');
		} else {
			// Если кликнули на другой пункт меню навигации
			headerDropArtifacts.classList.remove('header__drop__shown');
			headerDropArtifacts.classList.add('header__drop__hidden');
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
