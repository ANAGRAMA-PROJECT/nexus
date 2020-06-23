async function getData(url) {
	let data = await fetch(url);
	let json = await data.json();
	return json;
}
function createElement(repoData) {
	const ulList = document.createElement('ul');
	if (Array.isArray(repoData)) {
		repoData.forEach((repoItem) => {
			const listItem = document.createElement('li');
			const listItemTextNode = document.createTextNode(repoItem.name);
			listItem.appendChild(listItemTextNode);
			ulList.appendChild(listItem);
		});
		document.querySelector('#main_content_hackers').appendChild(ulList);
	} else {
		return;
	}
}

function createProfilePicture(profileData) {
	if (profileData.avatar_url && profileData.name) {
		const heading = document.createElement('h1');
		const headingText = document.createTextNode(
			`GitHub Profile: ${profileData.name}`
		);
		heading.appendChild(headingText);
		document.querySelector('#main_content_hackers').appendChild(heading);

		let image = document.createElement('img');
		image.src = profileData.avatar_url;
		image.width = 200;
		document.querySelector('#main_content_hackers').appendChild(image);
	} else {
		return;
	}
}
getData('https://api.github.com/users/lSentenced').then((data) => {
	//console.log('data',data);
	createProfilePicture(data);
});
getData('https://api.github.com/users/lSentenced/repos').then((data) => {
	createElement(data);
});
