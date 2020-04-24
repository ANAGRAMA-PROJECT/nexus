import * as templateManager from './templateManager.js';

let loadNews = async (parentNode) => {
	let newsContent = await templateManager.fetchHtmlTemplate(
        'templates/newsContent.html',
        '#main_content__news'
    );

    parentNode.appendChild(newsContent);

    newsContent.hidden = true;
};

let loadMainContent = () => {
    let mainContent = document.querySelector ('#main_content');
	loadNews(mainContent);
}

let loadSite = () => {
    loadMainContent();
};


export {loadSite}; 
