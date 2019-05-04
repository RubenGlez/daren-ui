import React, { Component, Fragment } from 'react';
import './Sandbox.scss';

import Table from '../../components/Table';


export default class Tables extends Component {
  render() {
    const tableHeader = [
      ['cabecera uno', 'cabecera dos', 'cabecera tres', 'cabecera cuatro'],
    ];
    const tableBody = [
      ['celda uno', 'celda dos', 'celda tres', 'celda cuatro'],
      ['celda uno', 'celda dos', 'celda tres', 'celda cuatro'],
      ['celda uno', 'celda dos', 'celda tres', 'celda cuatro'],
      ['celda uno', 'celda dos', 'celda tres', 'celda cuatro'],
      ['celda uno', 'celda dos', 'celda tres', 'celda cuatro'],
    ];

    return (
      <Fragment>
        <div className="dui-sandbox-content-title">Table.jsx</div>
        <div>
          <Table
            header={tableHeader}
            body={tableBody}
            resizable={true}
          />
        </div>
      </Fragment>
    );
  }
}
