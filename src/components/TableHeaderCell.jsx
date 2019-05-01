import React, { Component } from 'react';
import classNames from 'classnames';


export default class TableHeaderCell extends Component {
  render() {
    const thClassNames = classNames({
      'daren-ui-tableheadercell': true,
      'daren-ui-tableheadercell-resizable': this.props.isResizable,
    });

    return (
      <th className={thClassNames}>
        <div className="daren-ui-tableheadercell-content">
          {this.props.children}
        </div>
        {this.props.isResizable &&
          <div className="daren-ui-tableheadercell-resizable-handler" />
        }
      </th>
    );
  }
}

TableHeaderCell.defaultProps = {
  isResizable: false,
};
