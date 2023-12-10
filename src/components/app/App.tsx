// import Routes from '../../routes/Routes.tsx';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Header } from "../header/Header";
import { ComponentsTracks } from "../componentsTracks/ComponentsTracks";
import ErrorBounary from "../errorBounary/ErrorBounary";

export function App() {
	return (
		// <>
		// 	<Header/>
		// 	<ErrorBounary>
		// 		<ComponentsTracks/>
		// 	</ErrorBounary>
		// </>
		<Router>
			<Header/>
			<main>
				<Routes>
					<Route path="/" element = {<ComponentsTracks/>}/>
				</Routes>
			</main>
		</Router>
	);
}