export class Router {
	static pathPosition;

	static init = () => {
		this.pathPosition = 0;
	};

	static setRoute = (path, state) => {
		const relativePath = `/app/${path}`;

		window.history.pushState(
			state,
			path,
			window.location.origin + relativePath
		);

		window.onpopstate = this.popStateHandler;
	};

	static popStateHandler = (event) => {
		console.log(window.location.pathname);
	};

	static validatePath = (path) => {
		const validPathPattern = /\/\s|\/app\/.*/;
		const isValid = validPathPattern.test(path);
		return isValid;
	};

	static getOriginalLocation = () => {
		return window.__originalLocation;
	};

	static getCurrentPath = () => {};
}
