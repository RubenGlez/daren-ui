import React, { Component, Fragment } from 'react';

import './Sandbox.scss';

import Listbox from '../../components/Listbox';

export default class Listboxes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listbox1: '',
      options: [],
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(json => {
        const options = json.map(option => ({value: option.id, label: option.title}));
        this.setState({options});
      });
  }

  onChange(e, value, fieldId) {
    this.setState({ listbox1: parseInt(value, 10) });
  }


  render() {
    return (
      <Fragment>
        <div className="dui-sandbox-content-title">Listbox.jsx</div>

        <div className="dui-sandbox-content-subtitle">Listbox - Default</div>
        <div className="dui-sandbox-content-row">
          <Listbox
            fieldId={'ejemplo'}
            value={this.state.listbox1}
            placeholder={'Elige una opción'}
            label={'Label'}
            options={this.state.options}
            onChange={this.onChange}
          />
        </div>

      </Fragment>
    );
  }
}
