import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Header } from "../header/Header";
import { ComponentsTracks } from "../pages/componentsTracks/ComponentsTracks";
import { SingleTrackPage } from "../pages/singleTrackPage/SingleTrackPage";
import { Page404 } from "../pages/404";
import Player from "../player/Player";

export function App() {
	return (
		<Router>
			<Header/>
			<Routes>
				<Route path="/" element = {<ComponentsTracks/>}/>
				<Route path="*" element = {<Page404/>}/>
				<Route path="/:trackId" element = {<SingleTrackPage/>}/>
			</Routes>
			<Player/>
		</Router>
	);
}