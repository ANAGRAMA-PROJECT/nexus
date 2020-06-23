import { html, render } from 'https://unpkg.com/lit-html?module';

export class ProjectsContent extends HTMLElement {
	connectedCallback() {
		const template = html` <div>Projects</div> `;

		render(template, this);
	}
}

customElements.define('projects-content', ProjectsContent);
