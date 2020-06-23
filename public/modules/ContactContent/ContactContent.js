import { html, render } from 'https://unpkg.com/lit-html?module';

export class ContactContent extends HTMLElement {
	connectedCallback() {
		const template = html`<div>Contact</div>`;

		render(template, this);
	}
}

customElements.define('contact-content', ContactContent);
