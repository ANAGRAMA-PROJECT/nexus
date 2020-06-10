class Router {
	static routes = new Map();

	static setRoute = (path, callback) => {
		const relativePath = `/app/${path}`;
		this.routes.set(relativePath, callback);

		window.history.pushState(
			{},
			path,
			window.location.origin + relativePath
		);

		window.onpopstate = this.popStateHandler;
	};

	static popStateHandler = (event) => {
		console.log(window.location.pathname);
		console.log(this.routes.get(window.location.pathname));
		this.routes.get(window.location.pathname)();
	};
}

export { Router };
