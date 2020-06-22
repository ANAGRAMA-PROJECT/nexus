
import { html } from 'https://unpkg.com/lit-html?module';

export class Contact {

    static render = (context) => html`
        <div id=${context.elementId} hidden > Contact </div>
    `;

}