export interface Gif {
  uuid: string
  url: string
  deleteKey?: string
  videoId: number
  start: number
  end: number
  searchTerm: string
  dateCreated: Date
}

export interface CreatedGifResponse {
  success: boolean
  url: string
  uuid: string
  deleteKey: string
}

export interface Caption {
  text: string
  color: string
  size: number
}
export interface GifConfig {
  startTime: number
  endTime: number
  loopBack: boolean
  fadeIn: boolean
  captions: Caption[]
}
