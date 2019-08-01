import React from 'react';
import classNames from 'classnames';
import './Card.scss';


const Card = props => {
  return (
    <div className={classNames({
      'dui-card': true,
      [`dui-card-${props.className}`]: props.className,
    })}>
      <div className="dui-card-header">
        <span className="dui-card-header-title">{props.title}</span>
      </div>
      <div className="dui-card-content">
        {props.children}
      </div>
      {props.renderFooter &&
        <div className="dui-card-footer">
          {props.renderFooter()}
        </div>
      }
    </div>
  );
};

Card.defaultProps = {
  title: '',
  renderFooter: null,
  className: null,
};

export default Card;
