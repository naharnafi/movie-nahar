import axios from "axios";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import "../Styles/Login.css";
import email from "../Assets/Images/email.png";
import password from "../Assets/Images/password.png";
import { useHistory, Link } from "react-router-dom";

const LoginPage = () => {
	const [logData, setLogData] = useState({
		email: "",
		password: "",
	});

	const [token, setToken] = useState("");
	const [userData, setUserData] = useState([]);

	const handleChange = (e) => {
		setLogData({
			...logData,
			[e.target.name]: e.target.value,
		});
	};

	const history = useHistory();

	const handleLogin = (e) => {
		e.preventDefault();
		const body = {
			email: logData.email,
			password: logData.password,
		};
		axios.post("https://laflix-api.herokuapp.com/api/login", body).then(
			(response) => {
				console.log(response);
				if (response.status === 200) {
					setToken(response.data.data.token);
					setUserData(jwt_decode(response.data.data.token));
					console.log(token);
					console.log(userData.username);
					localStorage.setItem(
						"name",
						jwt_decode(response.data.data.token)
							.username
					);
					localStorage.setItem(
						"my-token",
						response.data.data.token
					);
					localStorage.setItem(
						"user-info",
						JSON.stringify(
							jwt_decode(response.data.data.token)
						)
					);
					history.push("/");
					window.location.reload(true);
				}
			}
		);
	};

	useEffect(() => {
		if (localStorage.getItem("user-info")) {
			setUserData(JSON.parse(localStorage.getItem("user-info")));
		}
	}, []);

	return (
		<>
			<div className="login-form">
				<div className="box">
					<div className="form">
						{/* <h2>Welcome {userData.username}</h2>
                        <button onClick={logout}>Logout</button> */}
						<h1>Login LAFLIX</h1>
						<form onChange={handleChange}>
							<h3>Email</h3>
							<input
								type="text"
								name="email"
								className="input-form"
							/>
							<img
								src={email}
								alt="email"
								className="form-logo"
							/>
							<br />
							<h3>Password</h3>
							<input
								type="password"
								name="password"
								className="input-form"
							/>
							<img
								src={password}
								alt="password"
								className="form-logo"
							/>
							<br />
							<button
								onClick={handleLogin}
								className="login-btn"
							>
								Login
							</button>
							<br />
							<p>
								Doesn't Have One? Create an
								Account{" "}
								<Link to="/register">
									Create an Account
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default LoginPage;
