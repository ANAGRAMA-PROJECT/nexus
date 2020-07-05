import { html, render } from 'https://unpkg.com/lit-html?module';
import { FeedsManager } from './FeedsManager.js';
import { styles } from './FeedsContentStyles.js';
import { Router } from '../Router/Router.js';
import './FeedChannels.js';
import './FeedStories.js';

export class FeedsContent extends HTMLElement {
	feedsData = [];
	selectedStories = [];
	currentChannelIndex = -1;
	pathString = '';

	get pathName() {
		return this.pathString;
	}

	set pathName(string) {
		this.pathString = string;
		console.log(string);
	}

	get selectedChannelIndex() {
		return this.currentChannelIndex;
	}

	set selectedChannelIndex(index) {
		this.currentChannelIndex = index;
		this.selectedStories = this.feeds[index].rss.channel[0].item;
		this.renderComponent();
		Router.appendPathLevel('stories');
	}

	get feeds() {
		return this.feedsData;
	}

	set feeds(data) {
		this.feedsData = data;
		this.channels = this.feedsData.map((rawChannel) => {
			return rawChannel.rss.channel[0];
		});

		this.renderComponent();
	}

	fetchStories = async () => {
		const feedChannels = await FeedsManager.fetchStories();
		this.feeds = feedChannels;
	};

	constructor() {
		super();
		this.fetchStories();
	}

	connectedCallback() {
		this.renderComponent();
	}

	renderComponent = () => {
		const template = html`
			${styles}
			<feed-channels
				id="feed-channels"
				.channels=${this.channels}
				@channel-select=${this.handleChannelSelect}
			></feed-channels>
			<feed-stories
				id="feed-stories"
				.stories=${this.selectedStories}
				path="stories"
				hidden
			></feed-stories>
		`;
		render(template, this);
	};

	handleChannelSelect = (event) => {
		const channelIndex = event.target.getAttribute('index');
		this.selectedChannelIndex = channelIndex;
	};
}

customElements.define('feeds-content', FeedsContent);
