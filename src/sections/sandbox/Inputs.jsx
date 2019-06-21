import React, { Component, Fragment } from 'react';
import './Sandbox.scss';

import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';
import Radiobutton from '../../components/Radiobutton';
import Select from '../../components/Select';
import Range from '../../components/Range';


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
      radio1: 1,
      select1: '',
      options: [],
    };

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(json => {
        const options = json.map(option => ({value: option.id, label: option.title}));
        this.setState({options});
      });
  }

  _onChange(e, value, fieldId) {
    this.setState( { [fieldId]: value });
  }


  render() {
    return (
      <Fragment>
        <div className="dui-sandbox-content-title">Input.jsx</div>

        <div className="dui-sandbox-content-subtitle">Range</div>
        <div className="dui-sandbox-content-row">
          <Range
            value={8}
          />
        </div>

        <div className="dui-sandbox-content-subtitle">Select</div>
        <div className="dui-sandbox-content-row">
          <Select
            fieldId={'select1'}
            value={this.state.select1}
            placeholder={'Elige una opción'}
            label={'Label'}
            options={this.state.options}
            onChange={this._onChange}
          />
        </div>

        <div className="dui-sandbox-content-subtitle">Radiobutton</div>
        <div className="dui-sandbox-content-row">
          <Radiobutton
            fieldId={'radio1'}
            label={'este es el label'}
            value={parseInt(this.state.radio1, 10)}
            options={[
              {value: 1, label: 'Uno'},
              {value: 2, label: 'Dos'},
              {value: 3, label: 'Tres'},
            ]}
            onChange={this._onChange}
          />
        </div>

        <div className="dui-sandbox-content-subtitle">Checkbox</div>
        <div className="dui-sandbox-content-row">
          <Checkbox
            fieldId={'check1'}
            label={'este es el label'}
            value={this.state.check1}
            onChange={this._onChange}
          />
        </div>

        <div className="dui-sandbox-content-subtitle">Input</div>
        <div className="dui-sandbox-content-row">
          <Input
            fieldId={'example_input5'}
            placeholder={'Placeholder'}
            value={this.state.example_input5}
            onChange={this._onChange}
            iconLeft={'flag'}
            iconRight={'search'}
          />
          <Input
            fieldId={'example_input4'}
            value={this.state.example_input4}
            onChange={this._onChange}
          />
          <Input
            fieldId={'example_input1'}
            placeholder={'Placeholder'}
            label={'Label'}
            value={this.state.example_input1}
            onChange={this._onChange}
          />
          <Input
            fieldId={'example_input2'}
            label={'Label'}
            value={this.state.example_input2}
            onChange={this._onChange}
            isClearable={true}
          />
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
