import React, { useReducer } from 'react'
import '../App.css'
import SearchBar from './Search/Search-Bar'
import SearchResults from './Search/Search-Results'
import { searchScripts } from '../controllers/scripts'

const initialState = {
  searchTerm: '',
  searchedTerm: '',
  searchResults: null,
  searchLoading: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'search bar change':
      return { ...state, searchTerm: action.value }
    case 'submit search':
      return {
        ...state,
        searchedTerm: action.value || state.searchTerm,
        searchLoading: true,
        searchResults: [],
      }
    case 'search results returned':
      return {
        ...state,
        searchLoading: false,
        searchResults: action.results,
        searchTime: action.searchTime,
      }
    default:
      return state
  }
}

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const onSubmit = () => {
    dispatch({ type: 'submit search' })
    searchScripts(state.searchTerm).then((response) => {
      dispatch({ type: 'search results returned', ...response.data })
    })
  }
  return (
    <div>
      <div className="container" id="content">
        <div id="top-section">
          <div className="row">
            <div className="medium-2 columns">
              <br />
            </div>
            <div className="medium-8 columns">
              <SearchBar
                searchTerm={state.searchTerm}
                onChange={(e) =>
                  dispatch({ type: 'search bar change', value: e.target.value })
                }
                onSubmit={onSubmit}
                searchLoading={state.searchLoading}
              />
            </div>
            <div className="medium-2 columns">
              <br />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="medium-2 columns">
            <br />
          </div>
          <div className="medium-8 columns">
            <SearchResults
              searchedTerm={state.searchedTerm}
              searchLoading={state.searchLoading}
              searchTime={state.searchTime}
              results={state.searchResults}
            />
          </div>
          <div className="medium-2 columns">
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}
