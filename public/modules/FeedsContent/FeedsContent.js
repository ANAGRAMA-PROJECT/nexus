import { html, render } from 'https://unpkg.com/lit-html?module';
import { FeedsManager } from './FeedsManager.js';
import { styles } from './FeedsContentStyles.js';
import './FeedChannels.js';
import './FeedStories.js';

export class FeedsContent extends HTMLElement {
	feedsChannelsData = [];
	selectedStories = [];
	currentIndex = -1;
	componentsHidden = {
		channels: false,
		stories: true
	};

	get selectedIndex() {
		return this.currentIndex;
	}

	set selectedIndex(index) {
		this.currentIndex = index;
		this.selectedStories = this.feedChannels[index].rss.channel[0].item;
		this.changeVisibility();
		this.renderComponent();
	}

	get feedChannels() {
		return this.feedsChannelsData;
	}

	set feedChannels(data) {
		this.feedsChannelsData = data;
		this.channels = this.feedsChannelsData.map((rawChannel) => {
			return rawChannel.rss.channel[0];
		});

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
		const template = html`
			${styles}
			<feed-channels
				id="feed-channels"
				.channels=${this.channels}
				@channel-select=${this.handleChannelSelect}
				?hidden=${this.componentsHidden.channels}
			></feed-channels>
			<feed-stories
				id="feed-stories"
				.stories=${this.selectedStories}
				?hidden=${this.componentsHidden.stories}
			></feed-channels>
			></feed-stories>
		`;
		render(template, this);
	};

	changeVisibility = () => {
		if (this.componentsHidden.channels) {
			this.componentsHidden.channels = false;
			this.componentsHidden.stories = true;
		} else {
			this.componentsHidden.channels = true;
			this.componentsHidden.stories = false;
		}
	};

	handleChannelSelect = (event) => {
		const channelIndex = event.target.getAttribute('index');
		this.selectedIndex = channelIndex;
	};
}

customElements.define('feeds-content', FeedsContent);
