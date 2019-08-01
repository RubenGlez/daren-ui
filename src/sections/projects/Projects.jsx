import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import Layout from '../../components/layout/Layout';


class Projects extends Component {
  render() {
    const { projects } = this.props;
    return (
      <Layout>
        {projects && projects.map(project => {
          return (
            <div>{project.title}</div>
          );
        })}
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    projects: state.firestore.ordered.projects,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => ([{
    collection: 'projects',
    orderBy: ['createdAt', 'desc'],
    where: ['authorId', '==', props.auth.uid],
  }])),
)(Projects);
