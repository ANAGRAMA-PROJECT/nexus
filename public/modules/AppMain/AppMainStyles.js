import { html } from 'https://unpkg.com/lit-html?module';

export const styles = html`
	<style>
		#main {
			height: 100vh;
			overflow: hidden;
			background-color: var(--dark-background);
			background-position: center;
			background-image: url('media/math.jpg');
			background-position: center;
			background-blend-mode: overlay;
			animation: var(--animation-fade-in) 1s;
		}

		.background {
			position: absolute;
			height: 100%;
			width: 100%;
		}

		#main-title {
			display: flex;
			align-items: center;
			height: 5rem;
			padding: 2rem;
			font-family: var(--title-font-family);
			text-align: center;
			color: var(--dark-text-content);

			width: 100%;
			min-width: 0;
		}

		#main-title > div {
			display: flex;
			align-items: center;
			justify-content: center;
			min-height: 2rem;
			min-height: 2rem;
			cursor: pointer;
			width: 4rem;
		}

		.main-title__gap {
			margin: auto;
			min-width: 0;
		}

		.main-button__context {
			border-radius: 50%;
			max-height: 4rem;
			display: flex;
			align-items: center;
			padding: 0.5rem;
			cursor: pointer;
			box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.25),
				0 10px 10px rgba(0, 0, 0, 0.22);
		}

		#main-container {
			font-family: var(--content-font-family);
			color: var(--main-content-color-dark);

			display: flex;
			flex-flow: row wrap;

			position: relative;
			height: 100%;
		}

		#main-content__home {
			scroll-behavior: smooth;
			height: 100%;
			overflow-y: scroll;
		}

		#main-container__sidebar {
			flex: 1;
			margin-right: 1rem;
			padding: 2rem;
			animation: var(--animation-fade-in) 1s;
			position: relative;
			height: 90%;
		}

		#main-container__content {
			position: relative;
			padding: 2rem;
			overflow-y: scroll;
			flex: 6;
			height: 90%;
			max-height: 90%;
		}

		.colective-mention {
			color: var(--main-sidebar-color-pink);
		}

		#main-container__leftover {
			/* Alignment */
			flex: 1;
			margin-left: 1rem;
		}

		#main-header {
			display: flex;
			min-height: 5rem;
			position: sticky;
			flex-flow: row nowrap;
			top: 0;
			z-index: 10;
			animation: var(--animation-fade-in) 1s;
		}

		#main-header__logo {
			flex: 3 0 8.2%;
			display: flex;
			align-items: center;
			justify-content: center;

			animation: var(--animation-fade-in) var(--fade-in-duration);
		}

		#logo__text {
			font: var(--text-logo);
			color: var(--dark-headers);
			letter-spacing: 2px;
		}

		#main-header__gap {
			flex: 3 0 8.2%;
		}

		#main-header__menu {
			flex: 5 0 8.2%;
			display: flex;
			flex-flow: row nowrap;

			font-size: var(--small-headers);
			text-align: center;
			align-items: stretch;
			justify-content: center;
		}

		menu-item {
			flex: 1 0 20%;
			cursor: pointer;

			display: flex;
			align-items: center;
			justify-content: center;

			color: var(--dark-headers);
			font-family: var(--title-font-family);

			animation: var(--animation-fade-in) var(--fade-in-duration);
		}

		p {
			text-align: center;
			text-justify: inter-word;
			line-height: 2;
			letter-spacing: 1px;
			animation: var(--animation-fade-in-up) var(--fade-in-up-duration);
		}

		.home-text__presentation {
			padding: 5rem;
			font-size: 2.5rem;
			text-align: center;
			height: 95%;
		}

		.colective-bold {
			color: var(--dark-blue);
		}

		.container__vertical {
			position: relative;

			display: flex;
			flex-direction: column;

			min-height: 100%;
			height: 100%;
		}
	</style>
`;
