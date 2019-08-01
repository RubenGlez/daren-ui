import { UPDATE_USER, UPDATE_USER_ERROR } from '../actions/userActions';


const userReducer = (state = {}, action) => {
  switch (action.type) {
  case UPDATE_USER:
    console.log('usuario actualizado', action.user);
    return state;
  case UPDATE_USER_ERROR:
    console.log('error actualizando el usuario', action.error);
    return state;
  default:
    return state;
  }
};

export default userReducer;
