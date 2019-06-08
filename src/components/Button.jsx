import React from 'react';
import classNames from 'classnames';

import Icon from './Icon';
import './Button.scss';


export default function Button({
  text = '',
  icon = null,
  isIconRight = false,
  template = null,
  isDisabled = false,
  onClick = () => {},
}) {
  const buttonClassNames = classNames({
    'dui-button': true,
    ['dui-button-' + template]: template,
    'dui-button-icon-right': isIconRight,
    'dui-button-disabled': isDisabled,
  });


  return (
    <div
      className={buttonClassNames}
      onClick={isDisabled ? null : onClick}>
      {icon &&
        <Icon name={icon} />
      }
      {text &&
        <div className="dui-button-text">{text}</div>
      }
    </div>
  );
}
