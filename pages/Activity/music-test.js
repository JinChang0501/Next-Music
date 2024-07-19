import React, { useState, useEffect } from 'react'
import { getArtists } from '@/services/spotify'
import ArtistFollowCard from '@/components/Activity/artist-follow-card'

export default function MusicTest() {
  const [artists, setArtists] = useState([])
  const playlistId = '4gJifzM6kxq52z6qf1Khy2'

  const fetchTopTracks = async () => {
    const resData = await getArtists(
      '5NpkBOIMi2iJocLhi5MTde',
      '1YtYHaWLV0IU7SwhvG6Luk',
      '6zn0ihyAApAYV51zpXxdEp',
      '78ltY2tUrZpkWJ9CWYGZfl',
      '2rspptKP0lPBdlJJAJHqht'
    )
    if (Array.isArray(resData.artists)) {
      setArtists(resData.artists)
      console.log(artists)
    }
  }

  useEffect(() => {
    fetchTopTracks()
  }, [])

  return (
    <>
      <div>
        <h1>TEST</h1>
        {artists.length > 0 ? (
          artists.map((artist) => (
            <ArtistFollowCard
              key={artist.id}
              imgSrc={artist.images[2]?.url} // 使用可選鏈運算符
              artist_name={artist.name}
            />
          ))
        ) : (
          <p>Loading artists...</p>
        )}

        <iframe
          title="Spotify Embed: Recommendation Playlist "
          src={`https://open.spotify.com/embed/playlist/4gJifzM6kxq52z6qf1Khy2?utm_source=generator&theme=0`}
          width="100%"
          height="100%"
          style={{ minHeight: '360px' }}
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </>
  )
}
