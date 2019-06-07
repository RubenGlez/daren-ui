import React, { Component, Fragment } from 'react';
import './Sandbox.scss';

import Button from '../../components/Button';

export default class Buttons extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    alert('Has pulsado un botón');
  }

  render() {
    return (
      <Fragment>
        <div className="dui-sandbox-content-title">Button.jsx</div>

        <div className="dui-sandbox-content-subtitle">Button - Templates</div>
        <div className="dui-sandbox-content-row">
          <Button
            text={'default'}
            icon={null}
            isIconRight={false}
            template={null}
            isDisabled={false}
            onClick={this.onClick}
          />
          <Button
            text={'success'}
            icon={null}
            isIconRight={false}
            template={'success'}
            isDisabled={false}
            onClick={this.onClick}
          />
          <Button
            text={'warning'}
            icon={null}
            isIconRight={false}
            template={'warning'}
            isDisabled={false}
            onClick={this.onClick}
          />
          <Button
            text={'danger'}
            icon={null}
            isIconRight={false}
            template={'danger'}
            isDisabled={false}
            onClick={this.onClick}
          />
          <Button
            text={'info'}
            icon={null}
            isIconRight={false}
            template={'info'}
            isDisabled={false}
            onClick={this.onClick}
          />
        </div>

        <div className="dui-sandbox-content-subtitle">Button - Status</div>
        <div className="dui-sandbox-content-row">
          <Button
            text={'enabled'}
            icon={null}
            isIconRight={false}
            template={null}
            isDisabled={false}
            onClick={this.onClick}
          />
          <Button
            text={'disabled'}
            icon={null}
            isIconRight={false}
            template={null}
            isDisabled={true}
            onClick={this.onClick}
          />
        </div>

        <div className="dui-sandbox-content-subtitle">Button - Icons</div>
        <div className="dui-sandbox-content-row">
          <Button
            text={'default'}
            icon={'arrow-left'}
            isIconRight={false}
            template={null}
            isDisabled={false}
            onClick={this.onClick}
          />
          <Button
            text={'default'}
            icon={'arrow-right'}
            isIconRight={true}
            template={null}
            isDisabled={false}
            onClick={this.onClick}
          />
        </div>

      </Fragment>
    );
  }
}
