import React from "react";
// Field is a react component whereas reduxForm is a function
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
	renderInput({ input }) {
		// console.log(formProps);
		// return (
		// 	<input
		// 		onChange={formProps.input.onChange}
		// 		value={formProps.input.value}
		// 	/>
		// );

		// a shorter way to write the same return statement is
		return <input {...input} />;
	}

	render() {
		// console.log(this.props);
		return (
			<form>
				<Field name="title" component={this.renderInput} />
				<Field name="description" component={this.renderInput} />
			</form>
			// <div>Hello</div>
		);
	}
}

export default reduxForm({ form: "streamCreate" })(StreamCreate);
