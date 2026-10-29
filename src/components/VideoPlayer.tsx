'use client'
import { useEffect, useRef } from 'react'

export default function VideoPlayer({ vdoSrc, isPlaying }: { vdoSrc: string, isPlaying: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (isPlaying) {
      videoRef.current?.play()
    } else {
      videoRef.current?.pause()
    }
  }, [isPlaying])

  return (
    <video className="w-[40%]" ref={videoRef} src={vdoSrc} muted loop controls />
  )
}
