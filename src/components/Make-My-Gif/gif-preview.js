import React from 'react'

export default ({ hide, gifUrl, decline, accept }) => {
  return (
    <div style={{ display: hide ? 'none' : '' }} id="gif-preview">
      <div>
        <div className="grid-x">
          <div className="cell large-3 medium-2" />
          <img
            className="cell large-6 medium-8"
            style={{ display: hide ? 'none' : '' }}
            src={gifUrl || ''}
          />
        </div>
        <div>
          <h3 style={{ textAlign: 'center', color: 'white' }}>
            Does your gif look good?
          </h3>
        </div>
        <div className="grid-x">
          <div className="cell large-3 medium-2" />
          <div className="cell large-6 medium-8 button-group">
            <div className="grid-x">
              <div className="cell large-3" />
              <button onClick={decline} className="button secondary large-3">
                No, delete it!
              </button>
              <button onClick={accept} className="button primary large-3">
                Yes, it's perfect!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
