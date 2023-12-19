import {useState} from "react";
import { Box, TextField, Button } from "@mui/material";

const Form = ({title, handleClick}) => {

	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");

	return (
		<Box
			component="form"
			sx={{
				"& > :not(style)": { m: 1, width: "25ch" },
			}}
			noValidate
			autoComplete="off">
			<TextField 
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				id="outlined-basic" 
				label="Email" 
				variant="outlined" />
			<TextField 
				type="password"
				value={pass}
				onChange={(e) => setPass(e.target.value)}
				id="outlined-basic" 
				label="Password" 
				variant="outlined"/>
			<Button
				onClick={() => handleClick(email, pass)}
				style={{color: "black", background: "rgb(15, 230, 15)"}}>
				{title}
			</Button>
		</Box>
	);
}; 

export default Form;