import { html, render } from 'https://unpkg.com/lit-html?module';
import { FeedsManager } from './FeedsManager.js';
import './FeedItem.js';

export class FeedChannels extends HTMLElement {
	feedsChannelsData = [];

	get feedChannels() {
		return this.feedsChannelsData;
	}

	set feedChannels(value) {
		this.feedsChannelsData = value;
		// this.renderComponent();
	}

	constructor() {
		super();
		console.log(this.channels);
		// this.fetchStories();
	}

	connectedCallback() {
		console.log(this.getAttribute('channels'));
		console.log(this.channels);
		// this.renderComponent();
	}

	fetchStories = async () => {
		const feedChannels = await FeedsManager.fetchStories();
		this.feedChannels = feedChannels;
	};

	renderComponent = () => {
		const feedChannels = this.feedChannels;

		const channelComponents = feedChannels.map((channel, index) => {
			return html`<feed-item
				index=${index}
				title=${channel.rss.channel[0].title[0]}
				link=${channel.rss.channel[0].link[0]}
				description=${channel.rss.channel[0].description[0]}
				@channel-select=${this.handleChannelSelect}
			></feed-item>`;
		});

		const template = html`
			<div id="feed-channels">
				${channelComponents}
			</div>
		`;

		render(template, this);
	};

	handleChannelSelect = (event) => {
		console.log(event.target.getAttribute('index'));
	};
}

customElements.define('feed-channels', FeedChannels);
