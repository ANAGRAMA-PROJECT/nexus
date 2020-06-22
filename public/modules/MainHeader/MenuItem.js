import { html, render } from 'https://unpkg.com/lit-html?module';

export class MenuItem extends HTMLElement {
	connectedCallback() {
		const template =  html`<div> ${this.getAttribute('value')} </div>`;
		render(template, this);
	}
}

customElements.define('menu-item', MenuItem);
