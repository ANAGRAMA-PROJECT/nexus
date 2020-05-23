import * as templateManager from './templateManager.js';

const loadSite = () => {
	loadMainContent();
	loadSidebarContent();
};

const loadMainContent = () => {
	const mainContent = document.querySelector('#main_content');
	loadFeeds(mainContent);
	loadProjects(mainContent);
	loadContact(mainContent);
};

// Cargar contenido de sidebar
const loadSidebarContent = async () => {
	const sidebarContent = document.querySelector('#content_container__sidebar');
	const homeSidebar = await templateManager.fetchTemplate('templates/sidebarContents.html');

	const array = homeSidebar.children;

	for (const node of array) {
		const clone = node.cloneNode(true);
		clone.hidden = true;
		sidebarContent.appendChild(clone);
	}

};

// Cargar contenido de main
const loadFeeds = async (parentNode) => {
	const newsContent = await templateManager.fetchTemplate('templates/newsContent.html');
	hideFragmentContent (newsContent);
	parentNode.appendChild(newsContent);
};

// Cargar contenido de projects
const loadProjects = async (parentNode) => {
	const projectsContent = await templateManager.fetchTemplate('templates/projectsContent.html');
	hideFragmentContent (projectsContent);
	parentNode.appendChild(projectsContent);
}

const loadContact = async (parentNode) => {
	const contactContent = await templateManager.fetchTemplate('templates/contactContent.html');
	hideFragmentContent (contactContent);
	parentNode.appendChild(contactContent);
}

const hideFragmentContent = (domFragment) => {
	domFragment.firstElementChild.hidden = true;
}

export { loadSite };
