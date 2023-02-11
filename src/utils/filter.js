// filter playlist data to only return the required values
export const filterPlaylists = (data) => {
  const playlists = [];
  data?.items?.map((item) => {
    const playlistInfo = {
      id: item?.id || null,
      name: item?.name || '',
      tracks: item?.tracks?.total,
      image: item?.images[0]?.url,
    };
    playlists.push(playlistInfo);
    return playlistInfo;
  });

  return playlists;
};

// filter and sort with respect to track's own popularity index
export const filterTracks = (data) => {
  const tracks = [];
  data?.items?.map((item) => {
    const artistNames = [];
    item?.track?.artists?.forEach((artist) => { artistNames.push(artist.name); });
    const trackInfo = {
      id: item.track.id,
      name: item.track.name,
      artists: artistNames,
      image: item?.track?.album?.images[0]?.url,
      popularity: item.track.popularity,
    };
    if (item.track.popularity > 15) {
      tracks.push(trackInfo);
    }
    return artistNames;
  });

  return tracks.sort((a, b) => b.popularity - a.popularity);
};
