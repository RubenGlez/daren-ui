import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
} from '../actions/authActions';


const initialState = {
  authError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
  case LOGIN_SUCCESS:
    console.log('Iniciando sesión');
    return {
      ...state,
      authError: null,
    };
  case LOGIN_ERROR:
    console.log('Error en el inicio de sesión');
    return {
      ...state,
      authError: action.error,
    };
  case SIGNOUT_SUCCESS:
    console.log('Cerrando sesión');
    return state;
  case SIGNUP_SUCCESS:
    console.log('Usuario creado');
    return {
      ...state,
      authError: null,
    };
  case SIGNUP_ERROR:
    console.log('Error creando usuario');
    return {
      ...state,
      authError: action.error,
    };
  default:
    return state;
  }
};

export default authReducer;
