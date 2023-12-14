import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Header } from "../header/Header";
import { ComponentsTracks } from "../pages/componentsTracks/ComponentsTracks";
import { Page404 } from "../pages/404";

export function App() {
	return (
		<Router>
			<Header/>
			<Routes>
				<Route path="/" element = {<ComponentsTracks/>}/>
				<Route path="*" element = {<Page404/>}/>
			</Routes>
		</Router>
	);
}