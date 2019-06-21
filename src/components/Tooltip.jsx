import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { calculatePosition } from '../utils/commonUtils';

import './Tooltip.scss';


export default function Tooltip({
  message = '',
  children = null,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [fitsTop, setFitsTop] = useState(false);
  const [fitsRight, setFitsRight] = useState(false);

  const _messageRef = useRef();
  const _tooltipRef = useRef();

  useEffect(() => {
    const messagePosition = calculatePosition(_messageRef.current);
    setFitsTop(messagePosition.top);
    setFitsRight(messagePosition.right);
  }, [isVisible]);

  function _onMouseEnter(e) {
    const { clientX, clientY } = e;
    const tooltip = _tooltipRef.current;
    const tooltipRect = tooltip.getBoundingClientRect();
    if (clientY > tooltipRect.top - 1 && clientY < tooltipRect.bottom &&
      clientX > tooltipRect.left - 1 && clientX < tooltipRect.right) {
      setIsVisible(true);
    }
  }


  return (
    <div
      ref={_tooltipRef}
      className="dui-tooltip"
      onMouseEnter={_onMouseEnter}
      onMouseLeave={() => setIsVisible(false)}>

      {children}

      <div
        ref={_messageRef}
        className={classNames({
          'dui-tooltip-message': true,
          'dui-tooltip-message-visible': isVisible,
          'dui-tooltip-message-top': fitsTop,
          'dui-tooltip-message-right': fitsRight,
        })}>
        {message}
      </div>
    </div>
  );
}
