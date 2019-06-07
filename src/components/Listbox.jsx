import React, { Component } from 'react';
import keycode from 'keycode';
import classNames from 'classnames';
import Input from './Input';

import './Listbox.scss';


export default class Listbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };

    [
      '_onClick',
      '_onKeyDown',
      '_onClickOption',
      '_getLabelByValue',
      '_onMouseEnter',
      '_onClickDocument',
    ].forEach(method => {this[method] = this[method].bind(this);});

    this._optionsRef = React.createRef();
    this._listboxRef = React.createRef();

    this._activeClassname = 'dui-listbox-options-option-active';
  }

  componentDidMount() {
    document.addEventListener('click', this._onClickDocument);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this._onClickDocument);
  }

  _onClickDocument(e) {
    if (this._listboxRef.current.contains(e.target)) return;
    this.setState({ isActive: false });
  }

  _onClick() {
    this.setState({ isActive: true }, () => {
      const activeOption = this._optionsRef.current.querySelector(`.${this._activeClassname}`);
      if (!activeOption) {
        const firstOption = this._optionsRef.current.querySelector('.dui-listbox-options-option');
        firstOption.classList.add(this._activeClassname);
      }
    });
  }

  _onKeyDown(e) {
    if (!this.state.isActive) return;
    const currentSelection = this._optionsRef.current.querySelector(`.${this._activeClassname}`);

    if (keycode(e) === 'down') {
      const nextElement = currentSelection.nextElementSibling;
      if (nextElement) {
        nextElement.classList.add(this._activeClassname);
      } else {
        currentSelection.parentElement.firstElementChild.classList.add(this._activeClassname);
      }
      currentSelection.classList.remove(this._activeClassname);
    } else if (keycode(e) === 'up') {
      const prevElement = currentSelection.previousElementSibling;
      if (prevElement) {
        prevElement.classList.add(this._activeClassname);
      } else {
        currentSelection.parentElement.lastElementChild.classList.add(this._activeClassname);
      }
      currentSelection.classList.remove(this._activeClassname);
    } else if (keycode(e) === 'enter' || keycode(e) === 'tab') {
      currentSelection.click();
    } else {
      return;
    }
  }

  _onClickOption(e, value, fieldId) {
    if (this.props.onChange) this.props.onChange(e, value, fieldId);
    this.setState({ isActive: false });
  }

  _getLabelByValue(value) {
    return this.props.options.length && value ?
      this.props.options.find(option => option.value === value).label : '';
  }

  _onMouseEnter(e) {
    const currentSelection = this._optionsRef.current.querySelector(`.${this._activeClassname}`);
    if (currentSelection) currentSelection.classList.remove(this._activeClassname);
    e.currentTarget.classList.add(this._activeClassname);
  }


  render() {
    const labelValue = this._getLabelByValue(this.props.value);

    return (
      <div
        ref={this._listboxRef}
        className="dui-listbox">
        <div className="dui-listbox-input">
          <Input
            fieldId={this.props.fieldId}
            value={labelValue}
            placeholder={this.props.placeholder}
            label={this.props.label}
            iconRight={'chevron-down'}
            onClick={this._onClick}
            onKeyDown={this._onKeyDown}
            isReadOnly={true}
          />
        </div>

        {this.props.options.length > 0 && this.state.isActive &&
          <div
            ref={this._optionsRef}
            className="dui-listbox-options">
            {this.props.options.map(option => {
              return (
                <div
                  key={option.value}
                  className={classNames({
                    'dui-listbox-options-option': true,
                    'dui-listbox-options-option-selected': option.value === this.props.value,
                  })}
                  onClick={e => this._onClickOption(e, option.value, option.label)}
                  onMouseEnter={this._onMouseEnter}>
                  {option.label}
                </div>
              );
            })}
          </div>
        }
      </div>
    );
  }
}


Listbox.defaultProps = {
  fieldId: '',
  value: '',
  placeholder: '',
  label: '',
  options: [], // {value: xxx, label: xxx}
  onChange: null,
};
