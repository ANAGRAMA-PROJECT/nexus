
const homeClickHandler = (event) => {
	hideCurrentContext();
	showHomeContext();
};

const newsClickHandler = (event) => {
	hideCurrentContext();
	showNewsContext();
};

const projectClickHandler = (event) => {
	hideCurrentContext();
	showprojectContext();
};

const hackerClickHandler = (event) => {
	hideCurrentContext();
	showHackerContext();
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


const showprojectContent = () => {
	const newsContent = document.querySelector('#main_content__projects');
	newsContent.hidden = false;
};

const showprojectContext = () => {
	showprojectContent();
	showprojectBarside();
};

const showprojectBarside = () => {
	const newsContent = document.querySelector('#sidebar_projects_content');
	newsContent.hidden = false;
};


const showHackerContent = () => {
	const hackersContent = document.querySelector('#main_content_hackers');
	hackersContent.hidden = false;
};

const showHackerContext = () => {
	showHackerContent();
	showHackerBarside();
};

const showHackerBarside = () => {
	const newsContent = document.querySelector('#sidebar_hacker_content');
	newsContent.hidden = false;
};

const hideChildren = (parentNodeSelector) => {
	const parentNode = document.querySelector(parentNodeSelector);

	for (const child of parentNode.children) {
		child.hidden = true;
	}
};

export {homeClickHandler, newsClickHandler, projectClickHandler, hackerClickHandler };
