import React, { Component } from 'react'
import './App.css'
import Search from './components/Search'
import MakeMyGif from './components/Make-My-Gif'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'

class App extends Component {
	constructor() {
		super()
		// redirect https to http because CollegeHumor is a bunch of fucks
		if (/https/i.test(window.location.protocol)){
			window.location = window.location.href.replace(/https/i, 'http')
		}
	}
	render() {
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
								<div className="item">
									<Link to="/admin">Admin</Link>
								</div>
							</nav>
						</div>
						<h1
							style={{
								marginBottom: '-10px',
								fontFamily: "'Oswald', sans-serif"
							}}
						>
							Jake & Amir
						</h1>
						<h1 style={{ fontFamily: "'Shrikhand', cursive" }}>
							Gif Maker
						</h1>
						<AnimatedSwitch
							atEnter={{ opacity: 0 }}
							atLeave={{ opacity: 0 }}
							atActive={{ opacity: 1 }}
							className="switch-wrapper"
						>
							<Route exact path="/" component={Search} />
							<Route
								path="/make_my_gif/:id/:searchQuery"
								component={MakeMyGif}
							/>
						</AnimatedSwitch>
					</div>
				</Router>
			</div>
		)
	}
}
// font-family: 'Poiret One', cursive;
// font-family: 'Limelight', cursive;
export default App
