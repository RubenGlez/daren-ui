import React, { Component } from 'react';
import classNames from 'classnames';

import Icon from './Icon';
import './Button.scss';


export default class Button extends Component {
  render() {
    const buttonClassNames = classNames({
      'daren-ui-button': true,
      ['daren-ui-button-' + this.props.template]: this.props.template,
      'daren-ui-button-icon-right': this.props.isIconRight,
      'daren-ui-button-disabled': this.props.isDisabled,
    });


    return this.props.isDisabled ? (
      <div
        className={buttonClassNames}>
        {this.props.icon &&
          <Icon name={this.props.icon} />
        }
        {this.props.text &&
          <div className="daren-ui-button-text">{this.props.text}</div>
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
          <div className="daren-ui-button-text">{this.props.text}</div>
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
