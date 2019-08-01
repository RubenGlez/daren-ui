import {
  CREATE_PROJECT,
  CREATE_PROJECT_ERROR,
  UPDATE_PROJECT,
  UPDATE_PROJECT_ERROR,
  DELETE_PROJECT,
  DELETE_PROJECT_ERROR,
} from '../actions/projectActions';


const projectReducer = (state = {}, action) => {
  switch (action.type) {
  case CREATE_PROJECT:
    console.log('proyecto creado', action.project);
    return state;
  case CREATE_PROJECT_ERROR:
    console.log('error creando el proyecto', action.error);
    return state;
  case UPDATE_PROJECT:
    console.log('proyecto actualizado', action.project);
    return state;
  case UPDATE_PROJECT_ERROR:
    console.log('error actualizando el proyecto', action.error);
    return state;
  case DELETE_PROJECT:
    console.log('proyecto borrado', action.id);
    return state;
  case DELETE_PROJECT_ERROR:
    console.log('error borrando el proyecto', action.error);
    return state;
  default:
    return state;
  }
};

export default projectReducer;
