import * as templateManager from './templateManager.js';
import * as contactForm from './contactForm.js';
import * as github from './github.js';

const loadSite = () => {
	loadMainContent();
	loadSidebarContent();
};

const loadMainContent = () => {
	const mainContent = document.querySelector('#main_content');
	loadFeeds(mainContent);
	loadProjects(mainContent);
	loadContact(mainContent);
	loadHackers(mainContent);
};

// Cargar contenido de sidebar
const loadSidebarContent = async () => {
	const sidebarContent = document.querySelector(
		'#content_container__sidebar'
	);
	const homeSidebar = await templateManager.fetchTemplate(
		'templates/sidebarContents.html'
	);

	const array = homeSidebar.children;

	for (const node of array) {
		const clone = node.cloneNode(true);
		clone.hidden = true;
		sidebarContent.appendChild(clone);
	}
};

// Cargar contenido de main
const loadFeeds = async (parentNode) => {
	console.log(window.location.origin);
	const newsContent = await templateManager.fetchTemplate(
		'templates/newsContent.html'
	);
	hideFragmentContent(newsContent);
	parentNode.appendChild(newsContent);
};

// Cargar contenido de projects
const loadProjects = async (parentNode) => {
	const projectsContent = await templateManager.fetchTemplate(
		'templates/projectsContent.html'
	);
	hideFragmentContent(projectsContent);
	parentNode.appendChild(projectsContent);
};

const loadContact = async (parentNode) => {
	const contactContent = await templateManager.fetchTemplate(
		'templates/contactContent.html'
	);
	hideFragmentContent(contactContent);
	parentNode.appendChild(contactContent);
	document
		.querySelector('#contact-form')
		.addEventListener('submit', contactForm.validateForm);
};

const hideFragmentContent = (domFragment) => {
	domFragment.firstElementChild.hidden = true;
};

const loadHackers = async (parentNode) => {
	const hackersContent = await templateManager.fetchTemplate(
		'templates/hackersContent.html'
	);
	hideFragmentContent(hackersContent);
	parentNode.appendChild(hackersContent);
	const btnRepos = document.getElementById('btnRepos');
	const divResult = document.getElementById('divResult');
	btnRepos.addEventListener('click', github.getRepos(divResult));
};

export { loadSite };
