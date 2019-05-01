import React from 'react';
import { getIconPath } from '../utils/iconsPaths';


const Icon = (props) => (
  <svg
    version="1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="daren-ui-icon"
  >
    {getIconPath(props.name)}
  </svg>
);

export default Icon;
