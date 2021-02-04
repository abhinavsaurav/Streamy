import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modals";
import history from "../../history";

import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends React.Component {
	componentDidMount() {
		// console.log(this.props);
		this.props.fetchStream(this.props.match.params.id);
	}

	renderActions = () => {
		const { id } = this.props.match.params;
		return (
			//  if we use <div> inside instead of
			// <React.Fragment> or <> (empty tags <></>)  -> it will throw our styling off
			// The reason we are choosing one over the other coz some won't accept empty and some will not accept <React.Fragment>
			<>
				<button
					onClick={() => this.props.deleteStream(id)}
					className="ui button negative"
				>
					Delete
				</button>
				<Link to="/" className="ui button">
					Cancel
				</Link>
			</>
		);
	};

	renderContent() {
		if (!this.props.stream) {
			return "Are you sure you want to delete the stream?";
		}
		return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`;
	}

	render() {
		return (
			<Modal
				title="Delete Stream"
				content={this.renderContent()}
				actions={this.renderActions()}
				onDismiss={() => history.push("/")}
			/>
		);
	}
}

// the reason we want ownProps so that we can have that prop.match property and pull out the id of the stream
//  that we are suppose to be showing on this page
const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.streams[ownProps.match.params.id],
	};
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
	StreamDelete
);
