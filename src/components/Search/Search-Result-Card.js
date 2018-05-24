import React, { Component } from 'react'
import { getScriptById } from '../../controllers/scripts'
import { Link } from 'react-router-dom'

export default class SearchResultCard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showFullScript: false,
			fullScript: 'Loading...'
		}
		this.toggleShowFullScript = this.toggleShowFullScript.bind(this)
	}

	toggleShowFullScript() {
		if (this.state.fullScript === 'Loading...') {
			getScriptById(this.props.result.id, this.props.searchedTerm).then(
				response => {
					this.setState({
						fullScript: response.data.results[0].script
					})
				}
			)
		}
		this.setState({ showFullScript: !this.state.showFullScript })
	}

	render() {
		let { result } = this.props
		let { showFullScript } = this.state
		let makeMyGifLink = `make_my_gif/${result.id}/${
			this.props.searchedTerm
		}`
		return (
			<div className="card" key={result.id}>
				<div className="card-divider">
					<h4>{result.title}</h4>
				</div>
				<div className="card-section">
					<iframe title={result.title} src={result.video_link} />
				</div>
				<div className="card-section">
					<pre
						className="snippet"
						dangerouslySetInnerHTML={{
							__html: result.snippet
						}}
					/>
				</div>
				{showFullScript ? (
					<div>
						<button
							onClick={this.toggleShowFullScript}
							className="button"
						>
							Hide Full Script
						</button>
						<Link className="button" to={makeMyGifLink}>
							Make My Gif!
						</Link>
						<div className="card-section full-script">
							<p
								dangerouslySetInnerHTML={{
									__html: this.state.fullScript
								}}
							/>
						</div>
					</div>
				) : (
					<div>
						<button
							title={result.id}
							onClick={this.toggleShowFullScript}
							className="button"
						>
							Show Full Script
						</button>
						<Link className="button" to={makeMyGifLink}>
							Make My Gif!
						</Link>
					</div>
				)}
			</div>
		)
	}
}
