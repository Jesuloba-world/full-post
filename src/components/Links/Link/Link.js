import React from "react";
import { NavLink } from "react-router-dom";

const link = (props) => (
	<li>
		<NavLink to={props.link} exact>
			{props.name}
		</NavLink>
	</li>
);

export default link;
