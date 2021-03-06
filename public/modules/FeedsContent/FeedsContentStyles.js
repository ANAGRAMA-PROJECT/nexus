import { html } from 'https://unpkg.com/lit-html?module';

export const styles = html`<style>
	.feed-item,
	.story-item {
		display: flex;
		flex-flow: row nowrap;
		padding-bottom: 1rem;
		height: 8rem;
	}

	.feed-item__badge,
	.story-item__badge {
		display: flex;
		flex: 1;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}

	.feed-badge__form,
	.story-badge__form {
		display: flex;
		justify-content: center;
		align-items: center;
		color: var(--main-sidebar-color-pink);
		border-radius: 50%;
		min-height: 5rem;
		min-width: 5rem;
		font-family: var(--title-font-family), cursive;
	}

	.feed-badge__form {
		background-color: #f8f5e0;
	}

	.feed-item__detail,
	.story-item__detail {
		flex: 4;
		padding-top: 0.5rem;
		min-width: 0;
	}

	.feed-link:hover,
	.story-detail__link:hover,
	.feed-title:hover,
	.story-detail__title:hover,
	.fedd-item__badge:hover + .feed-item__detail > .feed-title,
	.story-item__badge:hover + .story-item__detail > .story-detail__title {
		text-decoration: underline;
	}

	.feed-title,
	.story-detail__title {
		color: var(--main-sidebar-color-pink);
		cursor: pointer;
	}

	.feed-link,
	.story-detail__link {
		color: var(--dark-blue);
		text-decoration: none;
		cursor: pointer;
		overflow: hidden;
		text-overflow: ellipsis;
		max-height: 1.2em;
	}

	.story-detail__description {
		text-overflow: ellipsis;
		overflow: hidden;
		padding-right: 1rem;
		white-space: nowrap;
	}

	.story-meta__author,
	.story-meta__date {
		color: #77878b;
	}

	#story-content-view a {
		color: var(--dark-blue);
		text-decoration: none;
		cursor: pointer;
		overflow: hidden;
		text-overflow: ellipsis;
		max-height: 1.2em;
	}
</style> `;
