import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form"; // we might have many reducer so to avoid confusion we can optionally use another name for it using 'as'
import authReducer from "./authReducer";

export default combineReducers({
	auth: authReducer,
	form: formReducer,
});
