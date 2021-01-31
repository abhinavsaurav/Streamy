import _ from "lodash";
import {
	FETCH_STREAM,
	FETCH_STREAMS,
	CREATE_STREAM,
	EDIT_STREAM,
	DELETE_STREAM,
} from "../actions/types";

const streamReducer = (state = {}, action) => {
	switch (action.type) {
		case FETCH_STREAMS:
			// basically the mapKeys function from lodash will extract the id for each obj element and make it as a key and assign the
			// rest as values it won't affect the value object and it will remain same but just extract the value for 'id' for each obj
			// ... -> we are using this with mapKeys as the value will return a large object
			// and ... will attach to the current new object being created
			return { ...state, ..._.mapKeys(action.payload, "id") };
		case FETCH_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case CREATE_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case EDIT_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case DELETE_STREAM:
			return _.omit(state, action.payload); // we have just passed id as payload so we aren't referring the id as such and are using lodash to remove it from state and then return us a new state object
		default:
			return state;
	}
};

export default streamReducer;
