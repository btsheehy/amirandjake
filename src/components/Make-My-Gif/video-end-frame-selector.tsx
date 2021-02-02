import React, { useMemo, useRef, useEffect, SyntheticEvent } from 'react'

const formatDuration = (d: number) => {
  return (d / 100).toFixed(2) + ' seconds'
}

interface VideoEndFrameSelectorProps {
  startTime: number
  duration: number
  videoSource: string
  sliderLabel: string
  onSliderUpdate: (e: SyntheticEvent<HTMLInputElement, Event>) => any
}

export default ({
  startTime,
  duration,
  videoSource,
  sliderLabel,
  onSliderUpdate,
}: VideoEndFrameSelectorProps) => {
  const videoElement = useRef<HTMLVideoElement>(null)
  const sliderId = useMemo(
    () => '_' + Math.random().toString().replace('.', ''),
    []
  )

  useEffect(() => {
    if (videoElement.current)
      videoElement.current.currentTime = (startTime + duration) / 100
  }, [startTime, duration])
  return (
    <div>
      <video ref={videoElement} src={videoSource} />
      <label htmlFor={sliderId}>{sliderLabel}</label>
      {duration && (
        <input
          id={sliderId}
          type="range"
          min="0"
          max="1000"
          onChange={onSliderUpdate}
          value={duration.toString()}
          style={{ width: '100%' }}
        />
      )}

      <p>{formatDuration(duration)}</p>
    </div>
  )
}
