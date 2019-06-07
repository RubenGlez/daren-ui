import React, { Component, Fragment } from 'react';
import './Sandbox.scss';

import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';


export default class Inputs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      example_input1: '',
      example_input2: 'Soy un campo activo',
      example_input3: 'Aqui hay errores',
      example_input4: '',
      example_input5: '',
      check1: false,
    };

    this._onChange = this._onChange.bind(this);
  }

  _onChange(e, value, fieldId) {
    this.setState( { [fieldId]: value });
  }


  render() {
    return (
      <Fragment>
        <div className="dui-sandbox-content-title">Input.jsx</div>

        <div className="dui-sandbox-content-subtitle">Checkbox</div>
        <div className="dui-sandbox-content-row">
          <Checkbox
            fieldId={'check1'}
            label={'este es el label'}
            value={this.state.check1}
            onChange={this._onChange}
          />
        </div>

        <div className="dui-sandbox-content-subtitle">Input - Icons</div>
        <div className="dui-sandbox-content-row">
          <Input
            fieldId={'example_input5'}
            placeholder={'Placeholder'}
            value={this.state.example_input5}
            onChange={this._onChange}
            iconLeft={'flag'}
            iconRight={'search'}
          />
        </div>

        <div className="dui-sandbox-content-subtitle">Input - No label</div>
        <div className="dui-sandbox-content-row">
          <Input
            fieldId={'example_input4'}
            value={this.state.example_input4}
            onChange={this._onChange}
          />
        </div>

        <div className="dui-sandbox-content-subtitle">Input - Default</div>
        <div className="dui-sandbox-content-row">
          <Input
            fieldId={'example_input1'}
            placeholder={'Placeholder'}
            label={'Label'}
            value={this.state.example_input1}
            onChange={this._onChange}
          />
        </div>

        <div className="dui-sandbox-content-subtitle">Input - With value</div>
        <div className="dui-sandbox-content-row">
          <Input
            fieldId={'example_input2'}
            label={'Label'}
            value={this.state.example_input2}
            onChange={this._onChange}
            isClearable={true}
          />
        </div>

        <div className="dui-sandbox-content-subtitle">Input - Error</div>
        <div className="dui-sandbox-content-row">
          <Input
            fieldId={'example_input3'}
            label={'Label'}
            value={this.state.example_input3}
            onChange={this._onChange}
            error={'Hay errores en este campo y tienen una explicación super larga'}
          />
        </div>

      </Fragment>
    );
  }
}
