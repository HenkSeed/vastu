import scrollTop from './scroll_top.js';
import burger from './burger.js';
import cart from './cart.js';
import headerDropMenu from './headerDropMenu.js';

// // Находим в шапке сайта пункты навигационного меню
// const headerSection = document.querySelector('.header');
// const headerNavItems = headerSection.querySelectorAll('.header__nav__item');

// // Находим в блоке hero массив выпадающих меню
// const heroSection = document.querySelector('.hero');

// // Находим в nav каждое выпадающее меню по их классу
// const heroDropConsult = heroSection.querySelector('.hero__drop__consult');
// const heroDropArtifacts = heroSection.querySelector('.hero__drop__artifacts');

burger();

headerDropMenu();

cart();

scrollTop();
