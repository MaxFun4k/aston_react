import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate  } from "react-router-dom";

import Form from "../Form/Form";
import { setUser } from "../../redux/slices/userSlice";


const Register = () => {

	const navigate = useNavigate();

	const dispatch = useDispatch();

	const handleRegister = (email, password) => {
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
			.then(({user}) => {
				dispatch(setUser({
					email: user.email,
					id: user.uid,
					token: user.accessToken
				}));
				navigate("/");
			})
			.catch(()=>alert("Недействительный mail или пароль содержит меньше 6 символов!"));
	};

	return (
		<Form
			title="register"
			handleClick={handleRegister}/>
	);
};

export default Register;