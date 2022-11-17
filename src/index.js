import loadPortfolio from "./modules/portfolio.js";

const logo = document.querySelector('#navbar-logo');
const home = document.querySelector('#homebtn');
const mandela = document.querySelector('#mandela');
const break1 = document.querySelector('#break1');
const break2 = document.querySelector('#break2');
const break3 = document.querySelector('#break3');

function isInViewport(element) {
	const rect = element.getBoundingClientRect();
	return (
			rect.top <= window.innerHeight &&
			rect.bottom > 0
	);
}

window.addEventListener('load', () => {
	loadPortfolio();
});

logo.addEventListener('click', () => {
	location.reload();
});

home.addEventListener('click', () => {
	location.reload();
});

window.onscroll = () => {
	if (isInViewport(break1)) {
		mandela.src = `./artwork/nelly.jpg`;
	}
	if (isInViewport(break2)) {
		mandela.src = `./artwork/gandizzle.jpg`;
	}
	if (isInViewport(break3)) {
		mandela.src = `./artwork/johnnyboy.jpg`;
	}
};
