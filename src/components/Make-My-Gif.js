import React, { useReducer, useEffect } from 'react'
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

const reducer = (state, action) => {
  switch (action.type) {
    case 'fetching gifs':
      return { ...state, gifs: [], gifsLoading: true }
    case 'video info loaded':
      return { ...state, isLoading: false, video: action.data.video }
    case 'received script':
      return { ...state, highlightedScript: action.data.script }
    case 'loading gifs':
      return { ...state, gifsLoading: true }
    case 'received gifs for video':
      return {
        ...state,
        gifsFromThisVideo: action.data.gifs,
        gifsLoading: false,
      }
    case 'update state':
      return { ...state, ...action.data }
    case 'set caption to all caps':
      return { ...state, caption: state.caption.toLocaleUpperCase() }
    case 'toggle show full script':
      return { ...state, showFullScript: !state.showFullScript }
    case 'received created gif':
      return { ...state, makingGif: false, createdGif: action.data.gif }
    case 'accept gif':
      return {
        ...state,
        gifsFromThisVideo: [state.createdGif, ...state.gifsFromThisVideo],
        createdGif: null,
      }
    case 'reject gif':
      return { ...state, createdGif: null }
    default:
      console.warn('unrecognized event type', { action })
      return state
  }
}

const initialState = {
  caption: '',
  captionColor: '#ffffff',
  captionSize: 20,
  isLoading: true,
  gifLength: 100,
  createdGif: null,
  highlightedScript: false,
  loopBack: false,
  makingGif: false,
  showFullScript: false,
  video: {},
  videoId: null,
  searchQuery: null,
  startTime: 0,
  gifsFromThisVideo: null,
  gifsLoading: false,
}

const MakeMyGif = ({ match }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const loadVideoInfo = (id, searchQuery) => {
    getVideoById(id).then((response) => {
      dispatch({ type: 'video info loaded', data: { video: response.data } })
    })
    if (searchQuery) {
      getScriptById(id, searchQuery).then((response) => {
        dispatch({ type: 'received script', data: response.data.results[0] })
      })
    }
  }

  const loadGifsFromThisVideo = (videoId) => {
    dispatch({ type: 'loading gifs' })
    getGifsByVideo(videoId).then((response) => {
      dispatch({
        type: 'received gifs for video',
        data: { gifs: response.data },
      })
    })
  }

  const updateStartTime = (e) =>
    dispatch({
      type: 'update state',
      data: { startTime: Number(e.target.value) },
    })

  const updateGifLength = (e) =>
    dispatch({
      type: 'update state',
      data: { gifLength: Number(e.target.value) },
    })

  const updateLoopBack = (e) =>
    dispatch({ type: 'update state', data: { loopBack: e.target.checked } })

  const updateCaption = (e) =>
    dispatch({ type: 'update state', data: { caption: e.target.value } })

  const updateCaptionColor = (e) =>
    dispatch({
      type: 'update state',
      data: { captionColor: e.target.value },
    })

  const updateCaptionSize = (e) =>
    dispatch({
      type: 'update state',
      data: { captionSize: e.target.value },
    })

  const setCaptionToAllCaps = () =>
    dispatch({ type: 'set caption to all caps' })

  const toggleShowFullScript = () =>
    dispatch({ type: 'toggle show full script' })

  const acceptGif = () => dispatch({ type: 'accept gif' })

  const rejectGif = () => {
    deleteGif(state.createdGif.deleteKey)
    dispatch({ type: 'reject gif' })
  }

  const makeGif = () => {
    const videoId = parseInt(match.params.id)
    const { searchQuery } = match.params
    const {
      startTime,
      gifLength,
      loopBack,
      caption,
      captionColor,
      captionSize,
    } = state
    const config = {
      startTime: startTime / 100,
      endTime: startTime / 100 + gifLength / 100,
      loopBack: loopBack,
      fadeIn: false,
      captions: [
        {
          text: caption,
          color: captionColor,
          size: Number(captionSize),
        },
      ],
    }
    createGif(config, videoId, searchQuery)
      .then((res) => {
        dispatch({ type: 'received created gif', data: { gif: res.data } })
      })
      .catch((err) => {
        console.log(err)
        dispatch({ type: 'update state', data: { makingGif: false } })
      })
    dispatch({
      type: 'update state',
      data: { makingGif: true, createdGif: null },
    })
  }

  useEffect(() => {
    loadVideoInfo(match.params.id, match.params.searchQuery)
    loadGifsFromThisVideo(match.params.id)
  }, [match.params.id, match.params.searchQuery])

  if (state.isLoading) {
    return <div style={{ textAlign: 'center' }}>Loading...</div>
  }
  const { video } = state
  return (
    <div id="make-my-gif" className="container">
      <div className="row">
        <div className="medium-8 columns">
          <div className="title-container">
            <h2>{video.title}</h2>
          </div>
          <div className="card">
            <div className="card-divider">
              <h4>Step 1: Find your quote</h4>
            </div>
            <div className="card-section">
              <iframe title={video.title} src={video.videoLink} />
            </div>
            {state.showFullScript ? (
              <div>
                <button onClick={toggleShowFullScript} className="button">
                  Hide Full Script
                </button>
                <div className="card-section full-script">
                  {state.highlightedScript ? (
                    <p
                      dangerouslySetInnerHTML={{
                        __html: state.highlightedScript,
                      }}
                    />
                  ) : (
                    <p
                      dangerouslySetInnerHTML={{
                        __html: video.script,
                      }}
                    />
                  )}
                </div>
              </div>
            ) : (
              <div>
                <button
                  title={video.id}
                  onClick={toggleShowFullScript}
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
                videoSource={video.mutedVideoLink}
                sliderLabel="Start Frame"
                onSliderUpdate={updateStartTime}
                sliderTime={state.startTime}
              />
              <VideoEndFrameSelector
                videoSource={video.mutedVideoLink}
                sliderLabel="Gif Length"
                onSliderUpdate={updateGifLength}
                startTime={state.startTime}
                duration={state.gifLength}
              />
            </div>
            <VideoClipPreview
              videoSource={video.mutedVideoLink}
              min={state.startTime}
              max={state.startTime + state.gifLength}
              caption={{
                text: state.caption,
                color: state.captionColor,
                size: state.captionSize,
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
                onChange={updateCaption}
                value={state.caption}
              />
              <button onClick={setCaptionToAllCaps} className="button">
                All Caps
              </button>
              <label htmlFor="caption-color">Caption Color</label>
              {window.Modernizr.inputtypes.color ? (
                <input
                  type="color"
                  onChange={updateCaptionColor}
                  value={state.captionColor}
                  style={{
                    width: '100px',
                    height: '100px',
                  }}
                />
              ) : (
                <select
                  name="caption-color"
                  id="caption-color"
                  onChange={updateCaptionColor}
                  value={state.captionColor}
                >
                  {captionColors.map((color) => {
                    return (
                      <option key={color.name} value={color.hex.toLowerCase()}>
                        {color.name}
                      </option>
                    )
                  })}
                </select>
              )}

              <label htmlFor="caption-size">Caption Size</label>
              <input
                type="number"
                id="caption-size"
                value={state.captionSize}
                onChange={updateCaptionSize}
              />
            </div>
            <div className="card-section">
              <h6>Loop back?</h6>
              <input
                id="loop-back-checkbox"
                type="checkbox"
                onChange={updateLoopBack}
                checked={state.loopBack}
              />
            </div>
          </div>
          <button
            onClick={makeGif}
            className="button"
            disabled={state.makingGif}
          >
            {state.makingGif ? 'Making gif...' : 'Make My Gif!'}
          </button>
          {state.createdGif && (
            <GifPreview
              accept={acceptGif}
              decline={rejectGif}
              hide={false}
              gifUrl={state.createdGif.url}
            />
          )}
        </div>
        <div className="medium-4 columns">
          <div className="title-container">
            <h4>Other Gifs From This Video</h4>
          </div>
          <RelatedGifs gifs={state.gifsFromThisVideo} />
        </div>
      </div>
    </div>
  )
}

export default withRouter(MakeMyGif)
