import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlaylists, authenticate } from '../redux/playlists/playlistsSlice';

const Charts = () => {
  const dispatch = useDispatch();
  const [token, setToken] = useState('');

  const accessToken = useSelector((state) => state.playlists?.token);
  const playlists = useSelector((state) => state.playlists?.playlists[0]?.playlists);

  useEffect(() => {
    dispatch(authenticate());
  }, []);

  useEffect(() => {
    if (accessToken) {
    dispatch(getPlaylists(accessToken));
    }
  }, [accessToken]);

  console.log(accessToken);
  console.log(playlists);


  return (
    <div>Charts</div>
  )
}

export default Charts;

