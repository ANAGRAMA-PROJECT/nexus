export class FeedsManager {
	static fetchStories = async () => {
		console.log('Fetching stories ...');

		console.log (window.location);
		
		const response = await fetch('/stories');
		const feedChannels = await response.json();

		return feedChannels;
	};
}
