
let pageState = {
    sectionList : ['Inicio', 'Noticias', 'Proyectos', 'Contacto', 'Hackers'],
    mainTitle: 'Colectivo Anagrama',
    defaultSection:  'Inicio'
};

async function getHomeContent () {
    let response = await fetch ('./scripts/main-content.html');
    let txt =  response.text();

    console.log(txt);
    

    let html =  new DOMParser().parseFromString(txt, 'text/html');

    console.log(html);
    console.log(html.querySelector('#main_content__home'));

    return html.querySelector('template');
}

let domContentLoadedHandler = (event) => {
    let mainTitleElement = document.getElementsByClassName ('main_title')[0];
    let mainContentElement = document.getElementsByClassName ('main_content')[0];

    mainTitleElement.textContent = pageState.mainTitle;

    getHomeContent();

    // mainContentElement.appendChild (getHomeContent());
}


document.addEventListener ('DOMContentLoaded', domContentLoadedHandler); 
