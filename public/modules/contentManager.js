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

// cargar contenido sidebar
let loadSidebarContent = async() =>{
	let sidebarContent = document.querySelector('#content_container__sidebar');
	let homeSidebar = null;
	homeSidebar = await templateManager.fetchHtmlTemplate(
		'templates/sidebarContents.html',
		'#allbarside'
    );

    console.log(homeSidebar);
    console.log(homeSidebar.children);

    let array = homeSidebar.children;

    for (let node of array) {
        let clone = node.cloneNode(true);
        clone.hidden = true;
        sidebarContent.appendChild(clone);
    } 

}


let loadMainContent = () => {
    let mainContent = document.querySelector ('#main_content');
	loadNews(mainContent);
    loadProjects(mainContent);
}


let loadSite = () => {
    loadMainContent();
   loadSidebarContent();

};


export {loadSite}; 
