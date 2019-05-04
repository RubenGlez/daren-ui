import React, { Component } from 'react';
import classNames from 'classnames';
import { calculatePosition } from '../utils/commonUtils';

import './Tooltip.scss';


export default class Tooltip extends Component {
  constructor(props) {
    super(props);
    this._messageRef = React.createRef();
    this.state = {
      visible: false,
      top: false,
      right: false,
    };
  }

  componentDidMount() {
    const message = this._messageRef.current;
    this.setState({
      top: calculatePosition(message).top,
      right: calculatePosition(message).right,
    });

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
  }

  _onMouseEnter(e) {
    this.setState({
      visible: true,
    });
  }

  _onMouseLeave() {
    this.setState({
      visible: false,
    });
  }


  render() {
    return (
      <div
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
