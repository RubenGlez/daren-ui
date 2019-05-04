import React, { Component } from 'react';
import classNames from 'classnames';
import './Sandbox.scss';

import Buttons from './Buttons';
import Tables from './Tables';
import Inputs from './Inputs';
import Tooltips from './Tooltips';

const sections = [
  Buttons,
  Tables,
  Tooltips,
  Inputs,
];


export default class Sandbox extends Component {
  constructor(props) {
    super(props);
    this.state = { section: 0 };
  }

  _goToSection(section) {
    this.setState({ section });
  }


  render() {
    const SectionContent = sections[this.state.section];

    return (
      <div className="dui-sandbox">
        <div className="dui-sandbox-navigation">
          {sections.map((section, index) => (
            <div
              key={index}
              className={classNames({
                'dui-sandbox-navigation-item': true,
                'dui-sandbox-navigation-item-active': this.state.section === index,
              })}
              onClick={() => this._goToSection(index)}>
              {section.name}
            </div>
          ))}
        </div>
        <div className="dui-sandbox-content">
          <SectionContent />
        </div>
      </div>
    );
  }
}
