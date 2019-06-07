import React, { Component } from 'react';
import classNames from 'classnames';
import { calculatePosition } from '../utils/commonUtils';

import './Tooltip.scss';


export default class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      top: false,
      right: false,
    };
    this._messageRef = React.createRef();
    this._tooltipRef = React.createRef();
  }

  componentDidMount() {
    const message = this._messageRef.current;
    const messagePosition = calculatePosition(message);
    this.setState({
      top: messagePosition.top,
      right: messagePosition.right,
    });

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
  }

  _onMouseEnter(e) {
    const { clientX, clientY } = e;
    const tooltip = this._tooltipRef.current;
    const tooltipRect = tooltip.getBoundingClientRect();
    if (clientY > tooltipRect.top - 1 && clientY < tooltipRect.bottom &&
      clientX > tooltipRect.left - 1 && clientX < tooltipRect.right) {
      this.setState({ visible: true });
    }
  }

  _onMouseLeave(e) {
    this.setState({ visible: false });
  }


  render() {
    return (
      <div
        ref={this._tooltipRef}
        className="dui-tooltip"
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}>

        {this.props.children}

        <div
          ref={this._messageRef}
          className={classNames({
            'dui-tooltip-message': true,
            'dui-tooltip-message-visible': this.state.visible,
            'dui-tooltip-message-top': this.state.top,
            'dui-tooltip-message-right': this.state.right,
          })}>
          {this.props.message}
        </div>

      </div>
    );
  }
}


Tooltip.defaultProps = {
  message: '',
};
