import { Navbar } from "react-bootstrap";
import logo from "../Assets/Images/logo.png";
import "../Styles/Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <Navbar fixed="top">
        <Navbar.Brand>
          <div className="home-logo">
            <img alt="laflix" src={logo} className="laflix-logo" />
            <h1>LAFLIX TV</h1>
          </div>
        </Navbar.Brand>
        <div className="input-bar">
          <input type="text" placeholder="Search Movie" />
          <button>Search</button>
        </div>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Signed in as: Guest</Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
