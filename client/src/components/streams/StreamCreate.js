import React from "react";
// Field is a react component whereas reduxForm is a function
// import { Field, reduxForm } from "redux-form";

import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
	onSubmit = (formValues) => {
		this.props.createStream(formValues);
	};

	render() {
		// console.log(this.props);
		// label is a prop
		return (
			<div>
				<h3>Create Stream</h3>
				<StreamForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

// first arg mapStateToProps as a 2nd arg we put our action creator key-value pair
export default connect(null, { createStream })(StreamCreate);
