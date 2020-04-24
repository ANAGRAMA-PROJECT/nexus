import * as templateManager from './templateManager.js';
import * as contentManager from './contentManager.js';

console.debug('Loading page... ');

let pageState = {
	sectionList: ['Inicio', 'Noticias', 'Proyectos', 'Contacto', 'Hackers'],
	mainTitle: 'Colectivo Anagrama',
	defaultSection: 'Inicio'
};

let setHomeContent = async () => {
	let mainContent = document.querySelector('#main_content');
	let homeContent = null;

	homeContent = await templateManager.fetchHtmlTemplate(
		'templates/homeContent.html',
		'#main_content__home'
	);

	mainContent.appendChild(homeContent);
};

let setTitle = () => {
	let mainTitle = document.querySelector('#main_title');
	mainTitle.textContent = pageState.mainTitle;
};

let newsClickHandler = (event) => {
	let homeContent = document.querySelector('#main_content__home');
	let newsContent = document.querySelector('#main_content__news');

	homeContent.hidden = true;
	newsContent.hidden = false;
};

let domContentLoadedHandler = async (event) => {
	setTitle();
	await setHomeContent();
	contentManager.loadSite();

	document
		.querySelector('#navigation-bar_news')
		.addEventListener('click', newsClickHandler);
};

document.addEventListener('DOMContentLoaded', domContentLoadedHandler);
