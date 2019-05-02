import React, { Component } from 'react';
import classNames from 'classnames';

import './Input.scss';


export default class Input extends Component {
  constructor(props) {
    super(props);

    this._onClick = this._onClick.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onBlur = this._onBlur.bind(this);
  }

  _onClick(e) {
    e.target.select();
    if (this.props.onClick) this.props.onClick(e);
  }

  _onChange(e) {
    const value = e.target.value;
    const fieldId = e.target.id;
    if (this.props.onChange) this.props.onChange(e, value, fieldId);
  }

  _onBlur(e) {
    const value = e.target.value;
    const fieldId = e.target.id;
    if (this.props.onBlur) this.props.onBlur(e, value, fieldId);
  }


  render() {
    return (
      <div className={classNames({
        'dui-input': true,
        'dui-input-empty': !this.props.value,
      })}>

        <label
          htmlFor={this.props.fieldId}
          className="dui-input-label">
          {this.props.label}
        </label>

        <input
          type="text"
          name={this.props.fieldId}
          value={this.props.value}
          className="dui-input-input"
          onClick={this._onClick}
          onChange={this._onChange}
          onBlur={this._onBlur} />

      </div>
    );
  }
}


Input.defaultProps = {
  fieldId: '',
  label: '',
  value: '',
  onClick: () => {},
  onChange: () => {},
  onBlur: () => {},
};
