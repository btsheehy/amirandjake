import React, { useRef, useCallback } from 'react'

export default ({ videoSource, min, max, caption }) => {
  const videoElement = useRef(null)

  const onVideoTimeChange = useCallback(
    (e) => {
      if (videoElement.current) {
        let { currentTime } = e.target
        currentTime = currentTime * 100
        if (currentTime >= max || currentTime <= min)
          videoElement.current.currentTime = min / 100
      }
    },
    [min, max, videoElement]
  )

  return (
    <div style={{ position: 'relative' }}>
      <video
        id="video-clip-preview"
        autoPlay
        loop
        controls
        src={videoSource}
        onTimeUpdate={onVideoTimeChange}
        style={{ position: 'relative' }}
        ref={videoElement}
      />
      <h4
        style={{
          fontSize: Number(caption.size) * 1.5 + 'pt',
          fontWeight: 'bold',
          fontFamily: 'Arial',
          color: caption.color,
          textAlign: 'center',
          position: 'absolute',
          bottom: 0,
          width: '100%',
          lineHeight: 1.2,
        }}
      >
        {caption.text}
      </h4>
    </div>
  )
}
