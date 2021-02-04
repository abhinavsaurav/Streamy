import React from "react";

//Notice we are importing ReactDOM which we normally don't do
import ReactDOM from "react-dom";
// to make the modal go away when we click elsewhere in the bg we are importing history object to reditect from the page
import history from "../history";

const Modal = (props) => {
	return ReactDOM.createPortal(
		<div
			onClick={() => history.push("/")}
			className="ui dimmer modals visible active"
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className="ui standard modal visible active"
			>
				<div className="header">{props.title}</div>
				<div className="content">{props.content}</div>
				<div className="actions">{props.actions}</div>
			</div>
		</div>,
		document.querySelector("#modal")
	);
};

export default Modal;
