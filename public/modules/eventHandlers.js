import { Router } from './router.js';

const attachMainListeners = () => {
	Router.setRoute('home', setHomeView);

	document
		.querySelector('#navigation-bar_home')
		.addEventListener('click', homeClickHandler);

	document
		.querySelector('#navigation-bar_news')
		.addEventListener('click', feedsClickHandler);

	document
		.querySelector('#navigation-bar_projects')
		.addEventListener('click', projectClickHandler);

	document
		.querySelector('#navigation-bar_hackers')
		.addEventListener('click', hackersClickHandler);
	document
		.querySelector('#navigation-bar_contact')
		.addEventListener('click', contactClickHandler);
};

const homeClickHandler = (event) => {
	Router.setRoute('home', setHomeView);
	setHomeView();
};

const setHomeView = () => {
	hideCurrentContext();
	showHomeContext();
};

const feedsClickHandler = (event) => {
	setFeedsView();
	Router.setRoute('feeds', setFeedsView);
};

const setFeedsView = (event) => {
	hideCurrentContext();
	showFeedsContext();
};

const projectClickHandler = (event) => {
	setProjectsView();
	Router.setRoute('projects', setProjectsView);
};

const setProjectsView = (event) => {
	hideCurrentContext();
	showProjectsContext();
};

const contactClickHandler = (event) => {
	setContactView();
	Router.setRoute('contact',setContactView);
};

const setContactView = (event) => {
	hideCurrentContext();
	showContactContext();
};

const hideCurrentContext = () => {
	const homeContentSelector = '#main_content';
	const sideBarSelector = '#content_container__sidebar';

	hideChildren(homeContentSelector);
	hideChildren(sideBarSelector);
};

const showHomeContext = () => {
	showHomeContent();
	showHomeSidebar();
};

const showHomeSidebar = () => {
	const sidebarHomeContent = document.querySelector('#sidebar_home__content');
	sidebarHomeContent.hidden = false;
};

const showHomeContent = () => {
	const homeContent = document.querySelector('#main_content__home');
	homeContent.hidden = false;
};

const showFeedsContent = () => {
	const newsContent = document.querySelector('#main_content__news');
	newsContent.hidden = false;
};

const showFeedsContext = () => {
	showFeedsContent();
	showFeedsSidebar();
};

const showFeedsSidebar = () => {
	const newsContent = document.querySelector('#sidebar_notice_content');
	newsContent.hidden = false;
};

const showProjectsContent = () => {
	const newsContent = document.querySelector('#main_content__projects');
	newsContent.hidden = false;
};

const showProjectsContext = () => {
	showProjectsContent();
	showProjectsSidebar();
};

const showProjectsSidebar = () => {
	const newsContent = document.querySelector('#sidebar_projects_content');
	newsContent.hidden = false;
};

const hackersClickHandler = (event) => {
	setHackersView();
	Router.setRoute('hackers', setHackersView);
};

const setHackersView = () => {
	hideCurrentContext();
	showHackersContext();
}

const showHackersContext = () => {
	showHackersContent();
	showHackersSidebar();
};

const showHackersContent = () => {
	const hackersContent = document.querySelector('#main_content_hackers');
	// hackersContent.hidden = false;
};

const showHackersSidebar = () => {
	const newsContent = document.querySelector('#sidebar_hacker_content');
	newsContent.hidden = false;
};

const showContactContext = () => {
	showContactContent();
	showContactSidebar();
};

const showContactContent = () => {
	const contactContent = document.querySelector('#main-content__contact');
	contactContent.hidden = false;
};

const showContactSidebar = () => {
	const contactContent = document.querySelector('#sidebar_contact_content');
	// contactContent.hidden = false;
};

const hideChildren = (parentNodeSelector) => {
	const parentNode = document.querySelector(parentNodeSelector);

	for (const child of parentNode.children) {
		child.hidden = true;
	}
};

export { attachMainListeners };
