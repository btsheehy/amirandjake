import axios from 'axios'
import apiUrl from './config'
import { Gif, GifConfig, CreatedGifResponse } from '../types/gif'

export function createGif(
  config: GifConfig,
  videoId: number,
  searchQuery: string
): Promise<CreatedGifResponse> {
  return axios.post(apiUrl + 'api/gif/', {
    gifConfig: config,
    videoId,
    searchQuery,
  })
}

export function deleteGif(deleteKey): Promise<void> {
  return axios.delete(apiUrl + 'api/gif/' + deleteKey)
}

export function getGifsByVideo(videoId): Promise<Gif[]> {
  return axios.get(apiUrl + 'api/gif_by_video/' + videoId)
}

export function getAllGifs(): Promise<Gif[]> {
  return axios.get(apiUrl + 'api/all_gifs')
}
