import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../redux/actions/authActions';

import Layout from '../../components/layout/Layout';
import Card from '../../components/Card';
import Input from '../../components/form/Input';
import Button from '../../components/Button';
import './SignIn.scss';


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.signIn(this.state);
  }

  handleChange(e, value, fieldId) {
    this.setState({ [fieldId]: value });
  }

  render() {
    const { authError } = this.props;
    return (
      <Layout hasNavbar={false} className={'signin'}>
        <Card title={'Iniciar sesión'}>
          <Input
            fieldId={'email'}
            label={'Correo electrónico'}
            value={this.state.email}
            placeholder={'Correo electrónico'}
            iconLeft={null}
            error={null}
            onBlur={this.handleChange}
          />

          <Input
            fieldId={'password'}
            label={'Contraseña'}
            value={this.state.password}
            placeholder={'Contraseña'}
            iconLeft={null}
            error={null}
            onBlur={this.handleChange}
          />

          {authError && <div className="signin-error">{authError.message}</div>}

          <Button
            text={'Iniciar sesión'}
            onClick={this.handleClick}
          />
        </Card>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  authError: state.auth.authError,
});

const mapDispatchToProps = dispatch => ({
  signIn: credentials => dispatch(signIn(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
