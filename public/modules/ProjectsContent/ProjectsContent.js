import { html, render } from 'https://unpkg.com/lit-html?module';

export class ProjectsContent extends HTMLElement {
	connectedCallback() {
		const template = html` <img id="slider" width="60%" height="60%" /> `;
		render(template, this);

		this.addImageHandler();
	}

	addImageHandler = () => {
		let images = [];

		// Esto se deberia de cambiar a algo automatico, que buscara todas las imagenes que existen en la carpeta
		images[0] = '/media/background.jpg';
		images[1] = 'img/image2.jpg';
		images[2] = 'img/image3.jpg';
		images[3] = 'img/image4.jpg';

		let indeximg = 0;
		let maxNumimage = 3; // Hay que checar el numero maximo de imagenes que hay en la carpeta, y restarle 1.
		let slideTime = 700;

		function changeImage() {
			document.querySelector('#slider').src = images[indeximg];

			if (indeximg < maxNumimage) {
				indeximg++;
			} else {
				indeximg = 0;
			}
		}

		setInterval(changeImage, slideTime);
	};
}

customElements.define('projects-content', ProjectsContent);
