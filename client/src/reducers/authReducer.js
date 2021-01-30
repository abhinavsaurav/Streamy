import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
	isSignedIn: null,
	userId: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
	// we are doing the bracket thing to make change to the addr === sign so that it updates or adds
	// otherwise our reducers are not gonna work
	//if you miss the type then the button will not show up
	switch (action.type) {
		case SIGN_IN:
			return { ...state, isSignedIn: true, userId: action.payload };
		case SIGN_OUT:
			return { ...state, isSignedIn: false, userId: null };
		default:
			return state;
	}
};

export default authReducer;
