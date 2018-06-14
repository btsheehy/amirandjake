import React, { Component } from 'react'
import './App.css'
import Search from './components/Search'
import MakeMyGif from './components/Make-My-Gif'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
	render() {
		return (
			<div>
				<a href="/">
					<h1>Jake and Amir Gif Maker</h1>
				</a>
				<Router>
					<div>
						<Route exact path="/" component={Search} />
						<Route
							path="/make_my_gif/:id/:searchQuery"
							component={MakeMyGif}
						/>
					</div>
				</Router>
			</div>
		)
	}
}

export default App
