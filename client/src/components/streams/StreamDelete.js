import React from "react";
import Modal from "../Modals";

const StreamDelete = () => {
	const actions = (
		//  if we use div inside instead of <React.Fragment> it will throw our styling off
		<React.Fragment>
			<button className="ui button negative">Delete</button>
			<butotn className="ui button">Cancel</butotn>
		</React.Fragment>
	);

	return (
		<div>
			StreamDelete
			<Modal
				title="Delete Stream"
				content="Are you Sure you want to delete this stream?"
				actions={actions}
			/>
		</div>
	);
};

export default StreamDelete;
