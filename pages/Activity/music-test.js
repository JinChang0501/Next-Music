import React, { useState, useEffect } from 'react'
import { useSpotifyApi } from '@/hooks/use-SpotifyApi'
import ArtistFollowCard from '@/components/Activity/artist-follow-card'

export default function MusicTest() {
  const { getTopTracks, getArtists, getArtist } = useSpotifyApi()
  const [artists, setArtists] = useState([])
  const [topTracks, setTopTracks] = useState([])
  // const playlistId = '4gJifzM6kxq52z6qf1Khy2'

  // const fetchTopTracks = async () => {
  //   const resData = await getArtists(
  //     '5NpkBOIMi2iJocLhi5MTde',
  //     '1YtYHaWLV0IU7SwhvG6Luk',
  //     '6zn0ihyAApAYV51zpXxdEp',
  //     '78ltY2tUrZpkWJ9CWYGZfl',
  //     '2rspptKP0lPBdlJJAJHqht'
  //   )
  //   if (Array.isArray(resData.artists)) {
  //     setArtists(resData.artists)
  //     console.log(artists)
  //   }
  // }

  // useEffect(() => {
  //   fetchTopTracks()
  // }, [])

  const fetchData = async () => {
    try {
      // topTracks
      const topTracks = await getTopTracks('78ltY2tUrZpkWJ9CWYGZfl')
      console.log(topTracks)

      // artists
      const artists = await getArtists(
        '5NpkBOIMi2iJocLhi5MTde',
        '1YtYHaWLV0IU7SwhvG6Luk',
        '6zn0ihyAApAYV51zpXxdEp',
        '78ltY2tUrZpkWJ9CWYGZfl',
        '2rspptKP0lPBdlJJAJHqht'
      )
      console.log(artists)
      if (Array.isArray(artists.artists)) {
        setArtists(artists.artists)
      }

      // artist
      const artist = await getArtist('78ltY2tUrZpkWJ9CWYGZfl')
      console.log(artist)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const topTracks = await getTopTracks('someArtistId')
  //       console.log(topTracks)

  //       const artists = await getArtists('id1', 'id2', 'id3', 'id4', 'id5')
  //       console.log(artists)

  //       const artist = await getArtist('someArtistId')
  //       console.log(artist)
  //     } catch (error) {
  //       console.error('Error fetching data:', error)
  //     }
  //   }

  //   fetchData()
  // }, [])

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

        {/* <iframe
          title="Spotify Embed: Recommendation Playlist "
          src={`https://open.spotify.com/embed/playlist/4gJifzM6kxq52z6qf1Khy2?utm_source=generator&theme=0`}
          width="100%"
          height="100%"
          style={{ minHeight: '360px' }}
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        /> */}
      </div>
    </>
  )
}
