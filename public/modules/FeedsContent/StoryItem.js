import { html, render } from 'https://unpkg.com/lit-html?module';

export class StoryItem extends HTMLElement {
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
		const template = html`
			<div class="story-item__badge">
				<div class="story-badge__form">
					<div class="story-form__icon fa fa-newspaper-o fa-3x"></div>
				</div>
			</div>
			<div class="story-item__detail" @click=${this.handleStoryItemClick}>
				<div class="story-detail__title">${this.story.title[0]}</div>
				<a class="story-detail__link" href=${this.story.link[0]} >${this.story.link[0]}</a> 
				<div class="story-detail__meta">
					<span class="story-meta__author"
						>${this.story['dc:creator'][0]}
					</span>
					&middot;
					<span class="story-meta__date"
						>${this.formatDate(this.story.pubDate[0])}</span
					>
				</div>
				<div class="story-detail__description">
					${this.formatDescription(this.story.description[0])}
				</div>
			</div>

			<story-content id="story-content"> </story-content>
		`;
		render(template, this);
	}

	formatDescription = (descriptionString) => {
		const descriptionElement = document.createElement('html');
		descriptionElement.innerHTML = descriptionString;
		const storyDescription = descriptionElement.innerText;

		return storyDescription;
	};

	formatDate = (dateString) => {
		const originalDate = new Date(dateString);
		const storyDate = originalDate.toLocaleDateString();
		return storyDate;
	};

	handleStoryItemClick = (event) => {
		const classList = event.target.classList;

		if (
			classList.contains('story-item__badge') ||
			classList.contains('story-detail__title') ||
			classList.contains('story-badge__form') ||
			classList.contains('story-form__icon')
		) {
			const storySelectEvent = new CustomEvent('story-select', {
				bubbles: true
			});

			this.dispatchEvent(storySelectEvent);
		}

		event.stopPropagation();
	};
}

customElements.define('story-item', StoryItem);
