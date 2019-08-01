import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import './Input.scss';


export default function Input({
  fieldId = '',
  label = '',
  value = '',
  placeholder = '',
  iconLeft = null,
  iconRight = null,
  error = null,
  isDisabled = false,
  isReadOnly = false,
  tabIndex = 0,
  maxLength = null,
  onClick = null,
  onFocus = null,
  onChange = null,
  onBlur = null,
  onKeyDown = null,
  onKeyUp = null,
}) {
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef();

  function _getValueFromEvent(event) {
    return event.target.value !== null && event.target.value !== undefined ? event.target.value : '';
  }

  function _getApiArguments(event) {
    return [event, _getValueFromEvent(event), fieldId];
  }

  function _onClick(e) {
    e.preventDefault();
    if (onClick) onClick(..._getApiArguments(e));
  }

  function _onChange(e) {
    e.preventDefault();
    if (onChange) onChange(..._getApiArguments(e));
  }

  function _onFocus(e) {
    e.preventDefault();
    setIsFocus(true);
    if (onFocus) onFocus(..._getApiArguments(e));
  }

  function _onBlur(e) {
    e.preventDefault();
    setIsFocus(false);
    if (onBlur) onBlur(..._getApiArguments(e));
  }

  function _onKeyDown(e) {
    if (onKeyDown) onKeyDown(..._getApiArguments(e));
  }

  function _onKeyUp(e) {
    if (onKeyUp) onKeyUp(..._getApiArguments(e));
  }

  useEffect(() => {
    if ([null, undefined, ''].includes(value)) return;
    inputRef.current.value = value;
  }, [value]);

  return (
    <div className={classNames({
      'dui-input': true,
      'dui-input-has-value': value,
      'dui-input-has-focus': isFocus,
      'dui-input-has-error': error,
      'dui-input-has-icon-left': iconLeft,
      'dui-input-has-icon-right': iconRight,
    })}>

      {label &&
        <label
          htmlFor={fieldId}
          className="dui-input-label">
          {label}
        </label>
      }

      {iconLeft &&
        <Icon name={iconLeft} className="dui-icon-left" />
      }

      <input
        ref={inputRef}
        type="text"
        id={fieldId}
        defaultValue={value}
        placeholder={placeholder}
        className="dui-input-input"
        disabled={isDisabled}
        readOnly={isReadOnly}
        tabIndex={tabIndex}
        maxLength={maxLength}
        onClick={_onClick}
        onChange={_onChange}
        onFocus={_onFocus}
        onBlur={_onBlur}
        onKeyDown={_onKeyDown}
        onKeyUp={_onKeyUp} />

      {iconRight &&
        <Icon name={iconRight} className="dui-icon-right" />
      }

      {error &&
        <div className="dui-input-error">{error}</div>
      }

    </div>
  );
}
