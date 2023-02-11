import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlaylists, authenticate } from '../redux/playlists/playlistsSlice.js';
import { filterPlaylists } from '../utils/filter.js';
import Playlist from './Playlist.jsx';

const Playlists = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.playlists?.token);
  const playlistData = useSelector((state) => state?.playlists.playlists[0]?.playlists);

  localStorage.setItem('access-token', JSON.stringify(accessToken));

  useEffect(() => {
    dispatch(authenticate());
  }, []);

  useEffect(() => {
    if (accessToken) {
    dispatch(getPlaylists(accessToken));
    }
  }, [accessToken]);

  const playlists = filterPlaylists(playlistData);

  return (
    <ul className="playlists">
      {playlists?.map((playlist) => (
        <Playlist key={playlist.id} id={playlist.id} name={playlist.name} image={playlist.image} tracks={playlist.tracks} />
      ))}
    </ul>
  )
}
  
export default Playlists;