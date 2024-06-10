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
		nextEl: '.reviews__card__arrow-left',
		prevEl: '.reviews__card__arrow-right',
		// nextEl: '.swiper-button-prev',
		// prevEl: '.swiper-button-next',
	},

	slidesPerView: 1,
	autoHeight: true,
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
		duration: 2000,
	},
});

burger();

headerDropMenu();

cart();

scrollTop();
