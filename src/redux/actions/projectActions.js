export const CREATE_PROJECT = 'CREATE_PROJECT';
export const CREATE_PROJECT_ERROR = 'CREATE_PROJECT_ERROR';
export const UPDATE_PROJECT = 'UPDATE_PROJECT';
export const UPDATE_PROJECT_ERROR = 'UPDATE_PROJECT_ERROR';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const DELETE_PROJECT_ERROR = 'DELETE_PROJECT_ERROR';


export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const auth = getState().firebase.auth;
    firestore.collection('projects').add({
      title: project.title,
      content: project.content,
      authorId: auth.uid,
      createdAt: new Date(),
    }).then(() => {
      dispatch({
        type: CREATE_PROJECT,
        project,
      });
    }).catch(error => {
      dispatch({
        type: CREATE_PROJECT_ERROR,
        error,
      });
    });
  };
};


export const updateProject = (id, project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('projects').doc(id).update({
      title: project.title,
      content: project.content,
      updatedAt: new Date(),
    }).then(() => {
      dispatch({
        type: UPDATE_PROJECT,
        project,
      });
    }).catch(error => {
      dispatch({
        type: UPDATE_PROJECT_ERROR,
        error,
      });
    });
  };
};


export const deleteProject = id => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('projects').doc(id).delete()
      .then(() => {
        dispatch({
          type: DELETE_PROJECT,
          id,
        });
      }).catch(error => {
        dispatch({
          type: DELETE_PROJECT_ERROR,
          error,
        });
      });
  };
};
