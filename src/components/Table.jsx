import React, { Component } from 'react';
import './Table.scss';


export default class Table extends Component {
  constructor(props) {
    super(props);

    this.tableRef = React.createRef();

    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
  }

  componentDidMount() {
    const resizableColumns = this.tableRef.current.querySelector('thead tr th.daren-ui-tableheadercell-resizable');
    if (resizableColumns) {
      this.resizableMarker = this.tableRef.current.closest('.daren-ui-table-container').querySelector('.daren-ui-table-resizable-marker');
      document.addEventListener('mousedown', this.onMouseDown);
      document.addEventListener('mousemove', this.onMouseMove);
      document.addEventListener('mouseup', this.onMouseUp);
    }
  }

  onMouseDown(e) {
    e.preventDefault();
    if (e.target.classList.contains('daren-ui-tableheadercell-resizable-handler')) {
      this.resizableHandler = e.target;
      this.currentColumn = this.resizableHandler.closest('.daren-ui-tableheadercell-resizable');
      this.currentColumnLeft = this.currentColumn.getBoundingClientRect().left;
    }
  }

  onMouseMove(e) {
    if (!this.resizableHandler) return;
    const tableLeft = this.tableRef.current.getBoundingClientRect().left;
    const posX = e.pageX - tableLeft;
    const newWidth = posX - this.currentColumnLeft;
    const handlerNewWidth = Math.round(this.resizableHandler.getBoundingClientRect().left + (this.resizableHandler.getBoundingClientRect().width / 2)) - tableLeft;

    this.currentColumn.style.width = newWidth + 'px';
    this.resizableMarker.style.left = handlerNewWidth + 'px';
    if (this.resizableMarker.style.display !== 'block') this.resizableMarker.style.display = 'block';
  }

  onMouseUp(e) {
    this.resizableHandler = null;
    this.resizableMarker.style.display = 'none';
  }

  render() {
    return (
      <div className="daren-ui-table-container">
        <table className="daren-ui-table" ref={this.tableRef}>
          <thead>
            {this.props.renderTableHeader()}
          </thead>
          <tbody>
            {this.props.renderTableRows()}
          </tbody>
        </table>
        <div className="daren-ui-table-resizable-marker" />
      </div>
    );
  }
}

Table.defaultProps = {
  renderTableHeader: () => {},
  renderTableRows: () => {},
};
