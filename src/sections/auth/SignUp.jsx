import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../redux/actions/authActions';


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.signUp(this.state);
  }

  handleChange(e) {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  }

  render() {
    return (
      <div className="signup">
        <p>Registrarse</p>

        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={this.handleChange} value={this.state.email} />

        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" onChange={this.handleChange} value={this.state.password} />

        <label htmlFor="firstName">Nombre</label>
        <input type="text" id="firstName" onChange={this.handleChange} value={this.state.firstName} />

        <label htmlFor="lastName">Apellidos</label>
        <input type="text" id="lastName" onChange={this.handleChange} value={this.state.lastName} />

        {this.props.authError &&
          <p>{this.props.authError}</p>
        }

        <button onClick={this.handleClick}>Registrarse</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authError: state.auth.authError,
});

const mapDispatchToProps = dispatch => ({
  signUp: newUser => dispatch(signUp(newUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
