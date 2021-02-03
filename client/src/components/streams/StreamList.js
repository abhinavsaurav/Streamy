import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

class StreamList extends React.Component {
	componentDidMount() {
		this.props.fetchStreams();
	}

	// calling it renderAdmin just to add buttons whenever the user created streams are displayed to
	renderAdmin(stream) {
		// not this.props.auth because we aren't providing the auth values inside the connect function to change the value
		// we are passing the current userId's as currentUserId in our state variable and then using it
		if (stream.userId === this.props.currentUserId) {
			return (
				<div className="right floated content">
					<Link to={`/streams/edit/${stream.id}`} className="ui button primary">
						Edit
					</Link>
					<button className="ui button negative">Delete</button>
				</div>
			);
		}
	}

	renderList = () => {
		return this.props.streams.map((stream) => {
			return (
				<div className="item" key={stream.id}>
					{/* // In order for semantic ui to style properly the button is rendered first and then displayed */}
					{this.renderAdmin(stream)}
					<i className="large middle aligned icon camera" />
					<div className="content">
						{stream.title}
						<div className="description">{stream.description}</div>
					</div>
				</div>
			);
		});
	};

	// renderCreate is used for displaying a button if a user is logged in
	renderCreate() {
		if (this.props.isSignedIn) {
			return (
				<div style={{ textAlign: "right" }}>
					{/* Not a actual button but styling it as a button */}
					<Link to="/streams/new" className="ui button primary">
						Create Stream
					</Link>
				</div>
			);
		}
	}

	render() {
		// console.log(this.props.streams);
		return (
			<div>
				<h2>Streams</h2>
				<div className="ui celled list">{this.renderList()}</div>
				{this.renderCreate()}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	// console.log(state);
	// Object.values() returns the streams values as an array
	return {
		streams: Object.values(state.streams),
		currentUserId: state.auth.userId,
		isSignedIn: state.auth.isSignedIn,
	};
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
