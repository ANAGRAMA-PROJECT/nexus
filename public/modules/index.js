import { html, render } from 'https://unpkg.com/lit-html?module';
import './AppMain/AppMain.js';
import { Router } from './Router/Router.js';

const setInitialLocation = () => {
	let location = null;
	if (window.__originalLocation) {
		location = window.__originalLocation;
		window.history.replaceState(
			{},
			'home',
			`${window.__originalLocation.href}`
		);
	} else {
		window.history.replaceState({}, 'home', `${window.location.href}home/`);
		location = window.location;
		window.__originalLocation = null;
	}
	return location;
};

const template = html`<app-main path="app"></app-main>`;
render(template, document.body);

const currentLocation = setInitialLocation();
Router.init(document.body, currentLocation);
