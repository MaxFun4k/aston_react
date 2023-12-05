import "./Header.css";
import { Search } from "../search/Search";

export function Header() {
	return (
		<header className="header">
			<div className="container">
				<div className="headerInner">
					<nav className="menu">
						<span>Music App</span>
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