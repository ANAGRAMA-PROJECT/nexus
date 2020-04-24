let htmlNodes = new Map();

let fetchHtmlTemplate = (path, querySelector) => {
    let promise = new Promise (async (resolve, reject) =>  {
        try {
            let mimeType = 'text/html';

            let response = await fetch(path);
            let txt = await response.text();

            let html = new DOMParser().parseFromString(txt, mimeType);
            let htmlNode = html.querySelector(querySelector)

            resolve (htmlNode);

        } catch (e) {
            reject (e);
        }
    });

    return promise;
};

let getHtmlNode = (nodeName) => {
    return htmlNodes.set (nodeName);
};

let setHtmlNode = (nodeName, domNode) => {
    htmlNodes.set (nodeName, domNode);
};

export {fetchHtmlTemplate, getHtmlNode, setHtmlNode};
