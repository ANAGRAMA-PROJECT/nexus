export class Router {
	static initialPattern = /\/\s|\/app\/.*/;
	static rootComponent = {};
	static currentHref = '';

	static get href() {
		return this.currentHref;
	}

	static set href(string) {
		this.currentHref = string;
		if (this.currentHref != window.location.href) {
			window.history.pushState({}, '', `${this.currentHref}`);
		} else {
			window.history.replaceState({}, '', `${this.currentHref}`);
		}
		this.handlePathName(this.rootComponent, window.location.pathname);
	}

	static init = (rootComponent, location) => {
		window.onpopstate = this.handlePopState;
		this.rootComponent = rootComponent;
		this.href = location.href;
	};

	static handlePathName = (component, pathname) => {
		let subPath = null;

		if (!component.hidden && pathname != '/') {
			const segments = this.getPathSegments(pathname);
			const currentSegment = segments[0];

			const targetComponent = component.querySelector(
				`[path="${currentSegment}"]`
			);

			if (targetComponent) {
				const targetSiblings = targetComponent
					? targetComponent.parentElement.children
					: [];

				targetComponent.hidden = false;

				for (const node of targetSiblings) {
					if (node.getAttribute('path') != currentSegment) {
						node.hidden = true;
					}
				}
			} else {
				throw 'Error: Path segment was not found';
			}

			subPath = pathname.replace(/\/[A-Z]*/i, '');
			targetComponent.pathname = subPath;
		}
	};

	static replacePathName = (previousPathName, segment) => {
		const currentPathName = window.location.pathname;
		const newPathName = currentPathName.replace(
			previousPathName,
			`/${segment}/`
		);
		const newHref = `${window.location.origin}${newPathName}`;

		this.href = newHref;
	};

	static appendPathSegment = (pathSegment) => {
		const segments = this.getPathSegments(window.location.pathname);
		const lastIndex = segments.length - 1;
		const lastSegment = segments[lastIndex];

		if (lastSegment != pathSegment) {
			const currentPathName = window.location.pathname;
			const newPathName = `${currentPathName}${pathSegment}/`;
			const newHref = `${window.location.origin}${newPathName}`;

			this.href = newHref;
		}
	};

	static handlePopState = (event) => {
		Router.handlePathName(this.rootComponent, window.location.pathname);
	};

	static getPathSegments = (pathname) => {
		const splittedLevels = pathname.split('/');
		return splittedLevels.filter((level) => level != '');
	};

	static encodeBase64Url = (string) => {
		const base64Encoded = btoa(encodeURIComponent(string));
		const urlSafeCode = base64Encoded
			.replace(/\+/g, '-')
			.replace(/\//g, '_')
			.replace(/\=+$/, '');
		return urlSafeCode;
	};

	static decodeBase64Url = (string) => {
		const decodedString = decodeURIComponent(string);
		const depuratedString = (decodedString + '===').slice(
			0,
			string.length + (string.length % 4)
		);
		const originalBase64 = depuratedString
			.replace(/-/g, '+')
			.replace(/_/g, '/');
		return atob(originalBase64);
	};
}
