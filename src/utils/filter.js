export const filterPlaylists = (data) => {
  let playlists = [];
  data?.items?.map((item, index) => {
    const playlistInfo = {
      id: item?.id || null,
      name: item?.name || "",
      tracks: item?.tracks?.total,
      image: item?.images[0]?.url,
    }
    playlists.push(playlistInfo);
  })

  return playlists;
}