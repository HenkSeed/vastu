/* console.log('Hello, World!'); */
const headerNavItems = document.querySelectorAll('.header__nav__item');
console.log('headerNavItems: ', headerNavItems);

const heroDropConsult = document.querySelector('.hero__drop__consult');
console.log('heroDropConsult: ', heroDropConsult);

const heroDropArtifacts = document.querySelector('.hero__drop__artifacts');
console.log('heroDropArtifacts: ', heroDropArtifacts);

headerNavItems.forEach((navItem) => {
	navItem.addEventListener('click', (target) => {
		target.preventDefault();
		console.log('clicked');
	});
});
