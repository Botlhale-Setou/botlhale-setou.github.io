import { portfolio } from "./portfolio.js";
import loadPortfolio from "./portfolio.js";

export default function loadPopup(index) {
	const portWork = document.querySelector('#port-workdiv');
	portWork.innerHTML += `
	<div id="port-work">
			<button id="port-work-exit" type="button">x</button>
			<h2 id="port-work-title">${portfolio.name[index]}</h2>
			<img id="port-work-img" src="${portfolio.images[index]}" alt="Image of ${portfolio.name[index]}">

			<div id="port-work-introdiv">
				<p id="port-work-desc">${portfolio.desc[index]}</p>

				<div id="port-work-btns">
					<a href="${portfolio.live[index]}" target="_blank"><button id="port-work-live" class="port-work-btn">View Live</button></a>
					<a href="${portfolio.source[index]}" target="_blank"><button id="port-work-source" class="port-work-btn">See Source</button></a>
				</div>
			</div>

		</div>
	`;

	const thePopup = document.querySelector('#port-work');
	setTimeout(function() {
		thePopup.style.left = 0;
	}, 100);

	const portExit = document.querySelector('#port-work-exit');
	const portPopup = document.querySelector('#port-work');
	portExit.addEventListener('click', () => {
		portWork.innerHTML = '';
		portPopup.style.left = 'none';
		loadPortfolio();
	});
};