import loadPopup from './popup.js';

const portWork = document.querySelector('#port-workdiv');

export const portfolio = {
	nr: [1, 2, 3, 4, 5],

	name: ['Recipe-App',
		'Mapfrica',
		'Space-Travelers Hub',
		'Leaderboard',
		'Kais Castle',
		'To-Do List',
		'Mens Conference'],

	desc: [`
	Recipe-App is a website that displays meals categorized into 3 groups.
	Each meal has cooking instructions, comments, likes and additional information (incl video).
	<br><br>
	Built With: JavaScript, Webpack, Jest, HTML/CSS
	`,
		`
		Mapfrica is a React & Redux built website that uses the Rest Countries API to display african countries and related information.
		<br><br>
		Built With: React, Redux, Rest Countries API
		`,
		'The (un)official BNK Chicken website. Work in progress...',
		'A simple web-library of "awesome books."\nStore and remove from local storage.',
		'A React game (based on Flappy Bird) I made for my son.',
		'A leaderboard webapp built using a Microverse API to store and retrieve data.',
		'The 2023 Men\'s Conference page.\n\n\nComplete with the day\'s program and guest speakers.'],

	images: [['./src/artwork/portfolio/recipe-app2.PNG'],
		['./src/artwork/portfolio/mapfrica1.png'],
		['./src/artwork/portfolio/bnkc-home.png'],
		['./src/artwork/portfolio/ab1.png'],
		['./src/artwork/portfolio/dp.png'],
		['./src/artwork/portfolio/l1.png'],
		['./src/artwork/portfolio/mc1.png']],

	live: ['',
	'http://mapfrica.onrender.com/',
	'',
	'',
	'',
	'',
	''],

	source: ['https://github.com/Botlhale-Setou/Recipe-App',
	'https://github.com/Botlhale-Setou/react-capstone-project',
	'',
	'',
	'',
	'',
	'']
};

export default function loadPortfolio() {
	for (let i = 0; i < portfolio.name.length; i++) {
		portWork.innerHTML += `
		<div class="card" id="${i}">
			<div class="card-darken2"></div>
			<h3 class="cardTitle">${portfolio.name[i]}</h3>
		</div>
		`;
	}

	const allCards = document.querySelectorAll('.card');
	allCards.forEach(card => {
		card.addEventListener('click', () => {
			loadPopup(card.id);
		});
	});

};