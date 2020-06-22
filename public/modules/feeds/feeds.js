import { html } from 'https://unpkg.com/lit-html?module';

export class Feeds {
	static render = (context) =>
		html`<div id=${context.elementId} hidden>Feeds</div> `;
}
