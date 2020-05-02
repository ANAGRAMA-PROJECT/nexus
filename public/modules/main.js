import * as templateManager from './templateManager.js';
import * as contentManager from './contentManager.js';

console.debug('Loading page... ');

let pageState = {
	sectionList: ['Inicio', 'Noticias', 'Proyectos', 'Contacto', 'Hackers'],
	mainTitle: 'Colectivo Anagrama',
	defaultSection: 'Inicio'
};

let setHomeContent = async () => {
	let mainContent = document.querySelector('#main_content');
	let homeContent = null;

	homeContent = await templateManager.fetchHtmlTemplate(
		'templates/homeContent.html',
		'#main_content__home'
	);

	mainContent.appendChild(homeContent);
};

let setTitle = () => {
	let mainTitle = document.querySelector('#main_title');
	mainTitle.textContent = pageState.mainTitle;
};

let hideChildren = (parentNodeSelector) => {
	let parentNode = document.querySelector(parentNodeSelector);

	for (let child of parentNode.children) {
		child.hidden = true;
	}
};

let hideCurrentContext = () => {
	let homeContentSelector = '#main_content';
	let sideBarSelector = '#content_container__sidebar';

	hideChildren(homeContentSelector);
	hideChildren(sideBarSelector);
};

let homeClickHandler = (event) => {
	hideCurrentContext();
	showHomeContext();
};

let showHomeContext = () => {
	showHomeContent();
	showHomeSidebar();
};

let showHomeContent = () => {
	let homeContent = document.querySelector('#main_content__home');
	homeContent.hidden = false;
};

let newsClickHandler = (event) => {
	hideCurrentContext();
	showNewsContext();
};

let showNewsContent = () => {
	let newsContent = document.querySelector('#main_content__news');
	newsContent.hidden = false;
};

let showNewsContext = () => {
	showNewsContent();
	showNewsBarside();
};

let showNewsBarside = () => {
	let newsContent = document.querySelector('#sidebar_notice_content');
	newsContent.hidden = false;
};

let proyectClickHandler = (event) => {
	hideCurrentContext();
	showProjectContext();
};

let showProjectContent = () => {
	let proyectContent = document.querySelector('#main_content__projects');
	proyectContent.hidden = false;
};

let showProjectContext = () => {
	showProjectContent();
	showProjectBarside();
};
let showProjectBarside = () => {
	let newsContent = document.querySelector('#sidebar_proyects_content');
	newsContent.hidden = false;
};

let domContentLoadedHandler = async (event) => {
	setTitle();
	await setHomeContent();
	contentManager.loadSite();

	document
		.querySelector('#navigation-bar_home')
		.addEventListener('click', homeClickHandler);

	document
		.querySelector('#navigation-bar_news')
		.addEventListener('click', newsClickHandler);
};

document.addEventListener('DOMContentLoaded', domContentLoadedHandler);
