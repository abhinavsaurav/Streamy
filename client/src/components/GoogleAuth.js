import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "./actions";

class GoogleAuth extends React.Component {
	// removing state intialization because we making use of a redux store
	// state = { isSignedIn: null };

	componentDidMount() {
		// we used window because by itself it will give a warning but using it. It knows that the window optn is available.
		// After the successfull loading(which may take some time). we will use the call back function to run some additional code
		// Basically scope is what we want to get access to from the user so we are asking permission
		window.gapi.load("client:auth2", () => {
			window.gapi.client
				.init({
					clientId:
						"360889915830-82gavr5fo1kse0jflj3vs9h52joln1pj.apps.googleusercontent.com",
					scope: "email",
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.onAuthChange(this.auth.isSignedIn.get());

					//
					// this.setState({ isSignedIn: this.auth.isSignedIn.get() });
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	//the listen function passes a boolean value
	onAuthChange = (isSignedIn) => {
		// this.setState({ isSignedIn: this.auth.isSignedIn.get() });
		if (isSignedIn) {
			//calling the action creator and passing in the unique userid google creates when a email is created
			this.props.signIn(this.auth.currentUser.get().getId());
		} else {
			this.props.signOut();
		}
	};

	// declaring helper method to make the code more readable but can be done inline

	onSignInClick = () => {
		this.auth.signIn();
	};

	onSignOutClick = () => {
		this.auth.signOut();
	};

	renderAuthButton() {
		// if (this.state.isSignedIn === null) {       /// similarly for below
		if (this.props.isSignedIn === null) {
			return null;
		} else if (this.props.isSignedIn) {
			return (
				<button onClick={this.onSignOutClick} className="ui red google button">
					<i className="google icon" />
					Sign Out
				</button>
			);
		} else {
			return (
				<button onClick={this.onSignInClick} className="ui red google button">
					<i className="google icon" />
					Sign in with google
				</button>
			);
		}
	}

	render() {
		return <div>{this.renderAuthButton()}</div>;
	}
}

const mapStateToProps = (state) => {
	return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
