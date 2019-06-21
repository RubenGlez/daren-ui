import React, { useRef, useState, useEffect } from 'react';
import { calculatePosition } from '../utils/commonUtils';
import classNames from 'classnames';
import Icon from './Icon';

import './Dropdown.scss';


export default function Dropdown({
  text = '',
  icon = '',
  renderDropdown = () => {},
}) {
  // Refs
  const dropdownRef = useRef(null);
  const panelRef = useRef(null);
  // States
  const [isVisible, setIsVisible] = useState(false);
  const [top, setTop] = useState(false);
  const [right, setRight] = useState(false);

  function _onClickDocument(e) {
    if (dropdownRef.current.contains(e.target)) return;
    setIsVisible(false);
    setTop(false);
    setRight(false);
  }

  function _relocatePanel(panel) {
    setTop(isVisible ? calculatePosition(panel).top : false);
    setRight(isVisible ? calculatePosition(panel).right : false);
  }

  function _onClick() {
    setIsVisible(!isVisible);
  }

  // Life Cicle
  useEffect(() => {
    document.addEventListener('click', _onClickDocument);
    if (isVisible) _relocatePanel(panelRef.current);

    return () => {
      document.removeEventListener('click', _onClickDocument);
    };
  }, [isVisible]);


  return (
    <div
      className="dui-dropdown"
      ref={dropdownRef}>
      <div
        className="dui-dropdown-button"
        onClick={_onClick}>
        {icon &&
          <Icon name={icon} />
        }
        <div className="dui-dropdown-button-text">
          {text}
        </div>
        <Icon name="chevron-down" />
      </div>
      {isVisible &&
        <div
          className={classNames({
            'dui-dropdown-panel': true,
            'dui-dropdown-panel-top': top,
            'dui-dropdown-panel-right': right,
          })}
          ref={panelRef}>
          {renderDropdown()}
        </div>
      }
    </div>
  );
}
