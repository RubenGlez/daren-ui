import React from 'react';
import './Range.scss';


export default function Range({
  value = 0,
  onChange = () => {},
}) {
  return (
    <div className="dui-range">
      <input
        className="dui-range-input"
        type="range"
        min={0}
        max={100}
        onChange={onChange}
      />
    </div>
  );
}
