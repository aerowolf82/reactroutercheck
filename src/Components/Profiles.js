import IndivProfile from "./IndivProfile";
import { Switch, Route, Link, useRouteMatch} from "react-router-dom";
import './Profiles.css';


function Profiles({siteData}) {
    let match = useRouteMatch();
    return (
        <div style={{ display: "flex" }}>
            <div className="sidebar">
                <h3>
                    Bounty Profiles
                </h3>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                        {(siteData[0].contactProfiles.map((contact,index)=>(
                            <li>
                                <Link className="Link" to={`${match.url}/${index}`}>
                                    {`${contact.firstName} ${contact.lastName}`}
                                </Link>
                            </li>   
                        )))}
                </ul>
            </div>
            <div className="profile">
                <Switch>
                    <Route path={`${match.path}/:topicId`}>
                        <IndivProfile siteData={siteData}/>
                    </Route>
                    <Route exact path={match.path}>
                        <h3>Please select a Profile.</h3>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default Profiles;