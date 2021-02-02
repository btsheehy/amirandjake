import axios from 'axios'
import apiUrl from './config'
import { Script, ScriptSearchResultsRoot } from '../types/script'

export function searchScripts(query: string): Promise<ScriptSearchResultsRoot> {
  return axios
    .get(apiUrl + 'api/scripts/' + encodeURIComponent(query))
    .then((res) => res.data)
}

export function getScriptById(id: number, query: string): Promise<Script> {
  return axios
    .get(apiUrl + `api/script/?id=${id}&query=${encodeURIComponent(query)}`)
    .then((res) => {
      console.log(res)
      return res.data.results[0]
    })
}
