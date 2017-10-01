import axios from 'axios';
import { browserHistory } from 'react-router';
import { 
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
  } from './types';

  import authReducer from '../reducers/auth_reducer';

  var config = {
       headers: { authorization: localStorage.getItem('token') }
    }

    export function signinUser({ email, password }){
      return function(dispatch){
        axios.post(`${ROOT_URL}/signin`, {email, password})
          .then(response => {
        
            dispatch({ type: AUTH_USER });
            localStorage.setItem('token', response.data.token);
            browserHistory.push('/newitem');
            
             })
          .catch(response =>  dispatch(authError("There was a something wrong with your request.")));
      }
    }