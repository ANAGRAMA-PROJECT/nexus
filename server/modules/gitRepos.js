const axios = require('axios');
const xml2js = require('xml2js');
const { response } = require('express');

const gitConfig = {
	urlRepos: [
        'https://api.github.com/orgs/ANAGRAMA-PROJECT/repos'
	]

};


const fetchProjectRepos = (req, res) => {
    const projectReposPromises =  gitConfig.urlRepos.map((url) => {
        const promise = axios.get(url);
        return promise;
    });

    Promise.all(projectReposPromises).then ((responses) => {
        console.log(typeof responses);
        console.log(responses[0].data);
        res.send(responses[0].data);
    })

}

exports.fetchProjectRepos = fetchProjectRepos;