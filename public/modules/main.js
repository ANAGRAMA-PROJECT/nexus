import * as templateManager from './templateManager.js';
import * as contentManager from './contentManager.js';

console.debug('Loading page... ');

const pageState = {
	sectionList: ['Inicio', 'Noticias', 'Proyectos', 'Contacto', 'Hackers'],
	mainTitle: 'Colectivo Anagrama',
	defaultSection: 'Inicio'
};

const setHomeContent = async () => {
	const mainContent = document.querySelector('#main_content');
	const homeContent = await templateManager.fetchTemplate('templates/homeContent.html');

	mainContent.appendChild(homeContent);
};

const setTitle = () => {
	const mainTitle = document.querySelector('#main_title');
	mainTitle.textContent = pageState.mainTitle;
};

const hideChildren = (parentNodeSelector) => {
	const parentNode = document.querySelector(parentNodeSelector);

	for (let child of parentNode.children) {
		child.hidden = true;
	}
};

const hideCurrentContext = () => {
	const homeContentSelector = '#main_content';
	const sideBarSelector = '#content_container__sidebar';

	hideChildren(homeContentSelector);
	hideChildren(sideBarSelector);
};

const homeClickHandler = (event) => {
	hideCurrentContext();
	showHomeContext();
};

const showHomeContext = () => {
	showHomeContent();
	showHomeSidebar();
};

const showHomeContent = () => {
	let homeContent = document.querySelector('#main_content__home');
	homeContent.hidden = false;
};

const newsClickHandler = (event) => {
	hideCurrentContext();
	showNewsContext();
};

const showNewsContent = () => {
	const newsContent = document.querySelector('#main_content__news');
	newsContent.hidden = false;
};

const showNewsContext = () => {
	showNewsContent();
	showNewsBarside();
};

const showNewsBarside = () => {
	const newsContent = document.querySelector('#sidebar_notice_content');
	newsContent.hidden = false;
};

const proyectClickHandler = (event) => {
	hideCurrentContext();
	showProjectContext();
};

const showProjectContent = () => {
	const proyectContent = document.querySelector('#main_content__projects');
	proyectContent.hidden = false;
};

const showProjectContext = () => {
	showProjectContent();
	showProjectBarside();
};

const showProjectBarside = () => {
	const newsContent = document.querySelector('#sidebar_proyects_content');
	newsContent.hidden = false;
};

const domContentLoadedHandler = async (event) => {
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
