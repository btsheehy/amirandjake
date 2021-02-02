import React, {
  useRef,
  useMemo,
  useEffect,
  useState,
  SyntheticEvent,
} from 'react'

const formatTime = (ms: number): string => {
  const s = Number(ms) / 100
  const min = Math.floor(s / 60)
  const seconds = Math.floor(s - min * 60)
  const secondsString = seconds >= 10 ? seconds : '0' + seconds.toString()
  const milliseconds = s.toString().split('.')[1] || '00'
  return min + ':' + secondsString + (milliseconds ? '.' + milliseconds : '')
}

interface VideoFrameSelectorProps {
  videoSource: string
  sliderLabel: string
  sliderTime: number
  sliderMin?: number
  onSliderUpdate: (e: SyntheticEvent<HTMLInputElement, Event>) => void
}

export default ({
  videoSource,
  sliderLabel,
  sliderTime,
  sliderMin,
  onSliderUpdate,
}: VideoFrameSelectorProps) => {
  const videoElement = useRef<HTMLVideoElement>(null)
  const [duration, setDuration] = useState<number | null>(null)
  useEffect(() => {
    if (videoElement.current)
      videoElement.current.currentTime = sliderTime / 100
  }, [sliderTime])
  const sliderId = useMemo(
    () => '_' + Math.random().toString().replace('.', ''),
    []
  )
  return (
    <div>
      <video
        onLoadedMetadata={(e: SyntheticEvent<HTMLVideoElement, Event>) => {
          setDuration(e.currentTarget.duration * 100)
        }}
        ref={videoElement}
        src={videoSource}
      />
      <label htmlFor={sliderId}>{sliderLabel}</label>
      {duration && (
        <input
          id={sliderId}
          type="range"
          min={sliderMin ? sliderMin.toString() : '0'}
          max={duration.toString()}
          onChange={onSliderUpdate}
          value={sliderTime.toString()}
          style={{ width: '100%' }}
        />
      )}

      <p>{formatTime(sliderTime)}</p>
    </div>
  )
}
