import loadPortfolio from "./modules/portfolio.js";

const logo = document.querySelector('#navbar-logo');
const home = document.querySelector('#homebtn');

window.addEventListener('load', () => {
	loadPortfolio();
});

logo.addEventListener('click', () => {
	location.reload();
});

home.addEventListener('click', () => {
	location.reload();
});
