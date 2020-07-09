import { html, render } from 'https://unpkg.com/lit-html?module';
import './StoryContainer.js';
import './StoryItem.js';
import './StoryList.js';
import { Router } from '../Router/Router.js';

export class FeedStories extends HTMLElement {
	storiesData = [];
	pathString = '';
	stateData = {
		stories: [],
		storyListHidden: false,
		selectedStoryHidden: true,
		selectedStory: {},
		selectedPathStory: ''
	};

	get state() {
		return this.stateData;
	}

	set state(data) {
		this.stateData = data;
		this.stateData = this.handlePathName(data);
		this.renderComponent();
	}

	get pathname() {
		return this.pathString;
	}

	set pathname(pathString) {
		const state = this.state;

		this.pathString = pathString;

		state.selectedPathName = pathString;
		state.selectedPathStory = Router.getPathSegments(pathString)[0];

		this.state = state;
	}

	get stories() {
		return this.state.storiesData;
	}

	set stories(data) {
		const state = this.state;
		state.stories = data;
		this.state = state;
	}

	handlePathName = (state) => {
		if (state.selectedPathStory && state.selectedPathStory != '') {
			const segment = state.selectedPathStory.replace(/\//g, '');
			if (state.stories.length != 0) {
				const selectedStory = state.stories.find(
					(story) => Router.encodeBase64Url(story.link[0]) == segment
				);
				state.selectedStory = selectedStory;
				if (selectedStory) {
					state.storyListHidden = true;
					state.selectedStoryHidden = false;
				}
			}
		} else {
			state.storyListHidden = false;
			state.selectedStoryHidden = true;
		}

		return state;
	};

	connectedCallback() {
		this.renderComponent();
	}

	renderComponent() {
		const template = html`
			<story-list
				id="stories__list"
				.stories=${this.state.stories}
				@story-select=${this.handleStorySelect}
				?hidden=${this.state.storyListHidden}
			></story-list>
			<story-container
				id="stories__container"
				.story=${this.state.selectedStory}
				?hidden=${this.state.selectedStoryHidden}
			>
			</story-container>
		`;

		render(template, this);
	}

	handleStorySelect = (event) => {
		const state = this.state;
		const storyIndex = event.target.getAttribute('index');

		state.selectedStory = this.state.stories[storyIndex];
		state.selectedPathName = this.getStoryPathSegment(state.selectedStory);

		this.state = state;
		Router.appendPathSegment(state.selectedPathName);
	};

	getStoryPathSegment = (story) => {
		return Router.encodeBase64Url(story.link);
	};

	changevisibility = () => {
		if (this.componentsHidden.storyList) {
			this.componentsHidden.storyList = false;
			this.componentsHidden.storyContainer = true;
		} else {
			this.componentsHidden.storyList = true;
			this.componentsHidden.storyContainer = false;
		}
	};
}

customElements.define('feed-stories', FeedStories);
