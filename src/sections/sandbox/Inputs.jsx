import React, { Component, Fragment } from 'react';
import './Sandbox.scss';

import Input from '../../components/Input';


export default class Inputs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    };

    this._onChange = this._onChange.bind(this);
  }

  _onChange(e, value, fieldId) {
    this.setState( { inputValue: value });
  }


  render() {
    return (
      <Fragment>
        <div className="dui-sandbox-content-title">Input.jsx</div>

        <Input
          fieldId={'example_input'}
          label={'example'}
          value={this.state.inputValue}
          onChange={this._onChange}
        />

      </Fragment>
    );
  }
}
