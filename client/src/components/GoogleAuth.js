import React from "react";

class GoogleAuth extends React.Component {
	state = { isSignedIn: null };
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
					this.setState({ isSignedIn: this.auth.isSignedIn.get() });
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onAuthChange = () => {
		this.setState({ isSignedIn: this.auth.isSignedIn.get() });
	};

	// declaring helper method to make the code more readable but can be done inline

	onSignInClick = () => {
		this.auth.signIn();
	};

	onSignOutClick = () => {
		this.auth.signOut();
	};

	renderAuthButton() {
		if (this.state.isSignedIn === null) {
			return null;
		} else if (this.state.isSignedIn) {
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

export default GoogleAuth;
