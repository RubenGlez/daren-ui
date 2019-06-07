import React from 'react';


const Icon = props => (
  <svg className={`dui-icon dui-icon-${props.name} ${props.className}`}>
    <use xlinkHref={`#${props.name}`}/>
  </svg>
);

Icon.defaultProps = {
  name: 'check',
  className: '',
};

export default Icon;
