import React, { PureComponent } from 'react';
import classNames from 'classnames';

import './Radiobutton.scss';


export default class Radiobutton extends PureComponent {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
  }

  _getApiArguments(event) {
    return [event, event.target.value, this.props.fieldId];
  }

  _onChange(e) {
    if (this.props.onChange) this.props.onChange(...this._getApiArguments(e));
  }


  render() {
    return (
      <div className="dui-radiobutton">
        {this.props.options.map(option => {
          const isChecked = option.value === this.props.value;
          return (
            <div
              key={option.value}
              className={classNames({
                'dui-radiobutton-option': true,
                'dui-radiobutton-option-active': isChecked,
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
                onChange={this._onChange} />
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
}


Radiobutton.defaultProps = {
  fieldId: '',
  value: '',
  options: [], // {field: XXX, value: XXX}
  onChange: null,
};
