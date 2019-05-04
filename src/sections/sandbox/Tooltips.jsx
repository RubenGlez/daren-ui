import React, { Component, Fragment } from 'react';
import './Sandbox.scss';

import Button from '../../components/Button';
import Tooltip from '../../components/Tooltip';


export default class Tooltips extends Component {
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

        </div>
      </Fragment>
    );
  }
}
