import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getPlaylistItems } from "../redux/playlists/detailsSlice";
import { authenticate } from '../redux/playlists/playlistsSlice';


const PlaylistInfo = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const token = JSON.parse(localStorage.getItem('access-token'));
  const playlistId = location.state;
  const tempId = '37i9dQZF1DX9RwfGbeGQwP';
//   const url = new URL(tempId, import.meta.env.VITE_ENDPOINT);

//   const token = useSelector((state) => state.playlists?.token);
  const details = useSelector((state) => state.details?.details);

//   useEffect(() => {
//     dispatch(authenticate());
//   }, []);

const values = { token, playlistId };

  useEffect(() => {
    if (token) {
      dispatch(getPlaylistItems(values));
    }
  }, [token])
  
  console.log(details);

  return (
    <>
      <h3>Details page</h3>
    </>
  )
}

export default PlaylistInfo;