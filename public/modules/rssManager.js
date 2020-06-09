import * as templateManager from './templateManager.js';
import { Router } from './router.js';

let feedChannels = Array();
let feedTemplates = new Map();

const fetchStories = async () => {
	console.log('Fetching stories ...');

	const response = await fetch('stories');
	feedChannels = await response.json();

	console.log(feedChannels);

	buildChannelsSection(feedChannels);
};

const buildChannelsSection = async (feedsList) => {
	const feedItemTemplate = await templateManager.fetchTemplate(
		'templates/rss/feedItem.html'
	);

	feedTemplates.set('feedItem', feedItemTemplate);

	// Create content view
	const feedsSection = document.querySelector('#main_content__news');
	const feedsView = document.createElement('div');
	feedsView.id = 'feed-channels-view';
	feedsSection.appendChild(feedsView);

	const feedComponents = feedsList.map(getFeedComponent);

	const tmpDOM = new DocumentFragment();

	for (const component of feedComponents) {
		const element = component;
		tmpDOM.appendChild(element);
	}

	feedsView.appendChild(tmpDOM);
};

const getFeedComponent = (feed, index) => {
	const component = feedTemplates.get('feedItem').cloneNode(true);

	const itemElement = component.querySelector('.feed-item');
	itemElement.setAttribute('data-channel-index', index);

	const feedTitle = feed.rss.channel[0].title[0];
	const feedLink = feed.rss.channel[0].link[0];
	const feedDescription = feed.rss.channel[0].description[0];

	const titleElement = component.querySelector('.feed-title');

	component.querySelector('.feed-badge__text').innerHTML = getInitials(
		feedTitle
	);

	titleElement.innerHTML = feedTitle;

	itemElement.addEventListener('click', handleChannelSelection);

	component.querySelector('.feed-link').innerHTML = feedLink;
	component.querySelector('.feed-link').setAttribute('href', feedLink);
	component.querySelector('.feed-description').innerHTML = feedDescription;

	return component;
};

const getInitials = (feedTitle) => {
	const splittedTitle = feedTitle.split(' ');
	let initials = '';
	for (let i = 0; i < 2; ++i) {
		initials += splittedTitle[i].charAt(0);
	}

	return initials;
};

const backToChannelsView = () => {
	hideChildren('#main_content__news');
	const channelsView = document.querySelector('#feed-channels-view');
	channelsView.hidden = false;
};

const hideChildren = (parentNodeSelector) => {
	const parentNode = document.querySelector(parentNodeSelector);

	for (const child of parentNode.children) {
		child.hidden = true;
	}
};

const handleChannelSelection = (event) => {
	const classList = event.target.classList;
	const feedChannelsView = document.querySelector('#feed-channels-view');

	if (classList.contains('feed-badge') || classList.contains('feed-title')) {
		const feedItem = event.currentTarget;
		const indexItem = feedItem.getAttribute('data-channel-index');
		feedChannelsView.hidden = true;
		buildChannelSection(indexItem);
		Router.setRoute('channel', backToChannelsView);
	}
};

const buildChannelSection = async (indexItem) => {
	const storyItemTemplate = await templateManager.fetchTemplate(
		'templates/rss/storyItem.html'
	);

	feedTemplates.set('storyItem', storyItemTemplate);

	// Create content view
	const feedsSection = document.querySelector('#main_content__news');
	const storiesView = document.createElement('div');
	storiesView.id = 'channel-stories-view';
	storiesView.setAttribute('data-channel-index', indexItem);
	storiesView.addEventListener('storyselection', handleStorySelection);
	feedsSection.appendChild(storiesView);

	const channel = getChannel(indexItem);
	const stories = channel.rss.channel[0].item;

	console.log(channel.rss.channel[0].item);

	const storyComponents = stories.map(getStoryComponent);

	const tmpDOM = new DocumentFragment();

	for (const component of storyComponents) {
		const element = component;
		tmpDOM.appendChild(element);
	}

	storiesView.appendChild(tmpDOM);
};

const getChannel = (index) => {
	return feedChannels[index];
};

const getStoryComponent = (story, index) => {
	const component = feedTemplates.get('storyItem').cloneNode(true);

	const itemElement = component.querySelector('.story-item');
	itemElement.setAttribute('data-story-index', index);
	itemElement.addEventListener('click', handleStoryItemClick);

	const storyTitle = story.title[0];
	const storyLink = story.link[0];
	const storyAuthor = story['dc:creator'][0];
	const originalDate = new Date(story.pubDate[0]);

	const storyDate = originalDate.toLocaleDateString();

	const descriptionElement = document.createElement('html');
	descriptionElement.innerHTML = story.description[0];
	const storyDescription = descriptionElement.innerText;

	component.querySelector('.story-title').innerText = storyTitle;
	component.querySelector('.story-link').innerText = storyLink;
	component.querySelector('.story-author').innerText = storyAuthor;
	component.querySelector('.story-date').innerText = storyDate;

	component.querySelector('.story-description').innerHTML = storyDescription;

	return component;
};

const handleStoryItemClick = (event) => {
	const classList = event.target.classList;

	if (
		classList.contains('story-badge') ||
		classList.contains('story-title') ||
		classList.contains('story-badge__form') ||
		classList.contains('story-badge__icon')
	) {
		const storySelectionEvent = new CustomEvent('storyselection', {
			bubbles: true,
			detail: event.currentTarget.getAttribute('data-story-index')
		});

		event.currentTarget.dispatchEvent(storySelectionEvent);
	} else {
		event.stopPropagation();
	}
};

const handleStorySelection = (event) => {
	console.log('Story Selected');
	console.log(event.currentTarget.getAttribute('data-channel-index'));
	console.log(event.detail);

	const channelIndex = event.currentTarget.getAttribute('data-channel-index');
	const storyIndex = event.detail;

	event.currentTarget.hidden = true;
	buildStoryContentSection(channelIndex, storyIndex);
};

const getStoryContent = (channelIndex, storyIndex) => {
	return feedChannels[channelIndex].rss.channel[0].item[storyIndex][
		'content:encoded'
	][0];
};

const buildStoryContentSection = (channelIndex, storyIndex) => {
	const storyContent = getStoryContent(channelIndex, storyIndex);

	// Create content view
	const feedsSection = document.querySelector('#main_content__news');
	const storyContentSection = document.createElement('div');
	storyContentSection.id = 'story-content-view';
	storyContentSection.setAttribute('data-story-index', storyIndex);
	storyContentSection.innerHTML = storyContent;
	storyContentSection.style.padding = '1rem';
	feedsSection.appendChild(storyContentSection);
};

export { fetchStories };
