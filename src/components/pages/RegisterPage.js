import { Link } from "react-router-dom";

import Register from "../Registere/Register";

export const RegisterPage = () => {
	return (
		<div style={{background: "white", 
			padding: "15px",
			marginLeft: "auto",
			marginRight: "auto",
			width: "30em"}}>
			<Register/>
			<p>
				Already have an account? <Link to="/login">Sign in</Link>
			</p>
		</div>
	);
};