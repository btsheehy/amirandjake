import React, { ChangeEvent, KeyboardEvent } from 'react'

interface SearchBarProps {
  onSubmit: () => void
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  searchLoading: boolean
  searchTerm: string
}

export default ({
  onSubmit,
  onChange,
  searchLoading,
  searchTerm,
}: SearchBarProps) => {
  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) =>
    e.key === 'Enter' ? onSubmit() : null
  return (
    <div>
      <div className="medium-10 columns">
        <input
          placeholder="Search Scripts!"
          onChange={onChange}
          onKeyDown={onKeyDown}
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
