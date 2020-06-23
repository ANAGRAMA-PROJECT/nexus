import { html, render } from 'https://unpkg.com/lit-html?module';
import './MenuItem.js';

export class MainHeader extends HTMLElement {

	menuItems = [
		{
			id: 'menu__home',
			value: 'Inicio',
			name: 'home'
		},
		{
			id: 'menu__news',
			value: 'Feeds',
			name: 'feeds'
		},
		{
			id: 'menu__projects',
			value: 'Proyectos',
			name: 'projects'
		},
		{
			id: 'menu__contact',
			value: 'Contacto',
			name: 'contact'
		},
		{
			id: 'menu__hackers',
			value: 'Hackers',
			name: 'hackers'
		}
	];

	connectedCallback() {
		const template = html`
			<div id="main-header__logo">
				<div id="logo__text">anagrama</div>
			</div>
			<div id="main-header__gap"></div>
			<div id="main-header__menu">
				${this.menuItems.map(
					(item) =>
						html`<menu-item
							id=${item.id}
							value=${item.value}
							section=${item.name}
							@click=${this.handleItemClick}
						></menu-item>`
				)}
			</div>
		`;

		render(template, this);
	}

	handleItemClick = (event) => {
		const itemSelectEvent = new CustomEvent('item-select', {
			detail: {
				sectionName: event.currentTarget.getAttribute('section')
			}
		});

		this.dispatchEvent(itemSelectEvent);
		event.preventDefault();
	};
}

customElements.define('main-header', MainHeader);
