import { html, render } from 'https://unpkg.com/lit-html?module';

export class HomeContent extends HTMLElement {
	connectedCallback() {
		const template = html`
			<div class="home-text__presentation">
				<p>
					El
					<span class="colective-mention">Colectivo Anagrama</span>
					es una iniciativa cuyo propósito es consolidarse como un
					frente de investigación e inovación en el desarrollo de
					soluciones tecnológicas.
				</p>
			</div>
			<div class="home-text__presentation">
				<p>
					Somos un grupo de profesionales de diversas disciplinas que
					comparte ideas, proyectos y
					<span class="colective-bold">conocimiento.</span>
				</p>
			</div>
			<div class="home-text__presentation">
				<p>
					Buscamos construir una organización alternativa enfocada en
					el
					<span class="colective-mention">código abierto </span>y la
					federación de contenido.
				</p>
			</div>

			<div class="home-text__presentation">
				<p>Crea con nosotros</p>
			</div>
		`;

		render(template, this);
	}
}

customElements.define('home-content', HomeContent);
