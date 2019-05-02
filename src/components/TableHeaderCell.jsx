import React, { Component } from 'react';


export default class TableHeaderCell extends Component {
  render() {
    return (
      <th className="dui-table-header-row-cell">
        <div className="dui-table-header-row-cell-content">
          {this.props.children}
        </div>
      </th>
    );
  }
}
