import React from 'react';


export default function Icon({
  name = 'check',
  className = '',
}) {
  return (
    <svg className={`dui-icon dui-icon-${name} ${className}`}>
      <use xlinkHref={`#${name}`}/>
    </svg>
  );
}
