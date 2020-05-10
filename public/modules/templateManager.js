const htmlNodes = new Map();

const fetchTemplate = (path) => {
    const promise = new Promise (async (resolve, reject) =>  {
        try {
            const mimeType = 'text/html';

            const response = await fetch(path);
            const txt = await response.text();

            const html = new DOMParser().parseFromString (txt, mimeType);
            const template = html.querySelector ('template');
            const node = html.importNode (template.content, true);

            resolve (node);

        } catch (e) {
            reject (e);
        }
    });

    return promise;
}

const fetchHtmlTemplate = (path, querySelector) => {
    let promise = new Promise (async (resolve, reject) =>  {
        try {
            let mimeType = 'text/html';

            let response = await fetch(path);
            let txt = await response.text();

            let html = new DOMParser().parseFromString(txt, mimeType);
            let htmlNode = html.querySelector(querySelector);

            resolve (htmlNode);

        } catch (e) {
            reject (e);
        }
    });

    return promise;
};

const getHtmlNode = (nodeName) => {
    return htmlNodes.set (nodeName);
};

const setHtmlNode = (nodeName, domNode) => {
    htmlNodes.set (nodeName, domNode);
};

export {fetchHtmlTemplate, getHtmlNode, setHtmlNode, fetchTemplate };
