import React, { PureComponent } from 'react';
import Icon from './Icon';
import classNames from 'classnames';
import './Checkbox.scss';


export default class Checkbox extends PureComponent {
  constructor(props) {
    super(props);

    ['_onChange'].forEach(method => {this[method] = this[method].bind(this);});
  }

  _getApiArguments(event) {
    return [event, event.target.checked, this.props.fieldId];
  }

  _onChange(e) {
    if (this.props.onChange) this.props.onChange(...this._getApiArguments(e));
  }


  render() {
    return (
      <div className={classNames({
        'dui-checkbox': true,
        'dui-checkbox-active': this.props.value,
      })}>

        <div className="dui-checkbox-check">
          <Icon name="check" className="dui-checkbox-check-icon"/>
        </div>

        <input
          type="checkbox"
          className="dui-checkbox-input"
          id={this.props.fieldId}
          disabled={this.props.isDisabled}
          tabIndex={this.props.tabIndex}
          checked={this.props.value}
          onChange={this._onChange} />

        {this.props.label &&
          <label
            htmlFor={this.props.fieldId}
            className="dui-checkbox-label">
            {this.props.label}
          </label>
        }

      </div>
    );
  }
}


Checkbox.defaultProps = {
  fieldId: '',
  label: '',
  value: '',
  isDisabled: false,
  tabIndex: 0,

  onChange: null,
};
