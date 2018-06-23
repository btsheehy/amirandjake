import React, { Component } from 'react'

export default class VideoClipPreview extends Component {
	constructor(props) {
		super(props)
		this.state = {
			videoElement: false
		}

		this.videoTimeChange = this.videoTimeChange.bind(this)
		this.mountCanvas = this.mountCanvas.bind(this)
	}

	componentDidMount() {
		let getVideoElement = () => {
			setTimeout(() => {
				let el = document.getElementById('video-clip-preview')
				if (el) {
					this.setState({ videoElement: el })
					// this.mountCanvas(el)
					// el.play()
				} else getVideoElement()
			}, 100)
		}
		getVideoElement()
	}

	mountCanvas(videoElement) {
		let canvasElement = document.getElementById('video-clip-preview-canvas')
		let context = canvasElement.getContext('2d')

		let cw = Math.floor(canvasElement.clientWidth)
		let ch = Math.floor(canvasElement.clientHeight)
		canvasElement.width = cw
		canvasElement.height = ch
		videoElement.addEventListener('play', () => {
			draw(videoElement, context, cw, ch)
		})
		let draw = function(v, c, w, h) {
			if (v.paused || v.ended) return false
			c.drawImage(v, 0, 0, w, h)
			setTimeout(draw, 20, v, c, w, h)
		}
	}

	videoTimeChange(e) {
		let { videoElement } = this.state
		let { min, max } = this.props
		if (videoElement) {
			let { currentTime } = e.target
			currentTime = currentTime * 100
			if (currentTime >= max || currentTime <= min)
				videoElement.currentTime = min / 100
		}
	}

	render() {
		let { state, props } = this
		return (
			<div style={{ position: 'relative' }}>
				<video
					id="video-clip-preview"
					autoPlay
					loop
					controls
					src={props.videoSource}
					onTimeUpdate={this.videoTimeChange}
					style={{ position: 'relative' }}
				/>
				<h4
					style={{
						fontSize: Number(props.caption.size) * 1.5 + 'pt',
						fontWeight: 'bold',
						fontFamily: 'Arial',
						color: props.caption.color,
						textAlign: 'center',
						position: 'absolute',
						bottom: 0,
						width: '100%',
						lineHeight: 1.2
					}}
				>
					{props.caption.text}
				</h4>
				{/*<canvas id="video-clip-preview-canvas" />*/}
			</div>
		)
	}
}

// props
// videoSource: string
// min: number
// max: number
// captionText: string
// captionColor: string
