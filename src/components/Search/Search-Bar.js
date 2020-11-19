import React from 'react'

export default ({ onSubmit, onChange, searchLoading, searchTerm }) => {
  const onKeyPress = (e) => (e.key === 'Enter' ? onSubmit() : null)
  return (
    <div>
      <div className="medium-10 columns">
        <input
          placeholder="Search Scripts!"
          onChange={onChange}
          onKeyPress={onKeyPress}
          type="text"
          value={searchTerm}
        />
      </div>
      <div className="medium-2 columns">
        {searchLoading ? (
          <button disabled className="button disabled">
            Loading...
          </button>
        ) : (
          <button onClick={onSubmit} className="button">
            Search
          </button>
        )}
      </div>
    </div>
  )
}
