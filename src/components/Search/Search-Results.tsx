import React, { Dispatch, SetStateAction, useState, useEffect } from 'react'
import SearchResultCard from './Search-Result-Card'
import { ScriptSearchResult } from '../../types/script'

interface SearchResultsProps {
  searchedTerm: string
  results: ScriptSearchResult[] | null
  searchTime: number | null
  searchLoading: boolean
}

const resultsPerPage = 5

export default ({
  searchedTerm,
  results,
  searchLoading,
  searchTime,
}: SearchResultsProps) => {
  const [currentPage, setCurrentPage]: [
    number,
    Dispatch<SetStateAction<number>>
  ] = useState(1)

  useEffect(() => {
    setCurrentPage(1)
  }, [searchedTerm])

  const changePage = (newPage: number): void => {
    setCurrentPage(newPage)
    window.scroll(0, 0)
  }

  const changePageHoc = (n: number) => () => changePage(n)

  if (!results) return null
  const resultOrResults = results.length === 1 ? 'result' : 'results'
  const pages: number[] = []
  let i = 0
  while (i < Math.ceil(results.length / resultsPerPage)) {
    pages.push(i + 1)
    i++
  }
  const resultsOnThisPage = results.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  )
  const pageNumbersToShow = pages.slice(
    Math.max(0, currentPage - 3),
    Math.min(pages.length - 1, currentPage + 3)
  )

  return (
    <div id="search-results">
      {searchLoading ? (
        ''
      ) : (
        <p>
          Displaying {results.length} {resultOrResults} for{' '}
          <strong>{searchedTerm}</strong> ({searchTime} ms)
        </p>
      )}

      {resultsOnThisPage.map((result) => {
        return (
          <SearchResultCard
            key={result.id}
            result={result}
            searchedTerm={searchedTerm}
          />
        )
      })}
      {results.length > resultsPerPage && (
        <div>
          <ul className="pagination">
            {currentPage !== 1 && (
              <li>
                <a onClick={changePageHoc(currentPage - 1)}>
                  <i className="fi-arrow-left" />
                </a>
              </li>
            )}
            {!pageNumbersToShow.includes(1) && (
              <li>
                <a onClick={changePageHoc(1)}>1 . . .</a>
              </li>
            )}
            {pageNumbersToShow.map((page) => {
              return (
                <li key={page}>
                  <a
                    className={currentPage === page ? 'current' : ''}
                    onClick={changePageHoc(page)}
                  >
                    {page}
                  </a>
                </li>
              )
            })}
            {!pageNumbersToShow.includes(pages[pages.length - 1]) && (
              <div style={{ display: 'inline' }}>
                <li>. . . </li>
                <li>
                  <a onClick={changePageHoc(pages.length - 1)}>
                    {pages[pages.length - 1]}
                  </a>
                </li>
              </div>
            )}
            {currentPage !== pages.length && (
              <li>
                <a onClick={changePageHoc(currentPage + 1)}>
                  <i className="fi-arrow-right" />
                </a>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
