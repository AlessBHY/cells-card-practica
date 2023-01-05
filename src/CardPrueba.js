import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './CardPrueba-styles.js';

import '@bbva-web-components/bbva-button-default/bbva-button-default.js';
import '@bbva-web-components/bbva-core-icon/bbva-core-icon.js'
import '@cells-components/coronita-icons/coronita-icons.js'
import '@bbva-web-components/bbva-card-banner/bbva-card-banner.js'
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<card-prueba></card-prueba>
```

##styling-doc

@customElement card-prueba
*/
export class CardPrueba extends LitElement {
  static get is() {
    return 'card-prueba';
  }

  // Declare properties
  static get properties() {
    return {
      name: { type: String, },
      title: { type: String, },
      info: { type: String, },
      listItem: { type: Array, attribute: 'list-items' },
      buttonName: {type: String, attribute: 'button-name'}
    };
  }



  // Initialize properties
  constructor() {
    super();
    this.name = '';
    this.title = '';
    this.info = ' ';
    this.listItem = [
      {
        icon: '',
        description:''
      },
    ];
    this.buttonName = '';
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('card-prueba-shared-styles')
    ];
  }
  actionInsurance(){
    this.dispatchEvent(new CustomEvent('Selection-insurance', {
        bubbles: true,
        composed: true,
        detail: this.title,
        })); 
  }
  // Define a template
  render() {
    return html`

    <div class="div-container-prueba">
    <h2 class="secure-title-subtitle">${this.title}</h2>
    <p class="secure-title-subtitle">Welcome to ${this.info}</p>
   
    </br>
    ${this.listItem.map((i) => html`
    <div class="secure-separate">
      <bbva-core-icon class="bbva-core-icon" icon='coronita:${i.icon}'></bbva-core-icon>${i.description}
      </div>
    `)}
    <div 
    class="div-container-button-cotizar-prueba">
    <bbva-button-default  text="${this.buttonName}" @click="${this.actionInsurance}">
    </bbva-button-default>
    </div>
      </div>

    `;
  }
}
