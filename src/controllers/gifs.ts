import axios from 'axios'
import apiUrl from './config'
import { Gif, GifConfig, CreatedGifResponse } from '../types/gif'

export function createGif(
  config: GifConfig,
  videoId: number,
  searchQuery: string
): Promise<CreatedGifResponse> {
  return axios
    .post(apiUrl + 'api/gif/', {
      gifConfig: config,
      videoId,
      searchQuery,
    })
    .then((res) => res.data)
}

export function deleteGif(deleteKey: string): Promise<void> {
  return axios.delete(apiUrl + 'api/gif/' + deleteKey)
}

export function getGifsByVideo(videoId: number): Promise<Gif[]> {
  return axios
    .get(apiUrl + 'api/gif_by_video/' + videoId)
    .then((res) => res.data)
}

export function getAllGifs(): Promise<Gif[]> {
  return axios.get(apiUrl + 'api/all_gifs').then((res) => res.data)
}
