import { Link } from "react-router-dom";
import { FC } from "react";

import ErrorMessage from "../errorMessage/ErrorMessage";

export const Page404:FC = () => {
	return  (
		<div>
			<ErrorMessage/>
			<Link to="/">
				back to main page
			</Link>
		</div>
	);
};
