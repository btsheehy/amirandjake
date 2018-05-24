import axios from 'axios'
import apiUrl from './config'

let data = {}

export function searchScripts(query) {
	return axios.get(apiUrl + 'api/scripts/' + encodeURIComponent(query))
}

export function getScriptById(id, query) {
	return axios.get(
		apiUrl + `api/script/?id=${id}&query=${encodeURIComponent(query)}`
	)
}
