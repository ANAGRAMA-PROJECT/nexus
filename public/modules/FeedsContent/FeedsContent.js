import { html, render } from 'https://unpkg.com/lit-html?module';
import { FeedsManager } from './FeedsManager.js';
import './FeedChannels.js';

export class FeedsContent extends HTMLElement {
	feedsChannelsData = [];

	get feedChannels() {
		return this.feedsChannelsData;
	}

	set feedChannels(value) {
		this.feedsChannelsData = value;
		this.renderComponent();
	}

	fetchStories = async () => {
		const feedChannels = await FeedsManager.fetchStories();
		this.feedChannels = feedChannels;
	};

	constructor() {
		super();
		this.fetchStories();
	}

	connectedCallback() {
		this.renderComponent();
	}

	renderComponent = () => {
		const template = html` <feed-channels></feed-channels> `;

		render(template, this);
	};

	handleChannelSelect = (event) => {
		console.log(event.target.getAttribute('index'));
	};
}

customElements.define('feeds-content', FeedsContent);
