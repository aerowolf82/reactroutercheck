import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import About from './Components/About'
import Profiles from './Components/Profiles'
// import Checkout from './Components/Checkout'
import Header from './Components/Header'
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav className="Nav">
            <Route path='/:page' component={Header} />
            <Route exact path='/' component={Header} />
          </nav>
        </header>

        <Route path="/about" component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />

      </div>
    </Router>
  );
}

export default App;
