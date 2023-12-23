import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Public } from "../../routes/Routes";
import ErrorBoundary from "../errorBounary/ErrorBoundary";
import { checkAuth } from "../../redux/action/authActions";

export function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkAuth());
	}, [dispatch]);


	return (
		<ErrorBoundary>
			<Public />
		</ErrorBoundary>
	);
}