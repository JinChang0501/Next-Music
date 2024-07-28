// import React from 'react'
// import {
//   usePlaybackState,
//   useSpotifyPlayer,
// } from 'react-spotify-web-playback-sdk'

// export default function TogglePlay() {
//   const playbackState = usePlaybackState()
//   const player = useSpotifyPlayer()

//   // if (!playbackState || !player) return null

//   const handleClick = () => {
//     if (playbackState?.paused) {
//       player.resume()
//     } else {
//       player.pause()
//     }
//   }

//   return (
//     <button className="bg-white" onClick={handleClick}>
//       {playbackState?.paused ? 'Play' : 'Pause'}
//     </button>
//   )
// }
