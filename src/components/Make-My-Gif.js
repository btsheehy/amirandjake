import React, { Component } from 'react'
import '../App.css'
import { getVideoById } from '../controllers/video'
import { createGif, deleteGif, getGifsByVideo } from '../controllers/gifs'
import { getScriptById } from '../controllers/scripts'
import { withRouter } from 'react-router'
import GifPreview from './Make-My-Gif/gif-preview'
import VideoFrameSelector from './Make-My-Gif/video-frame-selector'
import VideoClipPreview from './Make-My-Gif/video-clip-preview'
import RelatedGifs from './Make-My-Gif/related-gifs'

class MakeMyGif extends Component {
	constructor(props) {
		super(props)
		this.state = {
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
			video_file_path: this.state.video.video_file_path,
			captions: [],
			loop_back: this.state.loopBack,
			fade_in: false
		}
		let videoId = this.props.match.params.id
		let searchQuery = this.props.match.params.searchQuery
		createGif(config, videoId, searchQuery).then(res => {
			this.setState({
				makingGif: false,
				gifUrl: res.data.url,
				gifDeleteKey: res.data.delete_key
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
		if (val >= this.state.endTime) {
			this.setState({
				startTime: val,
				endTime: val + 1000
			})
		} else if (this.state.endTime - val / 100 > 10) {
			this.setState({
				endTime: this.state.startTime + 1000,
				startTime: val
			})
		} else this.setState({ startTime: val })
		if (this.state.videoElement) {
			this.state.videoElement.currentTime = val / 100
		}
	}

	updateEndTime(e) {
		let val = Number(e.target.value)
		if (val <= this.state.startTime) {
			// this.setState({
			// 	startTime: val - 1,
			// 	endTime: val
			// })
			return false
		} else if (val / 100 - this.state.startTime / 100 > 10) {
			this.setState({
				endTime: this.state.startTime + 1000
			})
		} else this.setState({ endTime: val })
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
					<div className="medium-2 columns">
						<br />
					</div>
					<div className="medium-8 columns">
						<h2>{state.video.title}</h2>
					</div>
					<div
						style={{ display: 'flex', justifyContent: 'center' }}
						className="medium-2 columns"
					>
						<h6
							style={{
								textAlign: 'center',
								margin: '0',
								padding: '0'
							}}
						>
							Other Gifs From This Video
						</h6>
					</div>
				</div>
				<div className="row">
					<div className="medium-2 columns">
						<br />
					</div>
					<div className="medium-8 columns">
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
								<VideoFrameSelector
									videoSource={state.video.muted_video_link}
									sliderLabel="End Frame"
									onSliderUpdate={this.updateEndTime}
									sliderTime={state.endTime}
								/>
							</div>
							<div className="card-section">
								<VideoClipPreview
									videoSource={state.video.muted_video_link}
									min={state.startTime}
									max={state.endTime}
								/>
							</div>
							<hr />
							<div className="card-section">
								<p>Additional Options</p>
								<label htmlFor="loop-back-checkbox">
									Loop back?
								</label>
								<input
									id="loop-back-checkbox"
									type="checkbox"
									onChange={this.updateLoopBack}
									checked={this.state.loopBack}
								/>
							</div>
							<div className="card-section">
								<button
									onClick={this.makeMyGif}
									className="button"
									disabled={state.makingGif}
								>
									{state.makingGif
										? 'Making gif...'
										: 'Make My Gif!'}
								</button>
							</div>
						</div>
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
					<div className="medium-2 columns">
						<RelatedGifs gifs={this.state.gifsFromThisVideo} />
					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(MakeMyGif)
