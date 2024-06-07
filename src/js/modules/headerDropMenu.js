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
