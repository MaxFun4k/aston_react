import { Link } from "react-router-dom";

import Login from "../Login/Login";

export const LoginPage = () => {
	return (
		<div style={{background: "white",
			padding: "15px", 
			marginLeft: "auto",
			marginRight: "auto",
			width: "30em"}}>
			<Login/>
			<p>
				Don't have an account? <Link to="/register">Register</Link>
			</p>
		</div>
	);
};
