import React, { useState, useRef, useEffect, useMemo } from 'react';
import keycode from 'keycode';
import classNames from 'classnames';
import Input from './Input';
import './Select.scss';


function Option({
  value = '',
  label = '',
  isActive = false,
  isSelected = false,
  onClick = () => {},
  onMouseEnter = () => {},
}) {
  return (
    <div
      key={value}
      className={classNames({
        'dui-select-options-option': true,
        'dui-select-options-option-active': isActive,
        'dui-select-options-option-selected': isSelected,
      })}
      onClick={onClick}
      onMouseEnter={onMouseEnter}>
      {label}
    </div>
  );
}


export default function Select({
  fieldId = '',
  value = '',
  placeholder = '',
  label = '',
  options = [], // {value: xxx, label: xxx}
  onChange = () => {},
  isReadOnly = true,
}) {
  const [isActive, setIsActive] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const _selectRef = useRef();
  const _optionsRef = useRef();

  function _onClickDocument(e) {
    if (_selectRef.current.contains(e.target)) return;
    setIsActive(false);
  }

  function _onClickOption(e) {
    onChange(e, options[selectedIndex].value, fieldId);
    setIsActive(false);
  }

  function _scrollIntoView() {
    const optionsContainer = _optionsRef.current;
    const optionsContainerRect = optionsContainer.getBoundingClientRect();
    const selectedOption = optionsContainer.querySelector('.dui-select-options-option-active');
    const selectedOptionRect = selectedOption.getBoundingClientRect();

    if (selectedOptionRect.top < optionsContainerRect.top ||
      selectedOptionRect.bottom > optionsContainerRect.bottom) {
      selectedOption.scrollIntoView();
    }
  }

  function _onKeyDown(e) {
    let newIndex;
    if (keycode(e) === 'down') {
      e.preventDefault();
      if (selectedIndex === 0) newIndex = 1;
      else newIndex = selectedIndex === (options.length - 1) ? 0 : selectedIndex + 1;
      setSelectedIndex(newIndex);
      _scrollIntoView();
    } else if (keycode(e) === 'up') {
      e.preventDefault();
      newIndex = selectedIndex === 0 ? (options.length - 1) : selectedIndex - 1;
      setSelectedIndex(newIndex);
      _scrollIntoView();
    } else if (keycode(e) === 'enter' || keycode(e) === 'tab') {
      _onClickOption(e);
    } else {
      return;
    }
  }

  function _getLabelByValue(selectedValue) {
    return useMemo(() => options.length && selectedValue ?
      options.find(option => option.value === selectedValue).label : '',
    [selectedValue]);
  }

  useEffect(() => {
    document.addEventListener('click', _onClickDocument);
    return () => {
      document.removeEventListener('click', _onClickDocument);
    };
  });

  return (
    <div
      ref={_selectRef}
      className="dui-select">
      <div className="dui-select-input">
        <Input
          fieldId={fieldId}
          value={_getLabelByValue(value)}
          placeholder={placeholder}
          label={label}
          iconRight={'chevron-down'}
          onClick={() => setIsActive(true)}
          onKeyDown={_onKeyDown}
          isReadOnly={isReadOnly}
        />
      </div>

      {options.length && isActive &&
        <div
          ref={_optionsRef}
          className="dui-select-options">
          {options.map((option, index) => (
            <Option
              value={option.value}
              label={option.label}
              isActive={option.value === options[selectedIndex].value}
              isSelected={option.value === value}
              onMouseEnter={() => setSelectedIndex(index)}
              onClick={_onClickOption}
            />
          ))}
        </div>
      }
    </div>
  );
}
