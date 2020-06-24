import { html, render } from 'https://unpkg.com/lit-html?module';
import '../HomeContent/HomeContent.js';
import '../FeedsContent/FeedsContent.js';
import '../ContactContent/ContactContent.js';
import '../ProjectsContent/ProjectsContent.js';
import '../MainHeader/MainHeader.js';
import '../HackersContent/HackersContent.js';
import { styles } from './AppMainStyles.js';

export class AppMain extends HTMLElement {
	currentSection = 'home';

	connectedCallback() {
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
							section="home"
						></home-content>
						<feeds-content
							id="main-content__feeds"
							section="feeds"
							hidden
						></feeds-content>
						<projects-content
							id="main-content__projects"
							section="projects"
							hidden
						></projects-content>
						<contact-content
							id="main-content__contact"
							section="contact"
							hidden
						></contact-content>
						<hackers-content
							id="main-content__hackers"
							section="hackers"
							hidden
						></hackers-content>
					</div>
					<div id="main-container__leftover"></div>
				</section>
			</div>
		`;

		render(template, this);
	}

	handleItemSelect = (event) => {
		this.hideCurrentContext();

		const sectionName = event.detail.sectionName;

		const section = document.querySelector(
			`#main-container__content > [section=${sectionName}]`
		);

		console.log(section);

		section.hidden = false;

		this.currentSection = sectionName;
	};

	hideCurrentContext = () => {
		const currentSection = this.currentSection;

		const section = document.querySelector(
			`#main-container__content > [section=${currentSection}]`
		);

		section.hidden = true;
	};
}

customElements.define('app-main', AppMain);
