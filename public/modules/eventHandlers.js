
const homeClickHandler = (event) => {
	hideCurrentContext();
	showHomeContext();
};

const newsClickHandler = (event) => {
	hideCurrentContext();
	showFeedsContext();
};

const projectClickHandler = (event) => {
	hideCurrentContext();
	showProjectsContext();
};

const hackerClickHandler = (event) => {
	hideCurrentContext();
	showHackerContext();
};

const contactClickHandler = (event) => {
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

const showContactContent = () => {
	const contactContent = document.querySelector('#main-content__contact');
	contactContent.hidden = false;
};

const showContactContext = () => {
	showContactContent();
	showContactSidebar();
};

const showContactSidebar = () => {
	const contactContent = document.querySelector('#sidebar_contact_content');
	contactContent.hidden = false;
}

const hideChildren = (parentNodeSelector) => {
	const parentNode = document.querySelector(parentNodeSelector);

	for (const child of parentNode.children) {
		child.hidden = true;
	}
};

export {homeClickHandler, newsClickHandler, projectClickHandler, hackerClickHandler, contactClickHandler};
