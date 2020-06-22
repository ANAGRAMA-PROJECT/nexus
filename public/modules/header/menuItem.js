import { html } from 'https://unpkg.com/lit-html?module';

export class MenuItem {
	static render = (id, value, name, context) =>
		html`<div id=${id} data-name=${name} data-context=${context}>
			${value}
		</div>`;
}
