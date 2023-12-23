import {useSelector} from "react-redux";

export const useAuth = () => {
	const {email, token, uid} = useSelector(state => state.user);

	return {
		isAuth: !!email,
		email,
		token,
		uid
	};
};