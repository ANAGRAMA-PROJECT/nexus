class Router {
    static routes = new Map();

	static setRoute = (path, callback) => {
		const relativePath = `/main/${path}`;
		this.routes.set(relativePath, callback);

		window.history.pushState(
			{},
			path,
			window.location.origin + relativePath
		);

		window.onpopstate = this.popStateHandler;
	};

	static popStateHandler = (event) => {
        this.routes.get(window.location.pathname)();
    };
}

export { Router };
