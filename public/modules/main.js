import * as contentManager from './contentManager.js';
import * as rssManager from './rssManager.js';
import * as eventHandlers from './eventHandlers.js';

console.debug('Loading page... ');

rssManager.fetchStories();

const domContentLoadedHandler = async (event) => {
	contentManager.loadSite();
	eventHandlers.attachMainListeners();
};

document.addEventListener('DOMContentLoaded', domContentLoadedHandler);
