import React, { Component, Fragment } from 'react';
import './Sandbox.scss';

import Table from '../../components/Table';


export default class Tables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({items: json}));
  }

  render() {
    const tableHeader = [
      ['Nombre', 'Email', 'Phone', 'Website'],
    ];
    const tableBody = this.state.items.map(item => ({
      key: item.id,
      name: item.name,
      email: item.email,
      phone: item.phone,
      website: item.website,
    }));

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
