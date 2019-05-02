import React, { Component } from 'react';


export default class TableCell extends Component {
  render() {
    return (
      <td className="dui-table-body-row-cell">
        <div className="dui-table-body-row-cell-content">
          {this.props.children}
        </div>
      </td>
    );
  }
}
