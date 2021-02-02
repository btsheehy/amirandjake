import axios from 'axios'
import apiUrl from './config'
import { Video } from '../types/video'

export function getVideoById(id: number): Promise<Video> {
  return axios.get(apiUrl + 'api/video/' + id).then((res) => res.data)
}
