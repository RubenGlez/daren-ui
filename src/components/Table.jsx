import React, { Component } from 'react';
import './Table.scss';

import ColumnResizer from 'column-resizer';


export default class Table extends Component {
  constructor(props) {
    super(props);

    this.tableRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.resizable) this.enableResize();
  }

  componentWillUpdate() {
    if (this.props.resizable) this.disableResize();
  }

  componentDidUpdate() {
    if (this.props.resizable) this.enableResize();
  }

  componentWillUnmount() {
    if (this.props.resizable) this.disableResize();
  }


  enableResize() {
    const options = this.props.resizerOptions;
    if (!this.resizer) {
      this.resizer = new ColumnResizer(
        this.tableRef.current,
        options
      );
    } else {
      this.resizer.reset(options);
    }
  }

  disableResize() {
    if (this.resizer) this.resizer.reset({ disable: true });
  }


  tableHeaderCell = content => (
    <th className="dui-table-header-row-cell">
      <div className="dui-table-header-row-cell-content">
        {content }
      </div>
    </th>
  );

  tableCell = content => (
    <td className="dui-table-body-row-cell">
      <div className="dui-table-body-row-cell-content">
        { content }
      </div>
    </td>
  );


  render() {
    return (
      <div className="dui-table-container">
        <table className="dui-table" ref={this.tableRef}>
          <thead className="dui-table-header">
            {this.props.header.map(row => (
              <tr className="dui-table-header-row">
                {row.map(cell => this.tableHeaderCell(cell))}
              </tr>
            ))}
          </thead>
          <tbody className="dui-table-body">
            {this.props.body.map(row => (
              <tr className="dui-table-body-row">
                {row.map(cell => this.tableCell(cell))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.defaultProps = {
  header: [],
  body: [],
  resizable: false,
  resizerOptions: {
    resizeMode: 'overflow',
    disable: false,
    disabledColumns: [],
    liveDrag: true,
    partialRefresh: false,
    innerGripHtml: '',
    draggingClass: 'grip-drag',
    minWidth: 15,
    headerOnly: false,
    hoverCursor: 'col-resize',
    dragCursor: 'col-resize',
    flush: false,
    marginLeft: null,
    marginRight: null,
    remoteTable: null,
    widths: [],
    serialize: true,
  },
};
