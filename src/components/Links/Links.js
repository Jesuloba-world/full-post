import React from "react";

import Link from "./Link/Link";
import "./Links.css";

const links = (props) => (
	<header className="Links">
		<nav>
			<ul>
				<Link name="Posts" link="/posts" />
				<Link
					name="New Post"
					link={{
						pathname: "/new-post",
						hash: "#submit",
						search: "?quick-submit=true",
					}}
				/>
			</ul>
		</nav>
	</header>
);

export default links;
