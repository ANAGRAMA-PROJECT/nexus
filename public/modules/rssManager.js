import * as templateManager from './templateManager.js';

const feedComponents;
let feedsList; 

const init = () => {
	feedComponents = new Map();
	feedsList = Array();
}

const fetchStories = async () => {
	console.log('Fetching stories ...');

	const response = await fetch('stories');
	feedsList = await response.json(); 

	console.log(feedsList);

	buildFeedsSection();
};

const buildFeedsSection = async () => {
	const feedItemTemplate = await templateManager.fetchTemplate('templates/rss/feedItem.html');  
	feedComponents.set(feedItemTemplate);
}

export { fetchStories };
