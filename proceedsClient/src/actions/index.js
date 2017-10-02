import axios from 'axios';
import { browserHistory } from 'react-router';
import { 
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  CREATE_FUNDS
  } from './types';

  import authReducer from '../reducers/auth_reducer';

  const ROOT_URL = 'http://localhost:3000/api';

  var config = {
       headers: { authorization: localStorage.getItem('token') }
    }

    export function signinUser({ email, password }){
      return function(dispatch){
        axios.post(`${ROOT_URL}/login`, {email, password})
          .then(response => {
        
            dispatch({ type: AUTH_USER });
            localStorage.setItem('token', response.data.token);
            browserHistory.push('/newfundraiser');
            
             })
          .catch(response =>  dispatch(authError("There was a something wrong with your request.")));
      }
    }

    export function signoutUser(){
       localStorage.removeItem('token'); 
       return {type: UNAUTH_USER};
    }


    export function signupUser({ email, password }) {
          return function(dispatch) {
            // Submit email/password to the server
            axios.post(`${ROOT_URL}/user`, { email, password })
              .then(response => {
                dispatch({type: AUTH_USER});
                  
                  //update the token
                  localStorage.setItem('token', response.data.token);
                  browserHistory.push('/newfundraiser');
              })
              .catch(response => dispatch(authError(response.data.error)));
          }
        }

    export function createFund(props) {
      return function(dispatch){
        axios.post(`${ROOT_URL}/newfund`, { props }, config )
        .then(request => {
            dispatch({
              type: CREATE_FUNDS,
              payload: request
            })
          browserHistory.push('/funds');
        });
      }
    }

