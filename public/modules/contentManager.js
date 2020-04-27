import * as templateManager from './templateManager.js';

let loadNews = async (parentNode) => {
	let newsContent = await templateManager.fetchHtmlTemplate(
        'templates/newsContent.html',
        '#main_content__news'
    );

    parentNode.appendChild(newsContent);

    newsContent.hidden = true;
};

let loadProjects = async (parentNode) => {
	let projectsContent = await templateManager.fetchHtmlTemplate(
        'templates/projectsContent.html',
        '#main_content__projects'
    );

    parentNode.appendChild(projectsContent);

    projectsContent.hidden = true;
};

let loadMainContent = () => {
    let mainContent = document.querySelector ('#main_content');
	loadNews(mainContent);
	loadProjects(mainContent);
}

let loadSite = () => {
    loadMainContent();
};


export {loadSite}; 
