import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Home extends Component {
  onClick(e) {
    e.preventDefault();
    // const form = document.getElementById('login');
    // const formData = new FormData(form);

    // fetch('http://localhost:4000/api/signin', {
    //   method: 'POST',
    //   body: formData,
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     localStorage.setItem('token', data.token);
    //   });
  }

  render() {
    return (
      <div className="dui-home">
        <Link to={'/sandbox'}>Sandbox</Link>

        <h2>Login</h2>
        <form id="login" method="post">
          <input type="text" name="email" />
          <input type="text" name="password" />
          <input type="submit" value="enviar" onClick={this.onClick} />
        </form>
      </div>
    );
  }
}
