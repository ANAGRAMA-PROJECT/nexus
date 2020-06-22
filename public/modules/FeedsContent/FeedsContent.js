import { html, render } from 'https://unpkg.com/lit-html?module';
import { FeedsManager } from './FeedsManager.js';

export class FeedsContent extends HTMLElement {
	feedChannels = {};

	constructor () {
		super();
		const feedChannels = FeedsManager.fetchStories();
		this.feedChannels = feedChannels;
	}

	async connectedCallback() {
		const feedChannels = await this.feedChannels;

		console.log(feedChannels);

		const template = html`
			<div id="feed-channels">
				Feeds
			</div>
		`;

		render(template, this);
	}
}

customElements.define('feeds-content', FeedsContent);
