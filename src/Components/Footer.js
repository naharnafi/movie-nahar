import Logo from "../Assets/Images/logo.png";
import GooglePlay from "../Assets/Images/google-play.png";
import Appstore from "../Assets/Images/app-store.png";
import Instagram from "../Assets/Images/instagram.png";
import Pinterest from "../Assets/Images/pinterest.png";
import Facebook from "../Assets/Images/facebook.png";
import Twitter from "../Assets/Images/twitter.png";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="section">
        <div className="about">
          <div className="logo">
            <img src={Logo} alt="LAFLIXTV" className="laflix-logo" />
            <h1>LAFLIXTV</h1>
          </div>
          <div className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
            explicabo saepe iste quod sapiente tempore blanditiis sequi
            laudantium, quisquam, vero neque architecto. Molestias culpa fugiat,
            odio ea quidem nemo aspernatur! Maiores, corrupti. Reprehenderit
            veritatis eveniet libero ducimus, ratione consequatur porro.
          </div>
        </div>
        <div className="link">
          <li>About Us</li>
          <li>Blog</li>
          <li>Service</li>
          <li>Career</li>
          <li>Media</li>
        </div>
        <div className="social">
          <h2>Download</h2>
          <div className="store">
            <img src={GooglePlay} alt="gstore" />
            <img src={Appstore} alt="appstore" />
          </div>
          <h2>Social Media</h2>
          <div className="social-media">
            <img src={Instagram} alt="instagram" />
            <img src={Pinterest} alt="pinterest" />
            <img src={Facebook} alt="facebook" />
            <img src={Twitter} alt="twitter" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        Copyright &copy;2021 LAFLIX B-DESIGN .All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
