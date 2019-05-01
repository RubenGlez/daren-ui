import React, { Component } from 'react';


export default class TableCell extends Component {
  render() {
    return (
      <td className="daren-ui-table-body-row-cell">
        <div className="daren-ui-table-body-row-cell-content">
          {this.props.children}
        </div>
      </td>
    );
  }
}
