import React, { Component } from 'react'

export default class VideoFrameSelector extends Component {
	constructor(props) {
		super(props)
		this.state = {
			videoDuration: 0,
			videoElement: false,
			randomIdVideo:
				'_' +
				Math.random()
					.toString()
					.replace(/\./g, ''),
			randomIdSlider:
				'_' +
				Math.random()
					.toString()
					.replace(/\./g, '')
		}
	}

	componentDidMount() {
		let getVideoElement = () => {
			setTimeout(() => {
				let el = document.getElementById(this.state.randomIdVideo)
				if (el) {
					this.setState({ videoElement: el })
				} else getVideoElement()
			}, 100)
		}
		getVideoElement()
	}

	componentWillReceiveProps(nextProps) {
		if (this.state.videoElement)
			this.state.videoElement.currentTime = nextProps.sliderTime / 100
	}

	formatTime(ms) {
		ms = Number(ms)
		let s = ms / 100
		let min = Math.floor(s / 60)
		let seconds = Math.floor(s - min * 60)
		seconds = seconds >= 10 ? seconds : '0' + seconds.toString()
		let milliseconds = s.toString().split('.')[1] | '00'
		return min + ':' + seconds + (milliseconds ? '.' + milliseconds : '')
	}

	render() {
		let { props, state } = this
		let duration = state.videoElement.duration * 100
		return (
			<div>
				<video id={state.randomIdVideo} src={this.props.videoSource} />
				<label htmlFor={state.randomIdSlider}>
					{props.sliderLabel}
				</label>
				{typeof duration === 'number' ? (
					<input
						id={state.randomIdSlider}
						type="range"
						min={props.sliderMin ? props.sliderMin.toString() : '0'}
						max={duration}
						onChange={props.onSliderUpdate}
						value={props.sliderTime.toString()}
						style={{ width: '100%' }}
					/>
				) : (
					''
				)}

				<p>{this.formatTime(props.sliderTime)}</p>
			</div>
		)
	}
}

// props:
// videoSource: string
// sliderLabel: string
// sliderMin: number
// sliderTime: number
// onSliderUpdate: function
