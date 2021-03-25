import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import DetailPage from "./Pages/Detail/DetailPage";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Watchlist from "./Pages/Watchlist";
import './Styles/App.css'
import LoginPage from "./Components/Login";
import Register from "./Components/Register";
// import Navigation from "./Components/Navbar2";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/detail/:id" component={DetailPage} />
          <Route path="/watch-list" component={Watchlist} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={Register} />
          <Route path="/watch-list" component={Watchlist} />
          <Route exact path="/" component={Homepage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
