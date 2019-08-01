import React from 'react';
import classNames from 'classnames';
import Icon from './Icon';
import './Notification.scss';


const Notification = props => {
  return (
    <div className={classNames({
      'dui-notification': true,
      [`dui-notification-${props.type}`]: props.type,
    })}>
      {props.icon &&
        <Icon name={props.icon} />
      }
      {props.text}
    </div>
  );
};

Notification.defaultProps = {
  icon: 'alert-triangle',
  text: '',
  type: 'error', // error | warning | success
};

export default Notification;
