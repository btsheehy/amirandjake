import React, { Component } from 'react'
export default class RelatedGifs extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		let { props } = this
		if (props.gifs)
			if (props.gifs.length) {
				return (
					<div>
						{props.gifs.map(gif => {
							return (
								<div key={gif.uuid} className="card">
									<a target="_blank" href={gif.url}>
										<img src={gif.url} />
									</a>
								</div>
							)
						})}
					</div>
				)
			} else {
				return <div>No gifs from this video yet! </div>
			}
		else return <div>Loading...</div>
	}
}

// props
// gifs: array
