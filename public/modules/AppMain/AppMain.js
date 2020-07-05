import { html, render } from 'https://unpkg.com/lit-html?module';
import '../HomeContent/HomeContent.js';
import '../FeedsContent/FeedsContent.js';
import '../ContactContent/ContactContent.js';
import '../ProjectsContent/ProjectsContent.js';
import '../MainHeader/MainHeader.js';
import '../HackersContent/HackersContent.js';
import { Router } from '../Router/Router.js';
import { styles } from './AppMainStyles.js';

export class AppMain extends HTMLElement {
	pathString;

	get pathName() {
		return this.pathString;
	}

	set pathName(string) {
		this.pathString = string;
		Router.handleRoute(this, this.pathString);
	}

	connectedCallback() {
		this.renderComponent();
	}

	renderComponent() {
		const template = html`
			${styles}
			<div id="main" class="container__vertical">
				<main-header
					id="main-header"
					@item-select=${this.handleItemSelect}
				>
				</main-header>
				<section id="main-container">
					<div id="main-container__sidebar"></div>
					<div id="main-container__content">
						<home-content
							id="main-content__home"
							path="home"
						></home-content>
						<feeds-content
							id="main-content__feeds"
							path="feeds"
						></feeds-content>
						<projects-content
							id="main-content__projects"
							path="projects"
						></projects-content>
						<contact-content
							id="main-content__contact"
							path="contact"
						></contact-content>
						<hackers-content
							id="main-content__hackers"
							path="hackers"
						></hackers-content>
					</div>
					<div id="main-container__leftover"></div>
				</section>
			</div>
		`;
		render(template, this);
	}

	handleItemSelect = (event) => {
		const pathLevel = event.detail.sectionName;
		Router.replaceLastLevel(pathLevel);
	};
}

customElements.define('app-main', AppMain);
