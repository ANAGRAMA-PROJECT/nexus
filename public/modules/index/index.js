import { html, render } from 'https://unpkg.com/lit-html?module';
import { Home } from '../home/home.js';
import { Header } from '../header/header.js';
import { Projects } from '../projects/projects.js';
import { Feeds } from '../feeds/feeds.js';
import { Contact } from '../contact/contact.js';

export class Main {
	static currentContext = {
		name: 'home',
		elementId: 'main-content__home'
	};

	static contextsList = {
		home: {
			name: 'home',
			elementId: 'main-content__home'
		},
		projects: {
			name: 'projects',
			elementId: 'main-content__projects'
		},
		feeds: {
			name: 'feeds',
			elementId: 'main-content__feeds'
		},
		contact: {
			name: 'contact',
			elementId: 'main-content__contact'
		}
	};

	static render = () => html`
		<div id="main" class="container__vertical" @click=${this.handleClick}>
			${Header.render(this.contextsList['projects'])};

			<section id="main-container">
				<div id="main-container__sidebar"></div>
				<div id="main-container__content">
					${Home.render(this.contextsList['home'])}
					${Projects.render(this.contextsList['projects'])}
					${Feeds.render(this.contextsList['feeds'])}
					${Contact.render(this.contextsList['contact'])}
				</div>
				<div id="main-container__leftover"></div>
			</section>
		</div>
	`;

	static handleClick = (event) => {
		const contextName = event.target.getAttribute('data-name');
		console.log(contextName);
		if (contextName) {
			this.hideCurrentContext();
			this.currentContext = this.contextsList[contextName];

			const elementId = this.contextsList[contextName].elementId;
			const element = document.querySelector(`#${elementId}`);
			element.hidden = false;
		}
	};

	static hideCurrentContext = () => {
		const element = document.querySelector(
			`#${this.currentContext.elementId}`
		);
		element.hidden = true;
	};
}

render(Main.render(), document.body);
