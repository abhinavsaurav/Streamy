import React from "react";
// Field is a react component whereas reduxForm is a function
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
	renderInput({ input, label, meta }) {
		// console.log(formProps);

		return (
			<div className="field">
				<label>{label}</label>
				<input {...input} />
				<div>{meta.error}</div>
			</div>
		);
	}

	//this
	onSubmit(formValues) {
		console.log(formValues);
	}

	render() {
		// console.log(this.props);
		// label is a prop
		return (
			// on passing the prop the handleSubmit handles the form events and after its done our callback gets invoked this will contain
			<form
				onSubmit={this.props.handleSubmit(this.onSubmit)}
				className="ui form"
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

export default reduxForm({
	form: "streamCreate",
	validate, //using the es6 syntax here for key:value pair for validation
})(StreamCreate);
