import React from "react";
import { Router, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import StreamList from "./streams/StreamList";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";
import history from "../history";

// const pageOne = () => {
// 	return <div>pageOne</div>;
// };

// const pageTwo = () => {
// 	return <div>PageTwo</div>;
// };

const App = () => {
	return (
		<div className="ui container">
			<Router history={history}>
				<div>
					<Header />
					{/* //exact is a boolean value so we arent' specifying it we could specify like exact={true} */}
					{/* <Route path="/" exact component={pageOne}></Route>
					<Route path="/pg2" exact component={pageTwo}></Route> */}

					<Route path="/" exact component={StreamList} />
					<Route path="/streams/new" exact component={StreamCreate} />
					<Route path="/streams/edit/:id" exact component={StreamEdit} />
					<Route path="/streams/delete/:id" exact component={StreamDelete} />
					<Route path="/streams/show" exact component={StreamShow} />
				</div>
			</Router>
		</div>
	);
};

export default App;
