import React from 'react'

export default function MusicTest() {
  // Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
  const token = 'BQAKcQr0sbXP4L_fTc2VmcDCK9Omh0h6R-BnNv5SaHa_ufiZZG3CWpCK6U0UB79t7wqTsJyAneDR5STrBVEPzgq4X-4S5WKDXDC-NLIIlBDhz-cYI08'
  async function fetchWebApi(endpoint, method, body) {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method,
      body:JSON.stringify(body)
    })
    return await res.json()
  }

  async function getTopTracks(){
    // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
    return (await fetchWebApi(
      'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
    )).items
  }

const topTracks = await getTopTracks()
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
)
  return (
    <>
      
    </>
  )
}
