import { html, render } from 'https://unpkg.com/lit-html?module';
import './AppMain/AppMain.js';
import { Router } from './Router/Router.js';

const template = html`<app-main></app-main>`;

console.log(Router.getOriginalLocation());

render(template, document.body);
