import axios from 'axios'
import apiUrl from './config'
import { Script, ScriptSearchResult } from '../types/script'

export function searchScripts(query: string): Promise<ScriptSearchResult[]> {
  return axios.get(apiUrl + 'api/scripts/' + encodeURIComponent(query))
}

export function getScriptById(id: number, query: string): Promise<Script> {
  return axios.get(
    apiUrl + `api/script/?id=${id}&query=${encodeURIComponent(query)}`
  )
}
