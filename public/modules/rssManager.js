const fetchStories = async () => {
	console.log('Fetching stories ...');

	const response = await fetch('stories');
	const txt = await response.json();

	console.log(response);
	console.log(txt);
};

export { fetchStories };
