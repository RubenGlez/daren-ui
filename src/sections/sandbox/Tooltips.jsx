import React, { Component, Fragment } from 'react';
import './Sandbox.scss';

import Button from '../../components/Button';
import Tooltip from '../../components/Tooltip';
import Dropdown from '../../components/Dropdown';


export default class Tooltips extends Component {
  renderDropdown() {
    return (
      <div className="dui-dropdown-panel-links">
        <a href="#">Un enlace</a>
        <a href="#">Un enlace</a>
        <a href="#">Un enlace</a>
        <a href="#">Un enlace super largo para ver que pasa</a>
      </div>
    );
  }


  render() {
    return (
      <Fragment>
        <div className="dui-sandbox-content-title">Tooltip.jsx</div>

        <div className="dui-sandbox-content-subtitle">Tooltip - Default</div>
        <div className="dui-sandbox-content-row">

          <Tooltip message={'Hola soy el contenido del tooltip'}>
            <Button
              text={'default'}
              icon={'check'}
            />
          </Tooltip>

          <Tooltip message={'Hola soy el contenido del tooltip'}>
            <Dropdown
              text={'Ejemplo'}
              renderDropdown={this.renderDropdown}
            />
          </Tooltip>

        </div>
      </Fragment>
    );
  }
}
