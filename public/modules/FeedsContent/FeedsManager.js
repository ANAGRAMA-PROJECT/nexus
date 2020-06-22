export class FeedsManager {
	static fetchStories = async () => {
        console.log('Fetching stories ...');

		const response = await fetch('stories');
        const feedChannels = await response.json();

        console.log(feedChannels);
        
        return feedChannels; 
	};
}
