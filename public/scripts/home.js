console.debug('Loading page... ');

let pageState = {
	sectionList: ['Inicio', 'Noticias', 'Proyectos', 'Contacto', 'Hackers'],
	mainTitle: 'Colectivo Anagrama',
	defaultSection: 'Inicio'
};

getHomeContent = async () => {
	let response = await fetch('templates/home-content.html');
	let txt = await response.text();

	let html = new DOMParser().parseFromString(txt, 'text/html');

	return html.querySelector('#main_content__home');
};

domContentLoadedHandler = async (event) => {
	let mainTitleElement = document.getElementsByClassName('main_title')[0];
	let mainContentElement = document.getElementsByClassName('main_content')[0];

	mainTitleElement.textContent = pageState.mainTitle;

	mainContentElement.appendChild(await getHomeContent());
};

document.addEventListener('DOMContentLoaded', domContentLoadedHandler);
