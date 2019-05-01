import React, { Component } from 'react';
import './Table.scss';

import ColumnResizer from 'column-resizer';


export default class Table extends Component {
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
        document.querySelector('#' + this.props.fieldId),
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
      <div className="daren-ui-table-container">
        <table className="daren-ui-table" id={this.props.fieldId}>
          <thead className="daren-ui-table-header">
            {this.props.renderTableHeader()}
          </thead>
          <tbody className="daren-ui-table-body">
            {this.props.renderTableRows()}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.defaultProps = {
  fieldId: '',
  renderTableHeader: () => {},
  renderTableRows: () => {},
  resizable: false,
  resizerOptions: {
    resizeMode: 'overflow',
    disable: false,
    disabledColumns: [],
    liveDrag: false,
    partialRefresh: false,
    innerGripHtml: '',
    draggingClass: null,
    minWidth: 15,
    headerOnly: false,
    hoverCursor: 'e-resize',
    dragCursor: 'e-resize',
    flush: false,
    marginLeft: null,
    marginRight: null,
    remoteTable: null,
    widths: [],
    serialize: true,
  },
};
