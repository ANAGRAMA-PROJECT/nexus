import { html, render } from 'https://unpkg.com/lit-html?module';
import '../HomeContent/HomeContent.js';
import '../FeedsContent/FeedsContent.js';
import '../ContactContent/ContactContent.js';
import '../ProjectsContent/ProjectsContent.js';
import '../MainHeader/MainHeader.js';
import '../HackersContent/HackersContent.js';
import { styles } from './AppMainStyles.js';
import { Router } from '../Router/Router.js';

export class AppMain extends HTMLElement {
	stateData = {
		currentSection: 'home',
		sectionsHidden: new Map([
			['home', false],
			['feeds', true],
			['projects', true],
			['contact', true],
			['hackers', true]
		])
	};

	get state() {
		return this.stateData;
	}

	set state(data) {
		this.stateData = data;
		this.renderComponent();
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
							?hidden=${this.state.sectionsHidden.get('home')}
						></home-content>
						<feeds-content
							id="main-content__feeds"
							path="feeds"
							?hidden=${this.state.sectionsHidden.get('feeds')}
						></feeds-content>
						<projects-content
							id="main-content__projects"
							path="projects"
							?hidden=${this.state.sectionsHidden.get('projects')}
						></projects-content>
						<contact-content
							id="main-content__contact"
							path="contact"
							?hidden=${this.state.sectionsHidden.get('contact')}
						></contact-content>
						<hackers-content
							id="main-content__hackers"
							path="hackers"
							?hidden=${this.state.sectionsHidden.get('hackers')}
						></hackers-content>
					</div>
					<div id="main-container__leftover"></div>
				</section>
			</div>
		`;
		render(template, this);
		Router.setRoute(this.state.currentSection, this.state);
	}

	handleItemSelect = (event) => {
		const sectionName = event.detail.sectionName;
		this.changeSectionsVisibility(sectionName);
	};

	changeSectionsVisibility = (sectionName) => {
		const currentSections = this.state.sectionsHidden;
		const newSections = new Map();

		for (let [key, value] of currentSections) {
			if (key == sectionName) {
				newSections.set(key, false);
			} else {
				newSections.set(key, true);
			}
		}

		const newState = {
			currentSection: sectionName,
			sectionsHidden: newSections
		}

		this.state = newState;
	};

}

customElements.define('app-main', AppMain);
