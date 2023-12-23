import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { Button } from "@mui/material";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { Search } from "../search/Search";
import {useAuth} from "../../hooks/useAuth";
import { removeUser } from "../../redux/slices/userSlice";
import { themeContext } from "../../context/themeContext";

import image from "./Green-Music-Note-Neonkyltti.jpg";
import "./Header.css";


const Header = () => {

	const context = useContext(themeContext);

	const dispatch = useDispatch();
	const {isAuth} = useAuth(); 
	const navigate = useNavigate();
	const {statusAuth} = useSelector(state => state.user);

	if (statusAuth !== "SUCCESS") {
		return null;
	}
	

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
							<DarkModeIcon style={{color: "rgb(15, 230, 15)"}}/>
							<LightModeIcon style={{color: "rgb(15, 230, 15)"}}/>
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
							<DarkModeIcon style={{color: "rgb(15, 230, 15)"}}/> 
							<LightModeIcon style={{color: "rgb(15, 230, 15)"}}/>
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
};

export default Header;