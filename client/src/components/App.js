import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const pageOne = () => {
	return <div>pageOne</div>;
};

const pageTwo = () => {
	return <div>PageTwo</div>;
};

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					{/* //exact is a boolean value so we arent' specifying it we could specify like exact={true} */}
					<Route path="/" exact component={pageOne}></Route>
					<Route path="/pg2" exact component={pageTwo}></Route>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
