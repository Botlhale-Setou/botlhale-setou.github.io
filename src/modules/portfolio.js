import loadPopup from './popup.js';

const portWork = document.querySelector('#port-workdiv');

export const portfolio = {
	nr: [1, 2, 3, 4, 5],

	name: ['Pixel🌎Planet',
		'To-Do List',
		'BNK Chicken',
		'Awesome Books',
		'Kais Castle',
		'Leaderboard',
		'Mens Conference'],

	desc: [`A database web-application of over 500 emojis and some useful information on each! 
	Built using EmojiHub and Involvement APIs.
	<br><br><br><br><br><br>
	Competencies:<br>
- Using JavaScript to make websites dynamic and build basic single page apps.<br>
- Using ES6 syntax.<br>
- Using ES6 modules.<br>
- Using callbacks and promises.<br>
- Using webpack.<br>
- Applying JavaScript best practices and language style guides in code.<br>
- Using AAA pattern for unit tests.<br>
- Writing units tests for a JavaScript app.<br>
- Following Gitflow.<br>
- Solving simple git conflicts.<br>
- Sending and receiving data from an API.<br>
- Using API documentation.<br>
- Understanding and using JSON.<br>
- Making JavaScript code asynchronous.<br>
`,
		`A simple to-do list web-app using local storage to store tasks even while offline.
		<br><br><br><br><br>
		Competencies:<br>
		- Build web-app using Webpack (et al)<br>
		- Utilize local storage to store data.<br>
		- Store, remove and edit data in local storage.<br>
		`,
		'The (un)official BNK Chicken website. Work in progress...',
		'A simple web-library of "awesome books."\nStore and remove from local storage.',
		'A React game (based on Flappy Bird) I made for my son.',
		'A leaderboard webapp built using a Microverse API to store and retrieve data.',
		'The 2023 Men\'s Conference page.\n\n\nComplete with the day\'s program and guest speakers.'],

	images: [['./artwork/portfolio/pp-popup.png'],
		['./artwork/portfolio/tdl-home.png'],
		['./artwork/portfolio/bnkc-home.png'],
		['./artwork/portfolio/ab1.png'],
		['./artwork/portfolio/dp.png'],
		['./artwork/portfolio/l1.png'],
		['./artwork/portfolio/mc1.png']],

	live: [''],

	source: ['']
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