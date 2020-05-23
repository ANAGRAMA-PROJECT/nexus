import * as templateManager from './templateManager.js';

let feedsList = Array(); 
let feedComponents = new Map(); 

const fetchStories = async () => {
	console.log('Fetching stories ...');

	const response = await fetch('stories');
	feedsList = await response.json(); 

	console.log(feedsList);

	buildFeedsSection();
};

const buildFeedsSection = async () => {
	const feedItemTemplate = await templateManager.fetchTemplate('templates/rss/feedItem.html');  
	feedComponents.set('feedItem', feedItemTemplate);
}

export { fetchStories };
