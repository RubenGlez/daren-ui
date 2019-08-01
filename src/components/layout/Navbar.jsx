import React, { useState, useRef, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';

import './Navbar.scss';
import { ReactComponent as Logo } from '../../assets/logo-dui.svg';

import { signOut } from '../../redux/actions/authActions';

import Avatar from '../Avatar';
import Icon from '../Icon';


const Navbar = props => {
  const [showUserDropdownPanel, setShowUserDropdownPanel] = useState(false);
  const userDropdownRef = useRef();
  const userId = props.auth.uid;
  const user = props.user && props.user[userId];

  const _hiddeUserDropdownPanel = useCallback((event, force) => {
    if (userDropdownRef.current.contains(event.target) && !force) return;
    setShowUserDropdownPanel(false);
    document.removeEventListener('mousedown', _hiddeUserDropdownPanel);
  }, []);

  const _showUserDropdownPanel = useCallback(event => {
    setShowUserDropdownPanel(true);
    document.addEventListener('mousedown', _hiddeUserDropdownPanel);
  }, [_hiddeUserDropdownPanel]);

  const _toggleUserDropdownPanel = event => {
    if (showUserDropdownPanel) _hiddeUserDropdownPanel(event, true);
    else _showUserDropdownPanel(event);
  };

  useEffect(() => {
    return () => {
      document.removeEventListener('mousedown', _hiddeUserDropdownPanel);
    };
  }, [_hiddeUserDropdownPanel]);


  return (
    <div className="dui-navbar">
      <div className="dui-navbar-container">
        <div className="dui-navbar-container-left">
          <Logo />
        </div>
        <div className="dui-navbar-container-right">

          {user &&
            <div
              ref={userDropdownRef}
              className="dui-user-dropdown">
              <div
                className="dui-user-dropdown-button"
                onClick={_toggleUserDropdownPanel}>
                <Avatar user={user} />
              </div>
              {showUserDropdownPanel &&
                <div className="dui-user-dropdown-panel">
                  <ul>
                    <li>
                      <Link
                        to={'/profile'}
                        className="dui-user-dropdown-panel-link">
                        <Icon name={'user'} />
                        <span className="dui-user-dropdown-panel-link-text">Perfil</span>
                      </Link>
                    </li>
                    <li>
                      <span className="dui-user-dropdown-panel-divider" />
                    </li>
                    <li>
                      <span
                        className="dui-user-dropdown-panel-link"
                        onClick={props.signOut}>
                        <Icon name={'log-out'} />
                        <span className="dui-user-dropdown-panel-link-text">Cerrar sesión</span>
                      </span>
                    </li>
                  </ul>
                </div>
              }
            </div>
          }

        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    user: state.firestore.data.users,
  };
};

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => ([{
    collection: 'users',
    doc: props.auth.uid,
  }])),
)(Navbar);
