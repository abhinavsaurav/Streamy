import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
	componentDidMount() {
		console.log(this.props);

		// this is basically just calling the action creator for the userId for which the user wants to be edited and is
		// supplied in the browser
		this.props.fetchStream(this.props.match.params.id);
	}

	onSubmit = (formValues) => {
		// this.props.onSubmit(formValues);
		console.log(formValues);
		this.props.editStream(this.props.match.params.id, formValues);
	};

	render() {
		// console.log(this.props.stream.title);
		if (!this.props.stream.title) {
			return <div>Loading...</div>;
		}
		return (
			<div>
				<h3>Edit a Stream</h3>
				<StreamForm
					// A special prop in JSX for initial Value (Remember the StreamForm is taking value an processing it after its passed)
					// it CONTAINS FIELD NAMES as KEY which are title and description for the page
					// initialValues={{ title: "Edit stream", description: "hello" }}
					// initialValues={this.props.stream} -----> don't do this as this passes all the values which don't need update too. IT can cause errors with some apis
					//  ACCEPTED ways
					// 1.
					// initialValues= {{ title: this.props.stream.title, description: this.props.stream.description }}
					// 2.
					// pick returns a new object with the value which we need from the argument object passed to it
					initialValues={_.pick(this.props.stream, "title", "description")}
					onSubmit={this.onSubmit}
				/>
			</div>
		);
	}
}

// state is our redux store
// ownProps is our functions props which are getting passed down from the route functions when we are pasisng this (or if not check where)
const mapStateToProps = (state, ownProps) => {
	// console.log("own:" + ownProps);
	// console.log(` ${state}`);
	return {
		stream: state.streams[ownProps.match.params.id],
	};
};

export default connect(mapStateToProps, { fetchStream, editStream })(
	StreamEdit
);
