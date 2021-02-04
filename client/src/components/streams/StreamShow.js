import React from "react";
import flv from "flv.js";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamShow extends React.Component {
	//creating a ref to the <video /> element
	constructor(props) {
		super(props);

		// Always forgetting
		this.videoRef = React.createRef();
	}

	// Example of SOME TASK THAT NEEDED TO HAPPEN NO MATTER WHAT IT SHOULD RUN NO MATTER WHAT
	// so the idea for build player is any time the componenet is loaded it is called from didMount method and if
	// the element is rerendered something like that componentdidUpdate will be called

	componentDidMount() {
		// console.log(this.props);
		// console.log(this.videoRef);
		const { id } = this.props.match.params;
		this.props.fetchStream(id);

		this.buildPlayer();
	}

	// for anytime the componenet updates
	componentDidUpdate() {
		this.buildPlayer();
	}

	// Perfect place to do cleanup
	componentWillUnmount() {
		// Basically telling to detach itself from the video and
		this.player.destroy();
	}

	buildPlayer() {
		const { id } = this.props.match.params;

		// if we don't have a player or is first rendered we are simply gonna return or if there is nothing in stream prop we are gonna return
		if (this.player || !this.props.stream) {
			return;
		}
		// this can be implemented elsewhere in the program also and we do not need to specify it here. Also, we are assuming id as our key
		// which is how the video file will be saved inside the obs also i guess
		// using the steps as listed in the flv.js docs
		this.player = flv.createPlayer({
			type: "flv",
			url: `http://localhost:8000/live/${id}.flv`,
		});
		// for accessing the ref property we are using current
		this.player.attachMediaElement(this.videoRef.current);
		this.player.load();
		// we are not gonna use the .play() option listed in the docs as a lot of browser just doesn't allow this
	}

	render() {
		if (!this.props.stream) {
			return <div>loading</div>;
		}

		const { title, description } = this.props.stream;
		return (
			<div>
				{/* // the 2 curly braces denotes object
					// controls={true} or controls only works
				*/}
				<video ref={this.videoRef} style={{ width: "100%" }} controls={true} />
				<h1>{title}</h1>
				<h5>{description}</h5>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.streams[ownProps.match.params.id],
	};
};
export default connect(mapStateToProps, { fetchStream })(StreamShow);
