import streams from "../apis/streams";
import {
	SIGN_IN,
	SIGN_OUT,
	CREATE_STREAM,
	FETCH_STREAMS,
	FETCH_STREAM,
	DELETE_STREAM,
	EDIT_STREAM,
} from "./types";
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

export const createStream = (formValues) => async (dispatch) => {
	const response = await streams.post("/streams", formValues);
	dispatch({
		type: CREATE_STREAM,
		payload: response.data,
	});
};

export const fetchStreams = () => async (dispatch) => {
	const response = await streams.get("/streams");
	dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id) => async (dispatch) => {
	const response = await streams.get(`/streams/${id}`);
	dispatch({
		type: FETCH_STREAM,
		payload: response.data,
	});
};

export const editStream = (id, formValue) => async (dispatch) => {
	const response = await streams.put(`/streams/${id}`, formValue);
	dispatch({
		type: EDIT_STREAM,
		payload: response.data,
	});
};

export const deleteStream = (id) => async (dispatch) => {
	await streams.delete(`/streams/${id}`);
	dispatch({ type: DELETE_STREAM, payload: id });
};
