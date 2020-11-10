import React, { Component } from "react";
// import axios from "axios";
import axios from '../../axios';

import Links from "../../components/Links/Links";
import Posts from './Posts/Posts';
import "./Blog.css";

class Blog extends Component {
	render() {
		return (
			<div>
				<Links />
				<Posts />
			</div>
		);
	}
}

export default Blog;
