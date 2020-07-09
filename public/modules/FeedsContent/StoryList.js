import { html, render } from 'https://unpkg.com/lit-html?module';
import './StoryItem.js';

export class StoryList extends HTMLElement {
	storiesData = [];

	get stories() {
		return this.storiesData;
	}

	set stories(data) {
		console.log(data);
		this.storiesData = data;
		this.renderComponent();
	}

	connectedCallback() {
		this.renderComponent();
	}

	renderComponent() {
		const storyComponents = this.stories.map((story, index) => {
			return html`<story-item
				index=${index}
				class="story-item"
				.story=${story}
			></story-item>`;
		});

		const template = html`<div>${storyComponents}</div>`;
		render(template, this);
	}
}

customElements.define('story-list', StoryList);
