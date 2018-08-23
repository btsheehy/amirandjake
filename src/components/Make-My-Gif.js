import React, { Component } from 'react'
import '../App.css'
import { getVideoById } from '../controllers/video'
import { createGif, deleteGif, getGifsByVideo } from '../controllers/gifs'
import { getScriptById } from '../controllers/scripts'
import { withRouter } from 'react-router'
import GifPreview from './Make-My-Gif/gif-preview'
import VideoFrameSelector from './Make-My-Gif/video-frame-selector'
import VideoEndFrameSelector from './Make-My-Gif/video-end-frame-selector'
import VideoClipPreview from './Make-My-Gif/video-clip-preview'
import RelatedGifs from './Make-My-Gif/related-gifs'
import captionColors from '../controllers/caption-colors'

class MakeMyGif extends Component {
	constructor(props) {
		super(props)
		this.state = {
			caption: '',
			captionColor: '#ffffff',
			captionSize: 20,
			isLoading: true,
			gifDeleteKey: null,
			gifLength: 1000,
			gifUrl: false,
			highlightedScript: false,
			loopBack: false,
			makingGif: false,
			showFullScript: false,
			video: {},
			videoElement: null,
			videoId: null,
			searchQuery: null,
			startTime: 0,
			endTime: 100,
			gifsFromThisVideo: false
		}
		this.updateStartTime = this.updateStartTime.bind(this)
		this.updateGifLength = this.updateGifLength.bind(this)
		this.videoTimeUpdate = this.videoTimeUpdate.bind(this)
		this.makeMyGif = this.makeMyGif.bind(this)
		this.updateLoopBack = this.updateLoopBack.bind(this)
		this.toggleShowFullScript = this.toggleShowFullScript.bind(this)
		this.hidePreview = this.hidePreview.bind(this)
		this.deleteMyGif = this.deleteMyGif.bind(this)
		this.updateEndTime = this.updateEndTime.bind(this)
		this.loadGifsFromThisVideo = this.loadGifsFromThisVideo.bind(this)
		this.updateCaption = this.updateCaption.bind(this)
		this.updateCaptionColor = this.updateCaptionColor.bind(this)
		this.updateCaptionSize = this.updateCaptionSize.bind(this)
		this.captionToAllCaps = this.captionToAllCaps.bind(this)
	}

	componentWillMount() {
		this.setState({
			videoId: this.props.match.params.id,
			searchQuery: this.props.match.params.searchQuery
		})
		this.loadVideoInfo(
			this.props.match.params.id,
			this.props.match.params.searchQuery
		)
		this.loadGifsFromThisVideo(this.props.match.params.id)
	}

	makeMyGif() {
		let config = {
			start_time: this.state.startTime / 100,
			end_time: this.state.endTime / 100,
			video_file_path: this.state.video.muted_video_file_path,
			captions: [],
			loop_back: this.state.loopBack,
			fade_in: false,
			captions: [
				{
					text: this.state.caption,
					color: this.state.captionColor,
					size: Number(this.state.captionSize)
				}
			]
		}
		let videoId = this.props.match.params.id
		let searchQuery = this.props.match.params.searchQuery
		createGif(config, videoId, searchQuery)
			.then(res => {
				this.setState({
					makingGif: false,
					gifUrl: res.data.url,
					gifDeleteKey: res.data.delete_key
				})
			})
			.catch(err => {
				console.log(err)
				this.setState({
					makingGif: false
				})
			})
		this.setState({ makingGif: true, gifUrl: false })
	}

	loadVideoInfo(id, searchQuery) {
		getVideoById(id).then(response => {
			this.setState({ isLoading: false, video: response.data })
			let getVideoElement = () => {
				setTimeout(() => {
					let el = document.querySelector('video#muted_video')
					if (el) {
						this.setState({ videoElement: el })
						el.play()
					} else getVideoElement()
				}, 100)
			}
			getVideoElement()
		})
		if (searchQuery) {
			getScriptById(id, searchQuery).then(response => {
				this.setState({
					highlightedScript: response.data.results[0].script
				})
			})
		}
	}

	loadGifsFromThisVideo(videoId) {
		getGifsByVideo(videoId).then(response => {
			this.setState({ gifsFromThisVideo: response.data })
		})
	}

	updateStartTime(e) {
		let val = Number(e.target.value)
		this.setState({ startTime: val })
		if (this.state.videoElement) {
			this.state.videoElement.currentTime = val / 100
		}
	}

	updateEndTime(e) {
		const {state} = this
		let val = Number(e.target.value)
		// if (val <= this.state.startTime) {
		// 	// this.setState({
		// 	// 	startTime: val - 1,
		// 	// 	endTime: val
		// 	// })
		// 	return false
		// } else if (val / 100 - this.state.startTime / 100 > 10) {
		// 	this.setState({
		// 		endTime: this.state.startTime + 1000
		// 	})
		// } else this.setState({ endTime: val })
		this.setState({
			endTime: Number(state.startTime) + val 
		})
	}

	updateGifLength(e) {
		if (Number(e.target.value) <= 1000)
			this.setState({ gifLength: Number(e.target.value) })
	}

	videoTimeUpdate(e) {
		let { gifLength, startTime, videoElement, endTime } = this.state
		let { currentTime } = e.target
		currentTime = currentTime * 100
		if (currentTime >= endTime) videoElement.currentTime = startTime / 100
	}

	updateLoopBack(e) {
		this.setState({ loopBack: e.target.checked })
	}

	updateCaption(e) {
		this.setState({
			caption: e.target.value
		})
	}

	updateCaptionColor(e) {
		this.setState({
			captionColor: e.target.value
		})
	}

	updateCaptionSize(e) {
		this.setState({
			captionSize: e.target.value
		})
	}

	captionToAllCaps() {
		let caption = this.state.caption
		this.setState({
			caption: caption.toLocaleUpperCase()
		})
	}

	toggleShowFullScript() {
		this.setState({ showFullScript: !this.state.showFullScript })
	}

	hidePreview(e) {
		this.setState({ gifUrl: false })
		this.loadGifsFromThisVideo(this.state.videoId)
	}

	deleteMyGif() {
		let { gifDeleteKey } = this.state
		deleteGif(gifDeleteKey)
		this.setState({ gifUrl: false })
	}

	render() {
		let { state, props } = this
		let videoDuration = state.videoElement
			? state.videoElement.duration * 100
			: null
		let { video } = state
		if (state.isLoading) {
			return <div style={{ textAlign: 'center' }}>Loading...</div>
		}
		return (
			<div id="make-my-gif" className="container">
				<div className="row">
					<div className="medium-8 columns">
						<div className="title-container">
							<h2>{state.video.title}</h2>
						</div>
						<div className="card">
							<div className="card-divider">
								<h4>Step 1: Find your quote</h4>
							</div>
							<div className="card-section">
								<iframe
									title={video.title}
									src={video.video_link}
								/>
							</div>
							{state.showFullScript ? (
								<div>
									<button
										onClick={this.toggleShowFullScript}
										className="button"
									>
										Hide Full Script
									</button>
									<div className="card-section full-script">
										{state.highlightedScript ? (
											<p
												dangerouslySetInnerHTML={{
													__html:
														state.highlightedScript
												}}
											/>
										) : (
											<p
												dangerouslySetInnerHTML={{
													__html: state.video.script
												}}
											/>
										)}
									</div>
								</div>
							) : (
								<div>
									<button
										title={video.id}
										onClick={this.toggleShowFullScript}
										className="button"
									>
										Show Full Script
									</button>
								</div>
							)}
						</div>
						<div className="card">
							<div className="card-divider">
								<h4>Step 2: Select your clip</h4>
							</div>
							<div>
								<VideoFrameSelector
									videoSource={state.video.muted_video_link}
									sliderLabel="Start Frame"
									onSliderUpdate={this.updateStartTime}
									sliderTime={state.startTime}
								/>
								<VideoEndFrameSelector
									videoSource={state.video.muted_video_link}
									sliderLabel="Gif Length"
									onSliderUpdate={this.updateEndTime}
									startTime={state.startTime}
									duration={state.endTime - state.startTime}
								/>
							</div>
							<VideoClipPreview
								videoSource={state.video.muted_video_link}
								min={state.startTime}
								max={state.endTime}
								caption={{
									text: state.caption,
									color: state.captionColor,
									size: state.captionSize
								}}
							/>
						</div>
						<div className="card">
							<div className="card-divider">
								<h4>Step 3: Additional Options</h4>
							</div>
							<div className="card-section">
								<h6>Caption</h6>
								<input
									type="text"
									onChange={this.updateCaption}
									value={state.caption}
								/>
								<button
									onClick={this.captionToAllCaps}
									className="button"
								>
									All Caps
								</button>
								<label htmlFor="caption-color">
									Caption Color
								</label>
								{window.Modernizr.inputtypes.color ? (
									<input
										type="color"
										onChange={this.updateCaptionColor}
										value={state.captionColor}
										style={{
											width: '100px',
											height: '100px'
										}}
									/>
								) : (
									<select
										name="caption-color"
										id="caption-color"
										onChange={this.updateCaptionColor}
										value={state.captionColor}
									>
										{captionColors.map(color => {
											return (
												<option
													key={color.name}
													value={color.hex.toLowerCase()}
												>
													{color.name}
												</option>
											)
										})}
									</select>
								)}

								<label htmlFor="caption-size">
									Caption Size
								</label>
								<input
									type="number"
									id="caption-size"
									value={state.captionSize}
									onChange={this.updateCaptionSize}
								/>
							</div>
							<div className="card-section">
								<h6>Loop back?</h6>
								<input
									id="loop-back-checkbox"
									type="checkbox"
									onChange={this.updateLoopBack}
									checked={this.state.loopBack}
								/>
							</div>
						</div>
						<button
							onClick={this.makeMyGif}
							className="button"
							disabled={state.makingGif}
						>
							{state.makingGif ? 'Making gif...' : 'Make My Gif!'}
						</button>
						{state.gifUrl ? (
							<GifPreview
								accept={this.hidePreview}
								decline={this.deleteMyGif}
								hide={false}
								gifUrl={state.gifUrl}
							/>
						) : (
							<GifPreview hide={true} gifUrl={state.gifUrl} />
						)}
					</div>
					<div className="medium-4 columns">
						<div className="title-container">
							<h4>Other Gifs From This Video</h4>
						</div>
						<RelatedGifs gifs={this.state.gifsFromThisVideo} />
					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(MakeMyGif)
