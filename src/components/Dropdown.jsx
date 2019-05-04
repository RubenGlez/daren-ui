import React, { Component } from 'react';

import Icon from './Icon';

import './Dropdown.scss';


export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this._onClick = this._onClick.bind(this);
    this.state = {
      visible: false,
    };
  }

  _onClick() {
    this.setState((prevState, props) => ({
      visible: !prevState.visible,
    }));
  }

  render() {
    return (
      <div className="dui-dropdown">
        <div
          className="dui-dropdown-button"
          onClick={this._onClick}>
          {this.props.icon &&
            <Icon name={this.props.icon} />
          }
          <div className="dui-dropdown-button-text">
            {this.props.text}
          </div>
          <Icon name="chevron-down" />
        </div>
        {this.state.visible &&
          <div className="dui-dropdown-panel">
            {this.props.renderDropdown()}
          </div>
        }
      </div>
    );
  }
}


Dropdown.defaultProps = {
  text: '',
  icon: '',
  renderDropdown: () => {},
};
