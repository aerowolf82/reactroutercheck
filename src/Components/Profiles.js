import IndivProfile from "./IndivProfile";
import { Switch, Route, Link, useRouteMatch} from "react-router-dom";
import './Profiles.css';


function Profiles() {
    let match = useRouteMatch();
    return (
        <div>
            <header>
                <h1>
                    Product List
                </h1>
                <button className="Button">
                    <Link to={`${match.url}/1`}>Product 1</Link>
                </button>
                <button className="Button">
                    <Link to={`${match.url}/2`}>Product 2</Link>
                </button>
                <button className="Button">
                    <Link to={`${match.url}/3`}>Product 3</Link>
                </button>
            </header>

            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <IndivProfile />
                </Route>
                <Route exact path={match.path}>
                    <h3>Please select a Profile.</h3>
                </Route>
            </Switch>
        </div>

    );
}

export default Profiles;