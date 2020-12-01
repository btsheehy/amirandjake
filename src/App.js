import React from 'react'
import './App.css'
import Search from './components/Search'
import MakeMyGif from './components/Make-My-Gif'
import Gifs from './components/Gifs'
import Faqs from './components/Faqs'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <div className="contain-to-grid">
            <nav className="top-bar">
              <div className="item">
                <Link to="/">Home</Link>
              </div>
              <div className="item">
                <Link to="/gifs">Gifs</Link>
              </div>
              <div className="item">
                <Link to="/FAQs">FAQs</Link>
              </div>
            </nav>
          </div>
          <h1
            style={{
              marginBottom: '-10px',
              fontFamily: "'Oswald', sans-serif",
            }}
          >
            Jake & Amir
          </h1>
          <h1 style={{ fontFamily: "'Shrikhand', cursive" }}>Gif Maker</h1>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <Route exact path="/" component={Search} />
            <Route path="/make_my_gif/:id/:searchQuery" component={MakeMyGif} />
            <Route path="/make_my_gif/:id" component={MakeMyGif} />
            <Route exact path="/gifs" component={Gifs} />
            <Route exact path="/faqs" component={Faqs} />
          </AnimatedSwitch>
        </div>
      </Router>
    </div>
  )
}
// font-family: 'Poiret One', cursive;
// font-family: 'Limelight', cursive;
export default App
