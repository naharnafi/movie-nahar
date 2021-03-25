import email from "../Assets/Images/email.png";
import fullname from "../Assets/Images/name.png";
import password from "../Assets/Images/password.png";
import username from "../Assets/Images/user.png";
import "../Styles/Register.css";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const [regData, setRegData] = useState({
    email: "",
    password: "",
    fullname: "",
    username: "",
  });

  const [regSuccess, setRegSuccess] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    setRegData({
      ...regData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    let data = {};
    const body = {
      email: regData.email,
      password: regData.password,
      fullname: regData.fullname,
      username: regData.username,
    };
    axios
      .post("https://laflix-api.herokuapp.com/api/register", body)
      .then((response) => {
        if (response.status === 200) {
          setRegSuccess("Register Complete");
          data = response;
        }
      });
    localStorage.setItem("user-info", JSON.stringify(data));
    history.push("login");
  };

  return (
    <>
      <div className="regis-form">
        <div className="box">
          <div className="form">
            <h3>Create Account</h3>
            <form onChange={handleChange}>
              <h3>Email</h3>
              <input type="text" name="email" className="input-form" required />
              <img src={email} alt="email" className="form-logo" />
              <br />
              <h4>Password</h4>
              <input
                type="password"
                name="password"
                className="input-form"
                required
              />
              <img src={password} alt="password" className="form-logo" />
              <br />
              <h4>Fullname</h4>
              <input
                type="text"
                name="fullname"
                className="input-form"
                required
              />
              <img src={fullname} alt="name" className="form-logo" />
              <br />
              <h4>Username</h4>
              <input
                type="text"
                name="username"
                className="input-form"
                required
              />
              <img src={username} alt="username" className="form-logo" />
              <br />
              <button className="regis-btn" onClick={handleRegister} required>
                Register
              </button>
              <br />
              <p>{regSuccess}</p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
