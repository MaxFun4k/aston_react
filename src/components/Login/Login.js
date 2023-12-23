import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import Form from "../Form/Form";
import { setUser } from "../../redux/slices/userSlice";


const Login = () => {

	const navigate = useNavigate();

	const dispatch = useDispatch();

	const handleLogin = (email, password) => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(({user}) => {
				dispatch(setUser({
					email: user.email,
					uid: user.uid,
					token: user.accessToken
				}));
				navigate("/");
			})
			.catch(() => alert("Invalid user!"));
	};

	return (
		<Form
			title="sign in"
			handleClick={handleLogin}/>
	);
};

export default Login;