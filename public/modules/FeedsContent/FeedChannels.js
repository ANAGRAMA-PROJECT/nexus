import { html, render } from 'https://unpkg.com/lit-html?module';
import './ChannelItem.js';

export class FeedChannels extends HTMLElement {
	channelsData = [];

	get channels() {
		return this.channelsData;
	}

	set channels(value) {
		this.channelsData = value;
		this.renderComponent();
	}

	connectedCallback() {
		this.renderComponent();
	}

	renderComponent = () => {
		const feedChannels = this.channels ? this.channels : [];

		const channelComponents = feedChannels.map((channel, index) => {
			return html`<channel-item
				index=${index}
				title=${channel.title[0]}
				link=${channel.link[0]}
				description=${channel.description[0]}
			></channel-item>`;
		});

		const template = html` ${channelComponents}  `;

		render(template, this);
	};
}

customElements.define('feed-channels', FeedChannels);
