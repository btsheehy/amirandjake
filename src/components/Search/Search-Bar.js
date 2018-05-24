import React, { Component } from 'react'

export default class SearchBar extends Component {
	constructor(props) {
		super(props)
		this.enter = this.enter.bind(this)
		this.submit = this.submit.bind(this)
	}
	enter(e) {
		if (e.key === 'Enter') {
			this.props.onSubmit()
		}
	}
	submit() {
		this.props.onSubmit()
	}
	render() {
		return (
			<div>
				<div className="medium-10 columns">
					<input
						placeholder="Search Scripts!"
						onChange={this.props.onChange}
						onKeyPress={this.enter}
						type="text"
					/>
				</div>
				<div className="medium-2 columns">
					{this.props.searchLoading ? (
						<button disabled className="button disabled">
							Loading...
						</button>
					) : (
						<button onClick={this.submit} className="button">
							Search
						</button>
					)}
				</div>
			</div>
		)
	}
}
