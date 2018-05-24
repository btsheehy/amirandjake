import axios from 'axios'
import apiUrl from './config'

export function getVideoById(id) {
	return axios.get(apiUrl + 'api/video/' + id)
}
