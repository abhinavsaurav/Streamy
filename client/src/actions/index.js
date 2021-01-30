import { formValues } from "redux-form";
import streams from "../apis/streams";
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

// will use short syntax but just for not i will tell what's this
// we are creating a asynchronous action creator that will call or
// make req. So, we will pass down the formvalues to this action creator from
// streamCreate and then since async req so we will use dispatch funct
// to manually dispatch the req

// export const createStream=(formValues) =>{
// 	return (dispatch) =>{
// 	};
// };

export const createStream = (formvalues) => async (dispatch) => {
	streams.post("/streams", formValues);
};
