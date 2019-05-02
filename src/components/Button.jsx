import React, { Component } from 'react';
import classNames from 'classnames';

import Icon from './Icon';
import './Button.scss';


export default class Button extends Component {
  render() {
    const buttonClassNames = classNames({
      'dui-button': true,
      ['dui-button-' + this.props.template]: this.props.template,
      'dui-button-icon-right': this.props.isIconRight,
      'dui-button-disabled': this.props.isDisabled,
    });


    return this.props.isDisabled ? (
      <div
        className={buttonClassNames}>
        {this.props.icon &&
          <Icon name={this.props.icon} />
        }
        {this.props.text &&
          <div className="dui-button-text">{this.props.text}</div>
        }
      </div>
    ) : (
      <div
        className={buttonClassNames}
        onClick={this.props.onClick}>
        {this.props.icon &&
          <Icon name={this.props.icon} />
        }
        {this.props.text &&
          <div className="dui-button-text">{this.props.text}</div>
        }
      </div>
    );
  }
}


Button.defaultProps = {
  text: '',
  icon: null,
  isIconRight: false,
  template: null,
  isDisabled: false,
  onClick: () => {},
};
