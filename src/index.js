import loadPortfolio from "./modules/portfolio.js";

const logo = document.querySelector('#navbar-logo');
const home = document.querySelector('#homebtn');
const mandela = document.querySelector('#mandela');
const break1 = document.querySelector('#break1');
const break2 = document.querySelector('#break2');
const break3 = document.querySelector('#break3');
const bars = document.querySelector('#bars');
const navList = document.querySelector('#navList');
const close = document.querySelector('#close');

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
		mandela.src = `./src/artwork/nelly.jpg`;
	}
	if (isInViewport(break2)) {
		mandela.src = `./src/artwork/gandizzle.jpg`;
	}
	if (isInViewport(break3)) {
		mandela.src = `./src/artwork/johnnyboy.jpg`;
	}
};

bars.addEventListener('click', () => {
	navList.style.display = 'flex';
	navList.style.position = 'absolute';
	navList.style.left = 0;
	navList.style.top = 0;
	navList.style.width = '100vw';
	navList.style.height = '100vh';
	navList.style.flexDirection = 'column';
	navList.style.alignItems = 'center';
	navList.style.justifyContent = 'space-around';
})

close.addEventListener ('click', () => {
	navList.style.display = 'none';
})