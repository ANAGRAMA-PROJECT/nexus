import { html, render } from 'https://unpkg.com/lit-html?module';

export class HackersContent extends HTMLElement {
	connectedCallback() {
		const template = html`<div>Hackers</div> `;
		render(template, this);
	}
}

customElements.define('hackers-content', HackersContent);
