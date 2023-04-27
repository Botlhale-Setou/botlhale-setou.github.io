import loadPopup from './popup.js';

const portWork = document.querySelector('#port-workdiv');

export const portfolio = {
	nr: [1, 2, 3, 4, 5],

	name: ['Recipe-App',
		'Mapfrica',
		'Space-Travelers Hub',
		'Leaderboard',
		'Math Magicians',
		'Awesome Books',
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
		`Space Travelers Hub is a React & Redux built website that uses the real SpaceX API to display rockets and missions - including the functionality of booking & reserving them.
		<br><br>
		Built With: React, Redux, SpaceX API
		`,
		`Leaderboard is a website that displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.
		<br><br>
		Built With: JavaScript, Webpack, HTML/CSS
		`,
		`Math-Magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.
		<br><br>
		Built With: React, JavaScript, HTML/CSS
		`,
		`My Awesome Books is a database web-app of awesome books created by the user and saves data even while offline.
		<br><br>
		Built With: JavaScript, HTML/CSS
		`,
		`The 2023 Men\'s Conference page.\n\n\nComplete with the day\'s program and guest speakers.
		<br><br>
		Built With: JavaScript, HTML/CSS
		`],

	images: [['./src/artwork/portfolio/recipe-app2.PNG'],
		['./src/artwork/portfolio/mapfrica1.png'],
		['./src/artwork/portfolio/space-travellers-hub.png'],
		['./src/artwork/portfolio/l1.png'],
		['./src/artwork/portfolio/math.png'],
		['./src/artwork/portfolio/ab.png'],
		['./src/artwork/portfolio/mc1.png']],

	live: ['https://recipe-app-0tvs.onrender.com/',
	'http://mapfrica.onrender.com/',
	'https://space-travellers-hub-naaj.onrender.com/',
	'https://leaderboard-r5l2.onrender.com/',
	'https://math-magicians-ysoy.onrender.com/',
	'http://awesomebooks.atwebpages.com/',
	'https://mensconference.000webhostapp.com/'],

	source: ['https://github.com/Botlhale-Setou/Recipe-App',
	'https://github.com/Botlhale-Setou/react-capstone-project',
	'https://github.com/Botlhale-Setou/space-travelers-hub',
	'https://github.com/Botlhale-Setou/Leaderboard',
	'https://github.com/Botlhale-Setou/Math-Magicians',
	'https://github.com/Botlhale-Setou/awesome-books-app',
	'https://github.com/Botlhale-Setou/mens-conference']
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