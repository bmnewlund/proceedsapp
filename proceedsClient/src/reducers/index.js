import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth_reducer';
import { reduxForm as form } from 'redux-form';

	const rootReducer = combineReducers({
		auth : authReducer,
		form : formReducer
	});
	export default rootReducer;
