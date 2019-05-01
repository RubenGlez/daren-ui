import React, { Component, Fragment } from 'react';
import './Sandbox.scss';

import Input from '../../components/Input';


export default class Buttons extends Component {
  render() {
    return (
      <Fragment>
        <div className="daren-ui-sandbox-content-title">Input.jsx</div>

        <Input
          fieldId={'example_input'}
          label={'example'}
        />
      </Fragment>
    );
  }
}
