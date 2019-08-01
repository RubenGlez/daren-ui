import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Layout from '../../components/layout/Layout';
import Spinner from '../../components/Spinner';
import ProfileForm from './ProfileForm';
import { updateUser } from '../../redux/actions/userActions';
import './Profile.scss';


class ProfileContainer extends Component {
  render() {
    const { uid } = this.props.auth;
    const userObj = this.props.user;
    const user = userObj && userObj[uid];

    if (!user) return <Spinner />;

    return (
      <Layout>
        <ProfileForm
          user={user}
          userId={uid}
          updateUser={this.props.updateUser}
        />
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateUser: (id, user) => dispatch(updateUser(id, user)),
});

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.firebase.auth,
    user: state.firestore.data.users,
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => ([{
    collection: 'users',
    doc: props.auth.uid,
  }])),
)(ProfileContainer);
