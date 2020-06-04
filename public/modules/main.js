import * as contentManager from './contentManager.js';
import * as rssManager from './rssManager.js';
import * as eventsHandler from './eventHandlers.js';

console.debug('Loading page... ');

rssManager.fetchStories();

const domContentLoadedHandler = async (event) => {
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
