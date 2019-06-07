import React, { PureComponent } from 'react';
import { calculatePosition } from '../utils/commonUtils';
import classNames from 'classnames';
import Icon from './Icon';

import './Dropdown.scss';


export default class Dropdown extends PureComponent {
  constructor(props) {
    super(props);
    [
      '_onClick',
      '_onClickDocument',
    ].forEach(method => {this[method] = this[method].bind(this);});
    this.state = {
      visible: false,
      top: false,
      right: false,
    };
    this._dropdownRef = React.createRef();
    this._panelRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('click', this._onClickDocument);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this._onClickDocument);
  }

  _onClickDocument(e) {
    if (this._dropdownRef.current.contains(e.target)) return;
    this.setState({
      visible: false,
      top: false,
      right: false,
    });
  }

  _onClick() {
    this.setState((prevState, props) => ({
      visible: !prevState.visible,
    }), () => this._relocatePanel(this._panelRef.current) );
  }

  _relocatePanel(panel) {
    this.setState({
      top: this.state.visible ? calculatePosition(panel).top : false,
      right: this.state.visible ? calculatePosition(panel).right : false,
    });
  }


  render() {
    return (
      <div
        className="dui-dropdown"
        ref={this._dropdownRef}>
        <div
          className="dui-dropdown-button"
          onClick={this._onClick}>
          {this.props.icon &&
            <Icon name={this.props.icon} />
          }
          <div className="dui-dropdown-button-text">
            {this.props.text}
          </div>
          <Icon name="chevron-down" />
        </div>
        {this.state.visible &&
          <div
            className={classNames({
              'dui-dropdown-panel': true,
              'dui-dropdown-panel-top': this.state.top,
              'dui-dropdown-panel-right': this.state.right,
            })}
            ref={this._panelRef}>
            {this.props.renderDropdown()}
          </div>
        }
      </div>
    );
  }
}


Dropdown.defaultProps = {
  text: '',
  icon: '',
  renderDropdown: () => {},
};
