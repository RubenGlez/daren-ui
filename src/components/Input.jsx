import React, { Component } from 'react';

import './Input.scss';


export default class Input extends Component {
  render() {
    return (
      <div className="daren-ui-input">
        <label
          htmlFor={this.props.fieldId}
          className="daren-ui-input-label">
          {this.props.label}
        </label>

        <input
          id={this.props.fieldId}
          type="text"
          name={this.props.fieldId}
          className="daren-ui-input-input"/>
      </div>
    );
  }
}


Input.defaultProps = {
  fieldId: '',
  label: '',
};
