import { html, render } from 'https://unpkg.com/lit-html?module';

export class StoryContainer extends HTMLElement {
	storyData = {};

	get story() {
		return this.storyData;
	}

	set story(data) {
		this.storyData = data;
		this.renderComponent();
	}

	connectedCallback() {
		this.renderComponent();
	}

	renderComponent() {
		const template = html`${this.formatHtml(this.story['content:encoded'])}`;
		render(template, this);
	}

	formatHtml = (string) => {
		const htmlElement = document.createElement('html');
		htmlElement.innerHTML = string;
		return htmlElement;
	};
}

customElements.define('story-container', StoryContainer);
