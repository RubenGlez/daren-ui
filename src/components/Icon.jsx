import React from 'react';

const Icon = props => (
  <svg className={'dui-icon icon-' + props.name}>
    <use xlinkHref={'#' + props.name}/>
  </svg>
);

Icon.defaultProps = {
  name: 'check',
};

export default Icon;
