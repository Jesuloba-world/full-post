import React from "react";

const link = (props) => (
	<li>
		<a href={props.link}>{props.name}</a>
	</li>
);

export default link;
