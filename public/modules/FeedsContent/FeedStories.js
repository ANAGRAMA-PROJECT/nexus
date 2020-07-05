import { html, render } from 'https://unpkg.com/lit-html?module';
import './StoryContainer.js';
import './StoryItem.js';

export class FeedStories extends HTMLElement {
	storiesData = [];
	currentStoryIndex = -1;
	componentsHidden = {
		storyList: false,
		storyContainer: true
	};
	selectedStory = {};

	get stories() {
		return this.storiesData;
	}

	set stories(data) {
		this.storiesData = data;
		this.renderComponent();
	}

	get selectedStoryIndex() {
		return this.currentStoryIndex;
	}

	set selectedStoryIndex(index) {
		this.currentStoryIndex = index;
		this.selectedStory = this.stories[index]['content:encoded'];
		this.changevisibility();
		this.renderComponent();
	}

	connectedCallback() {
		this.renderComponent();
	}

	renderComponent() {
		const storiesComponents = this.stories.map((story, index) => {
			return html`<story-item
				index=${index}
				class="story-item"
				.story=${story}
				@story-select=${this.handleStorySelect}
			></story-item>`;
		});

		const template = html`
			<div id="stories__list" ?hidden=${this.componentsHidden.storyList}>
				${storiesComponents}
			</div>
			<story-container
				id="stories__container"
				.story=${this.selectedStory}
				?hidden=${this.componentsHidden.storyContainer}
			>
			</story-container>
		`;

		render(template, this);
	}

	handleStorySelect = (event) => {
		this.selectedStoryIndex = event.target.getAttribute('index');
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
