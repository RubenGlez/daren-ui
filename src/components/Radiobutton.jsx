import React from 'react';
import classNames from 'classnames';

import './Radiobutton.scss';


export default function Radiobutton({
  fieldId = '',
  value = '',
  options = [], // {field: XXX, value: XXX}
  isStacked = false,
  onChange = null,
}) {
  function _getApiArguments(event) {
    return [event, event.target.value, fieldId];
  }

  function _onChange(e) {
    if (onChange) onChange(..._getApiArguments(e));
  }


  return (
    <div className="dui-radiobutton">
      {options.map(option => {
        const isChecked = option.value === value;
        return (
          <div
            key={option.value}
            className={classNames({
              'dui-radiobutton-option': true,
              'dui-radiobutton-option-active': isChecked,
              'dui-radiobutton-option-stacked': isStacked,
            })}>
            <div className="dui-radiobutton-option-radio">
              <div className="dui-radiobutton-option-radio-dot" />
            </div>
            <input
              type="radio"
              className="dui-radiobutton-option-input"
              id={option.value}
              value={option.value}
              checked={isChecked}
              onChange={_onChange} />
            {option.label &&
              <label
                htmlFor={option.value}
                className="dui-radiobutton-option-label">
                {option.label}
              </label>
            }
          </div>
        );
      })}
    </div>
  );
}
