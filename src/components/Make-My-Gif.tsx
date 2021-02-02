import React, {
  useReducer,
  useEffect,
  SyntheticEvent,
  ChangeEvent,
} from 'react'
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
import { CreatedGifResponse, Gif } from '../types/gif'

interface State {
  caption: string
  captionColor: string
  captionSize: number
  isLoading: boolean
  gifLength: number
  createdGif: CreatedGifResponse | null
  highlightedScript: string | null
  loopBack: boolean
  makingGif: boolean
  showFullScript: boolean
  video: object
  startTime: number
  gifsFromThisVideo: Gif[] | null
  gifsLoading: boolean
}

type ActionType =
  | 'fetching gifs'
  | 'video info loaded'
  | 'received script'
  | 'loading gifs'
  | 'received gifs for video'
  | 'update state'
  | 'set caption to all caps'
  | 'toggle show full script'
  | 'received created gif'
  | 'accept gif'
  | 'reject gif'

interface Action {
  type: ActionType
  data?: any
}

const reducer = (state: State, action: Action) => {
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
        gifsFromThisVideo: [
          state.createdGif,
          ...(state.gifsFromThisVideo || []),
        ],
        createdGif: null,
      }
    case 'reject gif':
      return { ...state, createdGif: null }
    default:
      console.warn('unrecognized event type', { action })
      return state
  }
}

const initialState: State = {
  caption: '',
  captionColor: '#ffffff',
  captionSize: 20,
  isLoading: true,
  gifLength: 100,
  createdGif: null,
  highlightedScript: null,
  loopBack: false,
  makingGif: false,
  showFullScript: false,
  video: {},
  startTime: 0,
  gifsFromThisVideo: null,
  gifsLoading: false,
}

interface MakeMyGifProps {
  match: {
    params: {
      id: string
      searchQuery: string
    }
  }
}

const MakeMyGif = ({ match }: MakeMyGifProps) => {
  useEffect(() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }), [])
  const [state, dispatch] = useReducer(reducer, initialState)

  const loadVideoInfo = (id: number, searchQuery: string) => {
    getVideoById(id).then((video) => {
      dispatch({ type: 'video info loaded', data: { video } })
    })
    if (searchQuery) {
      getScriptById(id, searchQuery).then((script) => {
        dispatch({ type: 'received script', data: script })
      })
    }
  }

  const loadGifsFromThisVideo = (videoId: number) => {
    dispatch({ type: 'loading gifs' })
    getGifsByVideo(videoId).then((gifs) => {
      dispatch({
        type: 'received gifs for video',
        data: { gifs },
      })
    })
  }

  const updateStartTime = (e: SyntheticEvent<HTMLInputElement, Event>) =>
    dispatch({
      type: 'update state',
      data: { startTime: Number(e.currentTarget.value) },
    })

  const updateGifLength = (e: SyntheticEvent<HTMLInputElement, Event>) =>
    dispatch({
      type: 'update state',
      data: { gifLength: Number(e.currentTarget.value) },
    })

  const updateLoopBack = (e: SyntheticEvent<HTMLInputElement, Event>) =>
    dispatch({
      type: 'update state',
      data: { loopBack: e.currentTarget.checked },
    })

  const updateCaption = (e: SyntheticEvent<HTMLInputElement, Event>) =>
    dispatch({ type: 'update state', data: { caption: e.currentTarget.value } })

  const updateCaptionColor = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) =>
    dispatch({
      type: 'update state',
      data: { captionColor: e.currentTarget.value },
    })

  const updateCaptionSize = (e: SyntheticEvent<HTMLInputElement, Event>) =>
    dispatch({
      type: 'update state',
      data: { captionSize: e.currentTarget.value },
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
      .then((gif) => {
        dispatch({ type: 'received created gif', data: { gif } })
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
    loadVideoInfo(Number(match.params.id), match.params.searchQuery)
    loadGifsFromThisVideo(Number(match.params.id))
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
              {
                //@ts-ignore
                window.Modernizr.inputtypes.color ? (
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
                        <option
                          key={color.name}
                          value={color.hex.toLowerCase()}
                        >
                          {color.name}
                        </option>
                      )
                    })}
                  </select>
                )
              }
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
