import React, { Component } from 'react';
import classNames from 'classnames';

import './Input.scss';


export default class Input extends Component {
  constructor(props) {
    super(props);

    this._onClick = this._onClick.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
    this._onClear = this._onClear.bind(this);

    this.state = {
      isFocus: false,
    };

    this._inputRef = React.createRef();
  }

  _onClick(e) {
    e.preventDefault();
    if (e.target.tagName === 'LABEL') this._inputRef.current.focus();
    // e.target.select();
    if (this.props.onClick) this.props.onClick(e);
  }

  _onChange(e) {
    e.preventDefault();
    const value = e.target.value;
    const fieldId = e.target.name;
    if (this.props.onChange) this.props.onChange(e, value, fieldId);
  }

  _onFocus(e) {
    e.preventDefault();
    this.setState({ isFocus: true });

    const value = e.target.value;
    const fieldId = e.target.name;
    if (this.props.onFocus) this.props.onFocus(e, value, fieldId);
  }

  _onBlur(e) {
    e.preventDefault();
    this.setState({ isFocus: false });

    const value = e.target.value;
    const fieldId = e.target.name;
    if (this.props.onBlur) this.props.onBlur(e, value, fieldId);
  }

  _onClear(e) {
    const value = '';
    const fieldId = this._inputRef.current.name;
    if (this.props.onChange) this.props.onChange(e, value, fieldId);
  }


  render() {
    return (
      <div className={classNames({
        'dui-input': true,
        'dui-input-value': this.props.value,
        'dui-input-focus': this.state.isFocus,
        'dui-input-error': this.props.error,
      })}>

        <label
          htmlFor={this.props.fieldId}
          className="dui-input-label"
          onClick={this._onClick}>
          {this.props.label}
        </label>

        <input
          ref={this._inputRef}
          type="text"
          name={this.props.fieldId}
          value={this.props.value}
          className="dui-input-input"
          onClick={this._onClick}
          onChange={this._onChange}
          onFocus={this._onFocus}
          onBlur={this._onBlur} />

        {this.props.error &&
          <div className="dui-input-message">{this.props.error}</div>
        }

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
  error: false,
};
