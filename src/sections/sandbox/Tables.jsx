import React, { Component, Fragment } from 'react';
import './Sandbox.scss';

import Table from '../../components/Table';
import TableHeaderCell from '../../components/TableHeaderCell';
import TableCell from '../../components/TableCell';


export default class Tables extends Component {
  renderTableHeader() {
    return (
      <tr className="daren-ui-tableheader-row">
        <TableHeaderCell isResizable={true}>{'Cabecera uno'}</TableHeaderCell>
        <TableHeaderCell isResizable={true}>{'Cabecera dos'}</TableHeaderCell>
        <TableHeaderCell isResizable={true}>{'Cabecera tres'}</TableHeaderCell>
        <TableHeaderCell isResizable={true}>{'Cabecera cuatro'}</TableHeaderCell>
        <TableHeaderCell isResizable={true}>{'Cabecera cinco'}</TableHeaderCell>
      </tr>
    );
  }

  renderTableRows() {
    const rows = [];

    for (let i = 0; i < 10; i++) {
      rows.push(
        <tr className="daren-ui-table-row" key={i}>
          <TableCell>{'Celda uno'}</TableCell>
          <TableCell>{'Celda dos'}</TableCell>
          <TableCell>{'Celda tres'}</TableCell>
          <TableCell>{'Celda cuatro'}</TableCell>
          <TableCell>{'Celda cinco'}</TableCell>
        </tr>
      );
    }

    return rows;
  }


  render() {
    return (
      <Fragment>
        <div className="daren-ui-sandbox-content-title">Table.jsx</div>
        <div>
          <Table
            renderTableHeader={this.renderTableHeader}
            renderTableRows={this.renderTableRows}
          />
        </div>
      </Fragment>
    );
  }
}
