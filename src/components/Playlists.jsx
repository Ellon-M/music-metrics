import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlaylists, authenticate } from '../redux/playlists/playlistsSlice';
import { filterPlaylists } from '../utils/filter';
import Loader from './Loader';
import Playlist from './Playlist';

const Playlists = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.playlists?.token);
  const playlistData = useSelector((state) => state.playlists.playlists[0]?.playlists);
  const pending = useSelector((state) => state.playlists?.loading);


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
      {!pending ? playlists?.map((playlist) => (
        <Playlist id={playlist.id} name={playlist.name} image={playlist.image} tracks={playlist.tracks} />
      )) : <Loader />}
    </ul>
  )
}
  
export default Playlists;