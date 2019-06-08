import React from 'react';
import Icon from './Icon';
import classNames from 'classnames';
import './Checkbox.scss';


export default function Checkbox({
  fieldId = '',
  label = '',
  value = '',
  isDisabled = false,
  tabIndex = 0,
  onChange = null,
}) {
  function _getApiArguments(event) {
    return [event, event.target.checked, fieldId];
  }

  function _onChange(e) {
    if (onChange) onChange(..._getApiArguments(e));
  }


  return (
    <div className={classNames({
      'dui-checkbox': true,
      'dui-checkbox-active': value,
    })}>

      <div className="dui-checkbox-check">
        <Icon name="check" className="dui-checkbox-check-icon"/>
      </div>

      <input
        type="checkbox"
        className="dui-checkbox-input"
        id={fieldId}
        disabled={isDisabled}
        tabIndex={tabIndex}
        checked={value}
        onChange={_onChange} />

      {label &&
        <label
          htmlFor={fieldId}
          className="dui-checkbox-label">
          {label}
        </label>
      }

    </div>
  );
}
