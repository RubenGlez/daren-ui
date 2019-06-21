import React, { useRef, useEffect } from 'react';
import './Table.scss';

import ColumnResizer from 'column-resizer';


export default function Table({
  header = [],
  body = [],
  isLoading = false,
  resizable = false,
  resizerOptions = {
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
}) {
  const tableRef = useRef();
  let resizer = null;

  function enableResize() {
    const options = resizerOptions;
    if (!resizer) {
      resizer = new ColumnResizer(tableRef.current, options);
    } else {
      resizer.reset(options);
    }
  }

  function disableResize() {
    if (resizer) resizer.reset({ disable: true });
  }

  useEffect(() => {
    if (!isLoading && resizable) enableResize();
    return () => {
      if (!isLoading && resizable) disableResize();
    };
  }, [isLoading, resizable]);


  return isLoading ? (
    <div>Cargando...</div>
  ) : (
    <div className="dui-table-container">
      <table className="dui-table" ref={tableRef}>
        <thead className="dui-table-header">
          {header.map(row => (
            <tr className="dui-table-header-row">
              {row.map(cell => (
                <th className="dui-table-header-row-cell">
                  <div className="dui-table-header-row-cell-content">
                    { cell }
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="dui-table-body">
          {body.map(row => (
            <tr className="dui-table-body-row" key={ row.key }>
              {Object.keys(row).map(cell => cell !== 'key' ?
                <td className="dui-table-body-row-cell">
                  <div className="dui-table-body-row-cell-content">
                    { row[cell] }
                  </div>
                </td> : null
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
