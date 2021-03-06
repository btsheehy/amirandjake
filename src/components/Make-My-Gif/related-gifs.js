import React from 'react'

export default ({ gifs }) => {
  if (gifs)
    if (gifs.length) {
      return (
        <div>
          {gifs.map((gif) => {
            return (
              <div key={gif.uuid} className="card">
                <a target="_blank" rel="noreferrer" href={gif.url}>
                  <img src={gif.url} />
                </a>
              </div>
            )
          })}
        </div>
      )
    } else {
      return (
        <p style={{ textAlign: 'center' }}>
          No gifs from this video yet. Make the first one!{' '}
        </p>
      )
    }
  else return <p>Loading...</p>
}
