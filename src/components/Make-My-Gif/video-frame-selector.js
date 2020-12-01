import React, { useRef, useMemo, useEffect, useState } from 'react'

const formatTime = (ms) => {
  let s = Number(ms) / 100
  let min = Math.floor(s / 60)
  let seconds = Math.floor(s - min * 60)
  seconds = seconds >= 10 ? seconds : '0' + seconds.toString()
  let milliseconds = s.toString().split('.')[1] | '00'
  return min + ':' + seconds + (milliseconds ? '.' + milliseconds : '')
}

export default ({
  videoSource,
  sliderLabel,
  sliderTime,
  sliderMin,
  onSliderUpdate,
}) => {
  const videoElement = useRef(null)
  const [duration, setDuration] = useState(null)
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
        onLoadedMetadata={(e) => setDuration(e.target.duration * 100)}
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
