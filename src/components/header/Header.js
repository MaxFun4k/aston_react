import { Link, useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { Button } from "@mui/material";

import { Search } from "../search/Search";
import {useAuth} from "../../hooks/useAuth";
import { removeUser } from "../../redux/slices/userSlice";

import image from "./Green-Music-Note-Neonkyltti.jpg";
import "./Header.css";


export function Header() {

	const dispatch = useDispatch();
	const {isAuth} = useAuth(); 
	const navigate = useNavigate();

	return !isAuth ? (
		<header className="header">
			<div className="container">
				<div className="headerInner">
					<nav className="menu">
						<Link to={"/"} style={{ color: "inherit", textDecoration: "inherit"}}>
							<span>Music App</span>
							<img src={image} alt="" style={{width: "30px", height: "30px"}}/>
						</Link>
						<ul className="menuList">
							<Link to={"/register"} style={{ color: "inherit", textDecoration: "inherit"}}>
								<li>Registration</li>
							</Link>
							<Link to={"/login"} style={{ color: "inherit", textDecoration: "inherit"}}>
								<li>Sign in</li>
							</Link>
						</ul>
					</nav>
					<Search/>
				</div>
			</div>
		</header>
	) : (
		<header className="header">
			<div className="container">
				<div className="headerInner">
					<nav className="menu">
						<Link to={"/"} style={{ color: "inherit", textDecoration: "inherit"}}>
							<span>Music App</span>
							<img src={image} alt="" style={{width: "30px", height: "30px"}}/>
						</Link>
						<ul className="menuList">
							<Link to={"/history"} style={{ color: "inherit", textDecoration: "inherit"}}>
								<li>History</li>
							</Link>
							<Link to={"/favorite"} style={{ color: "inherit", textDecoration: "inherit"}}>
								<li>Favorite</li>
							</Link >
							<li>
								<Button 
									onClick={() => {
										dispatch(removeUser());
										navigate("/");
									}} 
									variant="contained"
									style={{color: "black", background: "rgb(15, 230, 15)"}}>
									Out
								</Button>
							</li>
						</ul>
					</nav>
					<Search/>
				</div>
			</div>
		</header>
	);
}