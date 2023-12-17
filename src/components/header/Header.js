import { Link } from "react-router-dom";

import { Search } from "../search/Search";

import image from "./Green-Music-Note-Neonkyltti.jpg";
import "./Header.css";


export function Header() {
	return (
		<header className="header">
			<div className="container">
				<div className="headerInner">
					<nav className="menu">
						<Link to={"/"} style={{ color: "inherit", textDecoration: "inherit"}}>
							<span>Music App</span>
							<img src={image} alt="" style={{width: "30px", height: "30px"}}/>
						</Link>
						<ul className="menuList">
							<li>Registration</li>
							<li>Sign in</li>
						</ul>
					</nav>
					<Search/>
				</div>
			</div>
		</header>
	);
}