import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./Blog.css";

import Links from "../../components/Links/Links";
import Posts from "./Posts/Posts";
// import NewPost from "./NewPost/NewPost";
import asyncComponent from "../../hoc/asyncComponent";

const AsyncNewPost = asyncComponent(() => {
	return import("./NewPost/NewPost");
});

class Blog extends Component {
	state = {
		auth: true,
	};

	render() {
		return (
			<div>
				<Links />
				{/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
				<Switch>
					{this.state.auth ? (
						<Route path="/new-post" exact component={AsyncNewPost} />
					) : null}
					<Route path="/posts" component={Posts} />
					<Redirect from="/" to="/posts" />
					{/* <Route render={() => <h1>404, not found</h1>} /> */}
				</Switch>
			</div>
		);
	}
}

export default Blog;
