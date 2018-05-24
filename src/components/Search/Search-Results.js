import React, { Component } from 'react'
import SearchResultCard from './Search-Result-Card'

const resultsPerPage = 5

export default class SearchResults extends Component {
	constructor(props) {
		super(props)
		this.state = {
			currentPage: 1
		}
		this.changePage = this.changePage.bind(this)
	}
	componentWillReceiveProps(nextProps) {
		if (this.props.searchedTerm !== nextProps.searchedTerm)
			this.setState({ currentPage: 1 })
	}
	changePage(e) {
		let newPage = parseInt(e.target.getAttribute('newpage'))
		this.setState({ currentPage: newPage })
		window.scroll(0, 0)
	}
	render() {
		if (this.props.results) {
			let { results } = this.props
			let { currentPage } = this.state
			let resultOrResults = results.length === 1 ? 'result' : 'results'
			let pages = []
			let i = 0
			while (i < Math.ceil(results.length / resultsPerPage)) {
				pages.push(i + 1)
				i++
			}
			let resultsOnThisPage = results.filter((val, i) => {
				let max = currentPage * resultsPerPage - 1
				let min = (currentPage - 1) * resultsPerPage
				return i >= min && i <= max
			})
			let pageNumbersToShow = pages.filter(page => {
				var min = currentPage - 3
				var max = currentPage + 3
				return page >= min && page <= max
			})
			return (
				<div id="search-results">
					{this.props.searchLoading ? (
						''
					) : (
						<p>
							Displaying {results.length} {resultOrResults} for{' '}
							<strong>{this.props.searchedTerm}</strong> ({
								this.props.searchTime
							}{' '}
							ms)
						</p>
					)}

					{resultsOnThisPage.map(result => {
						return (
							<SearchResultCard
								key={result.id}
								result={result}
								searchedTerm={this.props.searchedTerm}
							/>
						)
					})}
					{results.length > resultsPerPage ? (
						<div>
							<ul className="pagination">
								{currentPage === 1 ? (
									''
								) : (
									<li>
										<a
											newpage={currentPage - 1}
											onClick={this.changePage}
										>
											<i
												newpage={currentPage - 1}
												className="fi-arrow-left"
											/>
										</a>
									</li>
								)}
								{pageNumbersToShow.includes(1) ? (
									''
								) : (
									<li>
										<a
											newpage={1}
											onClick={this.changePage}
										>
											1 . . .
										</a>
									</li>
								)}
								{pageNumbersToShow.map(page => {
									return (
										<li key={page}>
											<a
												className={
													currentPage === page
														? 'current'
														: ''
												}
												newpage={page}
												onClick={this.changePage}
											>
												{page}
											</a>
										</li>
									)
								})}
								{pageNumbersToShow.includes(
									pages[pages.length - 1]
								) ? (
									''
								) : (
									<li>
										<a
											newpage={pages[pages.length - 1]}
											onClick={this.changePage}
										>
											. . . {pages[pages.length - 1]}
										</a>
									</li>
								)}
								{currentPage === pages.length ? (
									''
								) : (
									<li>
										<a
											newpage={currentPage + 1}
											onClick={this.changePage}
										>
											<i
												newpage={currentPage + 1}
												className="fi-arrow-right"
											/>
										</a>
									</li>
								)}
							</ul>
						</div>
					) : (
						''
					)}
				</div>
			)
		} else {
			return <div />
		}
	}
}
