import './Home.css';


function Home({siteData}) {
console.log(siteData[0].newsArticles)
    return (
        <div>
            <h1>
                My Profile Page    
            </h1>
            <h3>
                Welcome back, Samus Aran.
            </h3>
            <div>
                <img className="profile" src="https://cdn.gamer-network.net/2017/usgamer/metroid_samus_returns_featured.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/65/metroid-samus-returns-review.jpg" alt="Samus Profile Pic"/>
                <p>
                    Name: Samus Aran
                </p>
                <p>
                    Profession: Bounty Hunter
                </p>
                <p>
                    Hobbies: Bounty Hunting, Metroid Extermination, X Killer
                </p>

            </div>
            <div className="News">
                <h1>Galaxy News</h1>
                {(siteData[0].newsArticles.map((article)=>(
                    // <NavLink className="NavLink" to={`${match.url}/${index}`}>
                    <>
                        <h2>{article.title}</h2>
                        <p>{article.article}</p>
                    </>
                )))}
            </div>
        </div>
    );
}

export default Home;