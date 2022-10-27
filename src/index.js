const contentDiv = document.querySelector('#content-div');

const projects = {
	name: ['Men\'s Conference', 'To-Do List', 'BNK Chicken', 'Awesome Books', 'Dev Portfolio'],
	desc: ['ddddddddddddddddddddddddddddddddddddddddddddddddd',
	'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
	'ffffffffffffffffffffffffffffffffffffffffffffffff',
	'gggggggggggggggggggggggggggggggggggggggggggggggg',
	'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'],
	images: [['./artwork/coding.jpg']],
	live: [''],
	source: ['']
};

const tabs = {
	name: ['Home', 'Projects', 'Contact', 'About'],
	active: [false, false, false, false],
	data: 
	[`<div id="home-div">
		<h1 class="" id="title">
			< Botlhale
			<marquee id="title-desc1" class="title-span">Full Stack Software Engineer // UX/UI Designer // Mobile Application Developer</marquee>
			Setou />
			<marquee id="title-desc2" class="title-span">HTML // CSS // JAVASCRIPT // WEBPACK // JEST // KOTLIN // C++</marquee>
		</h1>
		<button id="contact-btn" type="button">Contact</button>
	</div>`,
	`
	<div id="projects-div">
		<h1 class="" id="projects-title">Projects</h1>
		<div class="" id="proj-div">
			<h2 class="" id="proj-title">${projects.name[0]}</h2>
			<img src="${projects.images[0][0]}" alt="${projects.name[0] + ' image'}" class="" id="proj-img">
			<button type="button">See More</button>
			<p class="" id="proj-desc">${projects.desc[0]}</p>
			<div class="" id="proj-buttons">
				<button type="button">Prev</button>
				<button type="button">Next</button>
			</div>
		</div>
	</div>`,
	``,
	``],
};

console.log(tabs.name[3]);

// contentDiv.innerHTML = tabs.data[0];