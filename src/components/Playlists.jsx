import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlaylists, authenticate } from '../redux/playlists/playlistsSlice';
import { filterPlaylists } from '../utils/filter';
import Playlist from './Playlist';

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

  console.log(playlists);

  return (
    <div>
      {playlists?.map((playlist) => (
        <Playlist id={playlist.id} name={playlist.name} image={playlist.image} tracks={playlist.tracks} />
      ))}
    </div>
  )
}
  
export default Playlists;