import React, { PureComponent } from 'react';
import classNames from 'classnames';
import Icon from './Icon';

import './Input.scss';


export default class Input extends PureComponent {
  constructor(props) {
    super(props);

    [
      '_onClick',
      '_onChange',
      '_onFocus',
      '_onBlur',
      '_onKeyDown',
    ].forEach(method => {this[method] = this[method].bind(this);});

    this.state = { isFocus: false };
  }

  _getValueFromEvent(event) {
    return event.target.value !== null && event.target.value !== undefined ? event.target.value : '';
  }

  _getApiArguments(event) {
    return [event, this._getValueFromEvent(event), this.props.fieldId];
  }


  _onClick(e) {
    e.preventDefault();
    if (this.props.onClick) this.props.onClick(...this._getApiArguments(e));
  }

  _onChange(e) {
    e.preventDefault();
    if (this.props.onChange) this.props.onChange(...this._getApiArguments(e));
  }

  _onFocus(e) {
    e.preventDefault();
    this.setState({ isFocus: true }, () => {
      if (this.props.onFocus) this.props.onFocus(...this._getApiArguments(e));
    });
  }

  _onBlur(e) {
    e.preventDefault();
    this.setState({ isFocus: false }, () => {
      if (this.props.onBlur) this.props.onBlur(...this._getApiArguments(e));
    });
  }

  _onKeyDown(e) {
    if (this.props.onKeyDown) this.props.onKeyDown(...this._getApiArguments(e));
  }

  _onKeyUp(e) {
    if (this.props.onKeyUp) this.props.onKeyUp(...this._getApiArguments(e));
  }

  render() {
    return (
      <div className={classNames({
        'dui-input': true,
        'dui-input-has-value': this.props.value,
        'dui-input-has-focus': this.state.isFocus,
        'dui-input-has-error': this.props.error,
        'dui-input-has-icon-left': this.props.iconLeft,
        'dui-input-has-icon-right': this.props.iconRight,
      })}>

        {this.props.label &&
          <label
            htmlFor={this.props.fieldId}
            className="dui-input-label">
            {this.props.label}
          </label>
        }

        {this.props.iconLeft &&
          <Icon name={this.props.iconLeft} className="dui-icon-left" />
        }

        <input
          type="text"
          id={this.props.fieldId}
          value={this.props.value}
          placeholder={this.props.placeholder}
          className="dui-input-input"
          onClick={this._onClick}
          onChange={this._onChange}
          onFocus={this._onFocus}
          onBlur={this._onBlur}
          onKeyDown={this._onKeyDown}
          disabled={this.props.isDisabled}
          readOnly={this.props.isReadOnly}
          tabIndex={this.props.tabIndex} />

        {this.props.iconRight &&
          <Icon name={this.props.iconRight} className="dui-icon-right" />
        }

        {this.props.error &&
          <div className="dui-input-error">{this.props.error}</div>
        }

      </div>
    );
  }
}


Input.defaultProps = {
  fieldId: '',
  label: '',
  value: '',
  placeholder: '',
  iconLeft: null,
  iconRight: null,
  error: null,
  isDisabled: false,
  isReadOnly: false,
  tabIndex: 0,

  onClick: null,
  onFocus: null,
  onChange: null,
  onBlur: null,
  onKeyDown: null,
  onKeyUp: null,
};
