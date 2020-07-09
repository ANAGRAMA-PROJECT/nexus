import { html, render } from 'https://unpkg.com/lit-html?module';
import { FeedsManager } from './FeedsManager.js';
import { styles } from './FeedsContentStyles.js';
import { Router } from '../Router/Router.js';
import './FeedChannels.js';
import './FeedStories.js';

export class FeedsContent extends HTMLElement {
	pathString = '';
	stateData = {
		channels: [],
		selectedStories: [],
		selectedPathName: '',
		channelsHidden: false,
		storiesHidden: true,
		selectedPathChannel: '',
		storiesPathName: ''
	};

	get state() {
		return this.stateData;
	}

	set state(data) {
		this.stateData = this.handlePathName(data);
		this.renderComponent();
	}

	get pathname() {
		return this.pathString;
	}

	set pathname(pathString) {
		const state = this.state;

		state.selectedPathName = pathString;
		state.selectedPathChannel = Router.getPathSegments(pathString)[0];
		state.storiesPathName = state.selectedPathName.replace(`/${state.selectedPathChannel}`,''); 

		this.state = state;
	}

	fetchStories = async () => {
		const state = this.state;
		const feedChannels = await FeedsManager.fetchStories();

		state.feeds = feedChannels;
		state.channels = feedChannels.map((rawChannel) => {
			const channel = rawChannel.rss.channel[0];
			return channel;
		});

		this.state = state;
	};

	constructor() {
		super();
		this.fetchStories();
	}

	connectedCallback() {
		this.renderComponent();
	}

	handlePathName = (state) => {
		console.log(state.selectedPathChannel);
		
		if (state.selectedPathChannel && state.selectedPathChannel != '') {
			const segment = state.selectedPathChannel.replace(/\//g, '');
			if (state.channels.length != 0) {
				const selectedChannel = state.channels.find(
					(channel) =>
						Router.encodeBase64Url(channel.link[0]) == segment
				);

				if (selectedChannel) {
					state.selectedStories = selectedChannel.item;
					state.channelsHidden = true;
					state.storiesHidden = false;
				}
			}
		} else {
			state.channelsHidden = false;
			state.storiesHidden = true;
		}

		return state;
	};

	renderComponent = () => {
		const template = html`
			${styles}
			<feed-channels
				id="feed-channels"
				.channels=${this.state.channels}
				@channel-select=${this.handleChannelSelect}
				?hidden=${this.state.channelsHidden}
			></feed-channels>
			<feed-stories
				id="feed-stories"
				.stories=${this.state.selectedStories}
				.pathname=${this.state.storiesPathName}
				?hidden=${this.state.storiesHidden}
			></feed-stories>
		`;
		render(template, this);
	};

	handleChannelSelect = (event) => {
		const state = this.state;
		const channelIndex = event.target.getAttribute('index');
		const selectedPathName = this.getChannelPathSegment(channelIndex);

		state.selectedStories = this.state.feeds[
			channelIndex
		].rss.channel[0].item;

		state.selectedPathName = selectedPathName;

		this.state = state;
		Router.appendPathSegment(state.selectedPathName);
	};

	getChannelPathSegment(index) {
		const channelLink = this.state.feeds[index].rss.channel[0].link[0];
		const channelPath = Router.encodeBase64Url(channelLink);

		return channelPath;
	}
}

customElements.define('feeds-content', FeedsContent);
