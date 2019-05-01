import React, { Component } from 'react';
import classNames from 'classnames';
import './Sandbox.scss';

import Buttons from './Buttons';
import Tables from './Tables';

const sections = [
  Tables,
  Buttons,
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
      <div className="daren-ui-sandbox">
        <div className="daren-ui-sandbox-navigation">
          {sections.map((section, index) => (
            <div
              key={index}
              className={classNames({
                'daren-ui-sandbox-navigation-item': true,
                'daren-ui-sandbox-navigation-item-active': this.state.section === index,
              })}
              onClick={() => this._goToSection(index)}>
              {section.name}
            </div>
          ))}
        </div>
        <div className="daren-ui-sandbox-content">
          <SectionContent />
        </div>
      </div>
    );
  }
}
