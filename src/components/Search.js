import React, { Component } from 'react'
import '../App.css'
import SearchBar from './Search/Search-Bar'
import SearchResults from './Search/Search-Results'
import { searchScripts } from '../controllers/scripts'

class Search extends Component {
	constructor(props) {
		super(props)
		this.state = {
			searchTerm: '',
			searchedTerm: '',
			searchResults: false,
			searchLoading: false
		}
	}
	searchBarChange(e) {
		this.setState({ searchTerm: e.target.value })
	}
	onSearchSubmit(term) {
		if (!term) term = this.state.searchTerm
		if (term === '') return
		this.setState({
			searchedTerm: term,
			searchLoading: true,
			searchResults: []
		})
		searchScripts(term).then(response => {
			this.setState({
				searchResults: response.data.results,
				searchLoading: false,
				searchTime: response.data.searchTime
			})
		})
	}
	render() {
		return (
			<div>
				<div className="container" id="content">
					<div id="top-section">
						<div className="row">
							<div className="medium-2 columns">
								<br />
							</div>
							<div className="medium-8 columns">
								<SearchBar
									onSubmit={this.onSearchSubmit.bind(this)}
									onChange={this.searchBarChange.bind(this)}
									searchLoading={this.state.searchLoading}
								/>
							</div>
							<div className="medium-2 columns">
								<br />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="medium-2 columns">
							<br />
						</div>
						<div className="medium-8 columns">
							<SearchResults
								searchedTerm={this.state.searchedTerm}
								searchLoading={this.state.searchLoading}
								searchTime={this.state.searchTime}
								results={this.state.searchResults}
							/>
						</div>
						<div className="medium-2 columns">
							<br />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Search
