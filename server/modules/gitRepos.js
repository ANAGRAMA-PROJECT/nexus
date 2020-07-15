const axios = require('axios');

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
        res.send(responses[0].data);
    })

}

exports.fetchProjectRepos = fetchProjectRepos;