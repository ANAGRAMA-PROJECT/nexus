import * as contentManager from './contentManager.js';
import * as templateManager from './templateManager.js';
import * as rssManager from './rssManager.js';
import * as eventsHandler from './eventHandlers.js';

console.debug('Loading page... ');

rssManager.fetchStories();

const pageState = {
	sectionList: ['Inicio', 'Noticias', 'Proyectos', 'Contacto', 'Hackers'],
	mainTitle: 'Colectivo Anagrama',
	defaultSection: 'Inicio'
};

const setHomeContent = async () => {
	const mainContent = document.querySelector('#main_content');
	const homeContent = await templateManager.fetchTemplate(
		'templates/homeContent.html'
	);

	mainContent.appendChild(homeContent);
};

const setTitle = () => {
	const mainTitle = document.querySelector('#main_title');
	mainTitle.textContent = pageState.mainTitle;
};

const domContentLoadedHandler = async (event) => {
	// setTitle();
	await setHomeContent();
	contentManager.loadSite();

	document
		.querySelector('#navigation-bar_home')
		.addEventListener('click', eventsHandler.homeClickHandler);

	document
		.querySelector('#navigation-bar_news')
		.addEventListener('click', eventsHandler.newsClickHandler);

	document
		.querySelector('#navigation-bar_projects')
		.addEventListener('click', eventsHandler.projectClickHandler);

	document
		.querySelector('#navigation-bar_hackers')
		.addEventListener('click', eventsHandler.hackerClickHandler);
	document
		.querySelector('#navigation-bar_contact')
		.addEventListener('click', eventsHandler.contactClickHandler);
};

document.addEventListener('DOMContentLoaded', domContentLoadedHandler);
