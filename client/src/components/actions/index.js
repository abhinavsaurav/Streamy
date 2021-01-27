import { SIGN_IN, SIGN_OUT } from "./types";
// these action creator will just flip the boolean flag in the redux store for auth state

export const signIn = (userId) => {
	return {
		type: SIGN_IN,
		payload: userId,
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT,
	};
};
