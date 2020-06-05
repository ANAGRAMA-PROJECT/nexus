import * as contentManager from './contentManager.js';
import * as rssManager from './rssManager.js';
import * as eventsHandler from './eventHandlers.js';

console.debug('Loading page... ');

rssManager.fetchStories();

const domContentLoadedHandler = async (event) => {
	contentManager.loadSite();
	eventsHandler.attachMainListeners();
};

document.addEventListener('DOMContentLoaded', domContentLoadedHandler);
