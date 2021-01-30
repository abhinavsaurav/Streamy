import React from "react";
// Field is a react component whereas reduxForm is a function
import { Field, reduxForm } from "redux-form";

import { connect } from "react-redux";
import { createStream } from "../../actions";

class StreamCreate extends React.Component {
	// error is the destructured error message from the meta object
	// touched is a boolean value which becomes true when u select a field and come out of it or lose the focus after selecting one time
	renderError = ({ error, touched }) => {
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	};

	renderInput = ({ input, label, meta }) => {
		// console.log(formProps);

		// autoComplete="off" to turn off the autocomplete
		// console.log(meta);

		// the div having className of error makes the error red
		const className = `field ${meta.touched && meta.error ? "error" : ""}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off" />
				{this.renderError(meta)}
			</div>
		);
	};

	//this
	onSubmit = (formValues) => {
		this.props.createStream(formValues);
	};

	render() {
		// console.log(this.props);
		// label is a prop
		return (
			// on passing the prop the handleSubmit handles the form events and after its done our callback gets invoked this will contain
			// error in classname displays the error on screen otherwise by default the display is set to none for the error message in semantic ui
			<form
				onSubmit={this.props.handleSubmit(this.onSubmit)}
				className="ui form error"
			>
				<Field
					name="title"
					component={this.renderInput}
					label="enter a title"
				/>
				<Field
					name="description"
					component={this.renderInput}
					label="Enter Description"
				/>
				<button className="ui primary button">Submit</button>
			</form>
			// <div>Hello</div>
		);
	}
}

// this validate function will be called by redux form to validate the input whatever changes occurs
const validate = (formValues) => {
	const errors = {};

	if (!formValues.title) {
		errors.title = "You must enter a title";
	}

	if (!formValues.description) {
		errors.description = "You must enter a description";
	}

	return errors;
};

const formWrapped = reduxForm({
	form: "streamCreate",
	validate, //using the es6 syntax here for key:value pair for validation
})(StreamCreate);

// we can also put the reduxForm thing directly and it would work but for legibility we are doing the above

// first arg mapStateToProps as a 2nd arg we put our action creator key-value pair
export default connect(null, { createStream })(formWrapped);
