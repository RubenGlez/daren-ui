import React, { Component } from 'react';


export default class TableHeaderCell extends Component {
  render() {
    return (
      <th className="daren-ui-table-header-row-cell">
        <div className="daren-ui-table-header-row-cell-content">
          {this.props.children}
        </div>
      </th>
    );
  }
}
