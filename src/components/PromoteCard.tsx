'use client'
import { useState } from 'react'
import VideoPlayer from './VideoPlayer'
import useWindowListener from '@/hooks/useWindowListener'

export default function PromoteCard() {
  const [playing, setPlaying] = useState(true)

  useWindowListener('contextmenu', (e) => {
    e.preventDefault()
  })

  return (
    <div className="w-[80%] mx-auto my-6 p-4 flex flex-row items-center gap-6 rounded-lg bg-gray-200 shadow-lg">
      <VideoPlayer vdoSrc="/vdo/venue.mp4" isPlaying={playing} />
      <div className="flex flex-col gap-4">
        <p>Book your venue today.</p>
        <button
          className="w-24 rounded-full bg-sky-600 px-4 py-2 text-white hover:bg-sky-700"
          onClick={() => setPlaying(!playing)}
        >
          {playing ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  )
}
