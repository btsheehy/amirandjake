import React, { useMemo, useRef, useEffect } from 'react'

const formatDuration = (d) => {
  d = Number(d)
  return (d / 100).toFixed(2) + ' seconds'
}

export default ({
  startTime,
  duration,
  videoSource,
  sliderLabel,
  onSliderUpdate,
}) => {
  const videoElement = useRef(null)
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
