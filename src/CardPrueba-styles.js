/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`:host {
  display: block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.div-container-prueba {
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);
  margin: 10px 10px 10px 10px;
  padding: 10px 10px 10px 10px;
}

.secure-title-subtitle {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.div-container-button-cotizar-prueba {
  text-align: center;
  margin-top: 20px;
}

.secure-separate {
  margin-bottom: 15px;
}

.bbva-core-icon {
  color: #1973b8;
}
`;