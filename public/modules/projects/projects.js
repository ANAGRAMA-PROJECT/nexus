import { html } from 'https://unpkg.com/lit-html?module';

export class Projects {
	static render = (context) => html`
		<div id=${context.elementId} hidden>
			Projects
		</div>
	`;
}
