import React, { Component, Fragment } from 'react';
import './Sandbox.scss';

import Dropdown from '../../components/Dropdown';

export default class Dropdowns extends Component {
  renderDropdown() {
    return (
      <div className="dui-dropdown-panel-links">
        <a href="/">Un enlace</a>
        <a href="/">Un enlace</a>
        <a href="/">Un enlace</a>
        <a href="/">Un enlace super largo para ver que pasa</a>
      </div>
    );
  }


  render() {
    return (
      <Fragment>
        <div className="dui-sandbox-content-title">Button.jsx</div>

        <div className="dui-sandbox-content-subtitle">Dropdown - Links</div>
        <div className="dui-sandbox-content-row">
          <Dropdown
            text={'Ejemplo'}
            renderDropdown={this.renderDropdown}
          />
        </div>

      </Fragment>
    );
  }
}
