import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import About from './Components/About'
import Profiles from './Components/Profiles'
import Header from './Components/Header'
import { useState } from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  let siteData = useState({
    newsArticles: [
      { 
        title: "Winning at Life!",
        article: "There are many ways to do so...but the best is just try, try, try again!"
      },
      { 
        title: "X Parasite found at ZDR",
        article: "Recent controversy aside, a squirrel is a glorious dolphin! A dog is a tiger's persimmon. Before goats, lemons were only owls; This could be, or perhaps an orange is the dolphin of a watermelon. Shouting with happiness, their grapefruit was, in this moment, a generous currant! Before pigs, chimpanzees were only peaches. We can assume that any instance of an octopus can be construed as an instinctive zebra; It's very tricky, if not impossible, a wonderful puppy's apple comes with it the thought that the energetic nectarine is a watermelon. Those bees are nothing more than pineapples;"
      },
      { 
        title: "Metroids missing from galaxy",
        article: "Authors often misinterpret the fish as a tough cranberry, when in actuality it feels more like a silly octopus. Some posit the enchanting raspberry to be less than amiable. The literature would have us believe that a fearless kangaroo is not but a persimmon. As far as we can estimate, camels are helpful grapefruits."
      },
      { 
        title: "Ridley at large, XXXXX bounty for capture, dead or alive!",
        article: "The succinct wolf comes from a pioneering wolf; A crocodile is a pro-active lime. In modern times a horse sees a frog as a courageous giraffe. Waking to the buzz of the alarm clock, some sincere cranberries are thought of simply as foxes."
      }
        //add more stories here in this array!
    ],
    contactProfiles: [
        {
            firstName: "Metroid",
            lastName: "Larval Form",
            birthday: "August 06, 1986",
            profileImage: "https://static.wikia.nocookie.net/metroid/images/d/d5/MSR_Larva_Metroid_artwork.png"
        },
        {
          firstName: "Mother",
          lastName: "Brain",
          birthday: "August 15, 1987",
          profileImage: "https://static.wikia.nocookie.net/metroid/images/6/64/MZM_art_Mother_Brain.png"
        },
        {
          firstName: "Ridley",
          lastName: "Space Pirate",
          birthday: "April 18, 1994",
          profileImage: "https://static.wikia.nocookie.net/metroid/images/c/c4/SSBU_Spirits_Ridley.png"
        },
        {
          firstName: "X",
          lastName: "Parasite",
          birthday: "November 17, 2002",
          profileImage: "https://static.wikia.nocookie.net/metroid/images/a/a1/X_icon_on_Dread_site.png"
        },
        {
          firstName: "E.M.M.I.",
          lastName: "Robot",
          birthday: "October 8th, 2021",
          profileImage: "https://static.wikia.nocookie.net/metroid/images/6/68/M5_art_EMMI_01.png"
        }
    ]
  });

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
        <Route path="/profiles">
          <Profiles siteData = {siteData} />
        </Route>
        <Route exact path="/">
          <Home siteData = {siteData} />
        </Route>
        <Route exact path="/home">
          <Home siteData = {siteData} />
        </Route>

      </div>
    </Router>
  );
}

export default App;
