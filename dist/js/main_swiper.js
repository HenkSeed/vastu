export default function main_swiper() {
	const swiper = new Swiper('.swiper', {
		// Optional parameters
		// direction: 'vertical',
		loop: true,

		// If we need pagination
		// pagination: {
		// 	el: '.swiper-pagination',
		// },

		// Navigation arrows
		navigation: {
			nextEl: '.reviews__card__arrow-right',
			prevEl: '.reviews__card__arrow-left',
		},

		slidesPerView: 1,

		// And if we need scrollbar
		// scrollbar: {
		// 	el: '.swiper-scrollbar',
		// },
	});
}
