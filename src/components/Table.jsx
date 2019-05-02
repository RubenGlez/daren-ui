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


  render() {
    return (
      <div className="dui-table-container">
        <table className="dui-table" ref={this.tableRef}>
          <thead className="dui-table-header">
            {this.props.renderTableHeader()}
          </thead>
          <tbody className="dui-table-body">
            {this.props.renderTableRows()}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.defaultProps = {
  renderTableHeader: () => {},
  renderTableRows: () => {},
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
