import React, { useState } from 'react'
import { getScriptById } from '../../controllers/scripts'
import { Link } from 'react-router-dom'

export default ({ result, searchedTerm }) => {
  const [scriptText, setScriptText] = useState(null)
  const [showFullScript, setShowFullScript] = useState(false)

  const toggleShowFullScript = () => {
    if (!scriptText) {
      getScriptById(result.id, searchedTerm).then((response) => {
        setScriptText(response.data.results[0].script)
      })
    }
    setShowFullScript(!showFullScript)
  }

  const makeMyGifLink = `make_my_gif/${result.id}/${searchedTerm}`
  return (
    <div className="card" key={result.id}>
      <div className="card-divider">
        <h4>{result.title}</h4>
      </div>
      <div className="card-section">
        <iframe title={result.title} src={result.video_link} />
      </div>
      <div className="card-section">
        <pre
          className="snippet"
          dangerouslySetInnerHTML={{
            __html: result.snippet,
          }}
        />
      </div>
      {showFullScript ? (
        <div>
          <button onClick={toggleShowFullScript} className="button">
            Hide Full Script
          </button>
          <Link className="button" to={makeMyGifLink}>
            Make My Gif!
          </Link>
          <div className="card-section full-script">
            <p
              dangerouslySetInnerHTML={{
                __html: scriptText || 'Loading...',
              }}
            />
          </div>
        </div>
      ) : (
        <div>
          <button
            title={result.id}
            onClick={toggleShowFullScript}
            className="button"
          >
            Show Full Script
          </button>
          <Link className="button" to={makeMyGifLink}>
            Make My Gif!
          </Link>
        </div>
      )}
    </div>
  )
}
