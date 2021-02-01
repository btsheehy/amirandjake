import React, { useReducer, useEffect } from 'react'
import { getAllGifs } from '../controllers/gifs'
import '../App.css'
import { Gif } from '../types/gif'

interface State {
  gifs: Gif[]
  gifsLoading: boolean
  numberOfGifsToShow: number
}

type ActionType = 'fetching gifs' | 'received gifs' | 'load more gifs'

interface Action {
  type: ActionType
  data?: Gif[]
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'fetching gifs':
      return { ...state, gifs: [], gifsLoading: true }
    case 'received gifs':
      return { ...state, gifs: action.data, gifsLoading: false }
    case 'load more gifs':
      return { ...state, numberOfGifsToShow: state.numberOfGifsToShow + 9 }
    default:
      return state
  }
}

const initialState: State = {
  gifs: [],
  gifsLoading: true,
  numberOfGifsToShow: 9,
}

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const fetchGifs = () =>
    getAllGifs().then((gifs) => dispatch({ type: 'received gifs', data: gifs }))
  const gifsToShow = state.gifs.slice(0, state.numberOfGifsToShow)

  useEffect(() => {
    fetchGifs()
  }, [])
  return (
    <>
      <div id="gifs" className="ten columns centered">
        {state.gifsLoading
          ? 'Loading...'
          : gifsToShow.map((gif) => {
              return (
                <div key={gif.uuid} className="card three columns">
                  <a target="_blank" rel="noreferrer" href={gif.url}>
                    <img src={gif.url} />
                  </a>
                </div>
              )
            })}
      </div>
      {!state.gifsLoading && (
        <div
          className="ten columns centered"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <button
            onClick={() => dispatch({ type: 'load more gifs' })}
            className="button"
          >
            Load more
          </button>
        </div>
      )}
    </>
  )
}
