import React, { Component } from 'react';


export default class TableCell extends Component {
  render() {
    return (
      <td className="daren-ui-tablecell">
        <div className="daren-ui-tablecell-content">
          {this.props.children}
        </div>
      </td>
    );
  }
}

TableCell.defaultProps = {
  // TODO
};
