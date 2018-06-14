import axios from 'axios'
import apiUrl from './config'

export function createGif(config, videoId, searchQuery) {
	return axios.post(apiUrl + 'api/gif/', {
		gif_config: JSON.stringify(config),
		videoId,
		searchQuery
	})
}

export function deleteGif(deleteKey) {
	return axios.delete(apiUrl + 'api/gif/' + deleteKey)
}

export function getGifsByVideo(videoId) {
	return axios.get(apiUrl + 'api/gif_by_video/' + videoId)
}
