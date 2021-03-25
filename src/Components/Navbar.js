import Logo from "../Assets/Images/logo.png";
import React from "react";
import "../Styles/NavBar.css";
import { NavLink, useHistory } from "react-router-dom";
import logout from "../Assets/Images/log-out.png";

const Navbar = () => {
	const history = useHistory();

	const logOut = () => {
		localStorage.clear();
		history.push("/login");
		window.location.reload(true);
	};

	const logInfo = localStorage.getItem("user-info");
	console.log(logInfo);

	return (
		<div className="navbar">
			<div className="container">
				<NavLink exact to="/" className="nav-link">
					<div className="logo-wrapper">
						<img
							alt=""
							src={Logo}
							className="laflix-logo"
						/>
						<h3>LAFLIXTV</h3>
					</div>
				</NavLink>
				{localStorage.getItem("user-info") ? (
					<>
						<div className="signin-route">
							<NavLink
								className="watch-list"
								to="/watch-list"
							>
								<h3>Watchlist</h3>
							</NavLink>
							<h5 className="username">
								Sign In as:{" "}
								{localStorage.getItem("name")}
							</h5>
						</div>
						<div>
							<img
								src={logout}
								onClick={logOut}
								alt="logout"
								className="logout-btn"
							/>
						</div>
					</>
				) : (
						<>
							<NavLink to="/login">
								<h3>SignIn</h3>
							</NavLink>
						</>
					)}
			</div>
		</div>
	);
};

export default Navbar;
