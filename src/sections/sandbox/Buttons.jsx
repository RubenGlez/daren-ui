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
        <div className="daren-ui-sandbox-content-title">Button.jsx</div>

        <div className="daren-ui-sandbox-content-subtitle">Button - Templates</div>
        <div className="daren-ui-sandbox-content-row">
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
            text={'danger'}
            icon={null}
            isIconRight={false}
            template={'danger'}
            isDisabled={false}
            onClick={this.onClick}
          />
          <Button
            text={'alternative'}
            icon={null}
            isIconRight={false}
            template={'alternative'}
            isDisabled={false}
            onClick={this.onClick}
          />
        </div>

        <div className="daren-ui-sandbox-content-subtitle">Button - Status</div>
        <div className="daren-ui-sandbox-content-row">
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

        <div className="daren-ui-sandbox-content-subtitle">Button - Icons</div>
        <div className="daren-ui-sandbox-content-row">
          <Button
            text={'default'}
            icon={'arrow-left'}
            isIconRight={false}
            template={null}
            isDisabled={false}
            onClick={this.onClick}
          />
          <Button
            text={'success'}
            icon={'check'}
            isIconRight={false}
            template={'success'}
            isDisabled={false}
            onClick={this.onClick}
          />
          <Button
            text={'danger'}
            icon={'close'}
            isIconRight={false}
            template={'danger'}
            isDisabled={false}
            onClick={this.onClick}
          />
          <Button
            text={'alternative'}
            icon={'close'}
            isIconRight={false}
            template={'alternative'}
            isDisabled={false}
            onClick={this.onClick}
          />
        </div>

        <div className="daren-ui-sandbox-content-subtitle">Button - Icons reverse</div>
        <div className="daren-ui-sandbox-content-row">
          <Button
            text={'default'}
            icon={'arrow-left'}
            isIconRight={true}
            template={null}
            isDisabled={false}
            onClick={this.onClick}
          />
          <Button
            text={'success'}
            icon={'check'}
            isIconRight={true}
            template={'success'}
            isDisabled={false}
            onClick={this.onClick}
          />
          <Button
            text={'danger'}
            icon={'close'}
            isIconRight={true}
            template={'danger'}
            isDisabled={false}
            onClick={this.onClick}
          />
          <Button
            text={'alternative'}
            icon={'close'}
            isIconRight={true}
            template={'alternative'}
            isDisabled={false}
            onClick={this.onClick}
          />
        </div>
      </Fragment>
    );
  }
}
