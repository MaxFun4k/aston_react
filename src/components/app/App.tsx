import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import { Header } from "../header/Header";
import { ComponentsTracks } from "../pages/componentsTracks/ComponentsTracks";
import { SingleTrackPage } from "../pages/singleTrackPage/SingleTrackPage";
import { Page404 } from "../pages/404";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { History } from "../pages/history/History";
import { Favorite } from "../pages/favorite/Favorite";

import Player from "../player/Player";

export function App() {
	return (
		<Router>
			{/* <Header/> */}
			<Routes>
				<Route path="/" element = {<ComponentsTracks/>}/>
				<Route path="*" element = {<Page404/>}/>
				<Route path="/history" element = {<History/>}/>
				<Route path="favorite" element = {<Favorite/>}/>
				<Route path="/login" element = {<LoginPage/>}/>
				<Route path="/register" element = {<RegisterPage/>}/>
				<Route path="/track/:trackId" element = {<SingleTrackPage/>}/>
			</Routes>
			<Player/>
		</Router>
	);
}