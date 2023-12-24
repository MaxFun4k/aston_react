import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Public } from "../../routes/Routes";
import ErrorBoundary from "../errorBounary/ErrorBoundary";
import { checkAuth } from "../../redux/action/authActions";
import { ThemeContext } from "../../context/ThemeContext";

export function App() {
	const dispatch = useDispatch();
	const [toggleTheme, setToggleTheme] = useState(true);

	const toggle = () => {
		setToggleTheme(!toggleTheme);
	};

	const valueToggle = {
		toggle,
		toggleTheme
	};

	useEffect(() => {
		dispatch(checkAuth());
	}, [dispatch]);


	return (
		<ThemeContext.Provider value={valueToggle}>
			<ErrorBoundary>
				<Public/>
			</ErrorBoundary>
		</ThemeContext.Provider>
	);
}