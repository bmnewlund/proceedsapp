import { CREATE_FUND, FETCH_POST } from '../actions/types';

const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case CREATE_FUND:
			return { ...state, post: action.payload.data };
		case FETCH_POST:
			return { ...state, post: action.payload.data };
		default:
			return state;
	}
}