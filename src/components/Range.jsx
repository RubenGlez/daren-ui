import React, { useRef, useEffect } from 'react';
import { debounce } from '../utils/commonUtils';
import './Range.scss';
const DOT_DIAMETER = 24;


export default function Range({
  value = 0,
  onChange = null,
}) {
  const rangeRef = useRef();
  let dot = null;
  let containerPos = 0;
  let isDraggin = false;
  let rangePos;

  const _calculateRange = debounce((e) => {
    const posX = e.pageX;
    const offsetleft = posX - containerPos.left;

    if (posX > containerPos.left && posX < (containerPos.right - DOT_DIAMETER)) {
      dot.style.left = offsetleft + 'px';
      rangePos = offsetleft * 100 / (containerPos.width - DOT_DIAMETER);
    }
  }, 5);

  function _onMouseDown(e) {
    e.preventDefault();
    isDraggin = true;
    containerPos = rangeRef.current.getBoundingClientRect();
    dot = e.target;
  }

  function _onMouseMove(e) {
    e.preventDefault();
    if (isDraggin) _calculateRange(e);
  }

  function _onMouseUp(e) {
    e.preventDefault();
    isDraggin = false;
  }

  useEffect(() => {
    document.addEventListener('mouseup', _onMouseUp);
    document.addEventListener('mousemove', _onMouseMove);

    return () => {
      document.removeEventListener('mouseup', _onMouseUp);
      document.removeEventListener('mousemove', _onMouseMove);
    };
  });


  return (
    <div
      ref={rangeRef}
      className="dui-range">

      <div
        className="dui-range-dot"
        onMouseDown={_onMouseDown}
      />

      <div className="dui-range-position">{rangePos}</div>

      <div className="dui-range-line"/>
    </div>
  );
}
