import { html } from 'https://unpkg.com/lit-html?module';
import { MenuItem } from './menuItem.js';

export class Header {
	static menuItems = [
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
	static render = (context) => html`
		<div id="main-header">
			<div id="main-header__logo">
				<div id="logo__text">anagrama</div>
			</div>
			<div id="main-header__gap"></div>
			<div id="main-header__menu">
				${this.menuItems.map((item) => {
					return MenuItem.render(
						item.id,
						item.value,
						item.name,
						context.name
					);
				})}
			</div>
		</div>
	`;
}
