export interface Script {
  id: number
  script: string
}

export interface ScriptSearchResult {
  id: number
  title: string
  ranking: number
  snippet: string
  videoLink: string
}

export interface ScriptSearchResultsRoot {
  searchTime: number
  results: ScriptSearchResult[]
}
