import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlaylists, authenticate } from '../redux/playlists/playlistsSlice';
import { filterPlaylists } from '../utils/filter';
import Playlist from './Playlist';

function Playlists() {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.playlists?.token);
  const playlistData = useSelector((state) => state?.playlists.playlists[0]?.playlists);

  localStorage.setItem('access-token', JSON.stringify(accessToken));

  useEffect(() => {
    dispatch(authenticate());
  }, [dispatch]);

  useEffect(() => {
    if (accessToken) {
      dispatch(getPlaylists(accessToken));
    }
  }, [dispatch, accessToken]);

  const playlists = filterPlaylists(playlistData);

  return (
    <ul className="playlists">
      {playlists?.map((playlist) => (
        <Playlist
          key={playlist.id}
          id={playlist.id}
          name={playlist.name}
          image={playlist.image}
          tracks={playlist.tracks}
        />
      ))}
    </ul>
  );
}

export default Playlists;
