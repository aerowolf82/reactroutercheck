import { useParams, Link, useRouteMatch, useLocation, Route, useHistory } from "react-router-dom";


function IndivProduct(siteData) {
    let location = useLocation();
    let background = location.state && location.state.background;
    let { topicId } = useParams();
    let imageURL = `${siteData.siteData[0].contactProfiles[topicId].profileImage}`;
    let match = useRouteMatch();
    return (
        <div>
            <h3>{`${siteData.siteData[0].contactProfiles[topicId].firstName} ${siteData.siteData[0].contactProfiles[topicId].lastName}`}</h3>
            <div>
                <Link
                    key={topicId}
                    className="Link"
                    to={{
                        pathname: `${match.url}/profile-image`,
                        state: { background: location }
                    }}
                >
                    <img className="profile" src={imageURL} alt="Bounty Profile Pic"/>
                </Link>
                <p>
                    First Name: {`${siteData.siteData[0].contactProfiles[topicId].firstName}`}<br />
                    Last Name: {`${siteData.siteData[0].contactProfiles[topicId].lastName}`}<br />
                    Birthday: {`${siteData.siteData[0].contactProfiles[topicId].birthday}`}<br />
                </p>
                {background && <Route path={`${match.url}/profile-image`}><Modal imageURL={imageURL}/></Route> }
            </div>
        </div>
    );
}

export default IndivProduct;

function Modal(imageURL) {
    let history = useHistory();
    let image = imageURL.imageURL;

    if (!image) return null;

    let back = e => {
        e.stopPropagation();
        history.goBack();
    };

    return (
        <div className="modalBack"
            onClick={back}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                background: "rgba(0, 0, 0, 0.15)"
            }}
        >
            <div className="modal">
            <h1>Bounty Closeup</h1>
            <img className="profile-large" src={image} alt="Bounty Closeup"/>
            <br />
            <button type="button" onClick={back}>
                Close
            </button>
            </div>
        </div>
    );
}
