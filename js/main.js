import scrollTop from './scroll_top.js';
import burger from './burger.js';
import cart from './cart.js';
import headerDropMenu from './headerDropMenu.js';
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const swiper = new Swiper('.swiper', {
	// Optional parameters
	// direction: 'vertical',
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-prev',
		prevEl: '.swiper-button-next',
	},

	slidesPerView: 1,
	autoHeight: true,
});

burger();

headerDropMenu();

cart();

scrollTop();
