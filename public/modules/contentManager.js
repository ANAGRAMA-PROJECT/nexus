import * as templateManager from './templateManager.js';

const loadNews = async (parentNode) => {
	const newsContent = await templateManager.fetchHtmlTemplate(
		'templates/newsContent.html',
		'#main_content__news'
	);

	parentNode.appendChild(newsContent);

	newsContent.hidden = true;
};

const loadProjects = async (parentNode) => {
	const projectsContent = await templateManager.fetchHtmlTemplate(
		'templates/projectsContent.html',
		'#main_content__projects'
	);

	parentNode.appendChild(projectsContent);

	projectsContent.hidden = true;
};

// cargar contenido sidebar
const loadSidebarContent = async () => {
	const sidebarContent = document.querySelector('#content_container__sidebar');
	const homeSidebar = await templateManager.fetchHtmlTemplate(
		'templates/sidebarContents.html',
		'#allbarside'
	);

	console.log(homeSidebar);
	console.log(homeSidebar.children);

	const array = homeSidebar.children;

	for (const node of array) {
		const clone = node.cloneNode(true);
		clone.hidden = true;
		sidebarContent.appendChild(clone);
	}
};

const loadMainContent = () => {
	const mainContent = document.querySelector('#main_content');
	loadNews(mainContent);
	loadProjects(mainContent);
};

const loadSite = () => {
	loadMainContent();
	loadSidebarContent();
};

export { loadSite };
