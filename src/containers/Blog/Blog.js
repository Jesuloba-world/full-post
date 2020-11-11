import React, { Component } from "react";
import { Route, Switch, Redirect} from "react-router-dom";

import Links from "../../components/Links/Links";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
// import FullPost from "./FullPost/FullPost";
import "./Blog.css";

class Blog extends Component {
	render() {
		return (
			<div>
				<Links />
				{/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
				<Switch>
					<Route path="/new-post" exact component={NewPost} />
					<Route path="/posts" component={Posts} />
					<Redirect from="/" to="/posts" />
				</Switch>
			</div>
		);
	}
}

export default Blog;
