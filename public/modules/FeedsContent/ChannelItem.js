import { html, render } from 'https://unpkg.com/lit-html?module';

export class ChannelItem extends HTMLElement {
	connectedCallback() {
		const template = html`<div
			class="feed-item"
			@click=${this.handleChannelSelection}
		>
			<div class="feed-item__badge">
				<div class="feed-badge__form">
					<div class="feed-badge__text">
						${this.getInitials(this.title)}
					</div>
				</div>
			</div>
			<div class="feed-item__detail">
				<div class="feed-title">${this.title}</div>
				<a class="feed-link" href=${this.getAttribute('link')}>
					${this.getAttribute('link')}
				</a>
				<div class="feed-description">
					${this.getAttribute('description')}
				</div>
			</div>
		</div>`;

		render(template, this);
	}

	handleChannelSelection = (event) => {
		const classList = event.target.classList;
		const channelSelectEvent = new CustomEvent('channel-select', {
			bubbles: true
		});

		if (
			classList.contains('fedd-item__badge') ||
			classList.contains('feed-title')
		) {
			this.dispatchEvent(channelSelectEvent);
		}
	};

	getInitials = (title) => {
		const splittedTitle = title.split(' ');
		let initials = '';

		for (let i = 0; i < 2; ++i) {
			initials += splittedTitle[i].charAt(0);
		}

		return initials;
	};
}

customElements.define('channel-item', ChannelItem);
