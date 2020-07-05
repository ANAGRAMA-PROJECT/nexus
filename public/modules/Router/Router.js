export class Router {
	static initialPattern = /\/\s|\/app\/.*/;
	static rootComponent = {};
	static referenceString = '';

	static get currentHref() {
		return this.referenceString;
	}

	static set currentHref(string) {
		this.referenceString = string;
		if (this.referenceString != window.location.href) {
			window.history.pushState({}, '', `${this.referenceString}`);
		} else {
			window.history.replaceState({}, '', `${this.referenceString}`);
		}
		this.handleRoute(this.rootComponent, window.location.pathname);
	}

	static init = (rootComponent, location) => {
		this.rootComponent = rootComponent;
		this.currentHref = location.href;
	};

	static handleRoute = (component, pathname) => {
		let subPath = null;

		if (!component.hidden && pathname != '/') {
			const pathLevels = this.getPathLevels(pathname);
			const currentLevel = pathLevels[0];

			const targetComponent = component.querySelector(
				`[path="${currentLevel}"]`
			);

			console.log(targetComponent);
			console.log(pathname);

			if (targetComponent) {
				const targetSiblings = targetComponent
					? targetComponent.parentElement.children
					: [];

				targetComponent.hidden = false;

				for (const node of targetSiblings) {
					if (node.getAttribute('path') != currentLevel) {
						node.hidden = true;
					}
				}
			} else {
				throw 'The path level was not found';
			}

			subPath = pathname.replace(/\/[A-Z]*/i, '');
			console.log('subPath', subPath);
			targetComponent.pathName = subPath;

			window.onpopstate = this.handlePopState;
		}
	};

	static replaceLastLevel = (pathLevel) => {
		const currentPathName = window.location.pathname;
		const currentPathLevels = this.getPathLevels(currentPathName);
		const lastLevel = currentPathLevels[currentPathLevels.length - 1];

		console.log(lastLevel);

		const newPathName = currentPathName.replace(
			new RegExp(`${lastLevel}/$`, 'i'),
			`${pathLevel}/`
		);

		const newHref = `${window.location.origin}${newPathName}`;

		this.currentHref = newHref;
	};

	static appendPathLevel = (pathLevel) => {
		const currentPathName = window.location.pathname;
		const newPathName = `${currentPathName}${pathLevel}/`;
		const newHref = `${window.location.origin}${newPathName}`;

		this.currentHref = newHref;
	};

	static handlePopState = (event) => {
		Router.handleRoute(document.body, window.location.pathname);
	};

	static getPathLevels = (pathname) => {
		const splittedLevels = pathname.split('/');
		return splittedLevels.filter((level) => level != '');
	};

	static getCurrentPathLevel = () => {
		return this.urlLevels[this.pathPosition++];
	};
}
