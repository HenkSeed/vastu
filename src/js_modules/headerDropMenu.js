export default function headerDropMenu() {
	// Находим в шапке сайта пункты навигационного меню
	const headerSection = document.querySelector('.header');
	const headerNavItems = headerSection.querySelectorAll('.header__nav__item');

	// Находим блок hero для ограничения зоны поиска элементов
	const heroSection = document.querySelector('.hero');

	// Находим в nav каждое выпадающее меню по их классу
	const heroDropConsult = heroSection.querySelector('.hero__drop__consult');
	const heroDropArtifacts = heroSection.querySelector('.hero__drop__artifacts');

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
