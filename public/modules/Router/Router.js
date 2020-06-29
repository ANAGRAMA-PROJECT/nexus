export class Router {

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
}
