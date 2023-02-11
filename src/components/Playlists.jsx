import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlaylists, authenticate } from '../redux/playlists/playlistsSlice';
import { filterPlaylists } from '../utils/filter';
import Playlist from './Playlist';

function Playlists() {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.playlists?.token);
  const playlistData = useSelector((state) => state?.playlists.playlists[0]?.playlists);
  const options = ['All playlists', 'Below 70 Tracks', '70 - 99 Tracks', 'Above 100 Tracks'];
  const [selected, setSelected] = useState(options[0]);

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

  const [displayedPlaylists, setDisplayedPlaylists] = useState(playlists);

  const display = () => {
    const modified = [];
    // default case
    setDisplayedPlaylists(playlists);

    // below 50 tracks
    if (selected === options[1]) {
      playlists.forEach((playlist) => {
        if (playlist.tracks < 70) {
          modified.push(playlist);
          setDisplayedPlaylists(modified);
        }
      });
    }
    // between 50 and 99
    if (selected === options[2]) {
      playlists.forEach((playlist) => {
        if (playlist.tracks > 70 && playlist.tracks < 99) {
          modified.push(playlist);
          setDisplayedPlaylists(modified);
        }
      });
    }
    if (selected === options[3]) {
      playlists.forEach((playlist) => {
        if (playlist.tracks > 100) {
          modified.push(playlist);
          setDisplayedPlaylists(modified);
        }
      });
    }
  };

  useEffect(() => {
    if (selected) {
      display();
    }
  }, [selected]);

  return (
    <>
      <div className="filter-section">
        <select value={selected} onChange={(e) => setSelected(e.target.value)} className="select-dropdown">
          {options && options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>
      <ul className="playlists">
        {displayedPlaylists.length < 1 ? playlists.map((playlist) => (
          <Playlist
            key={playlist.id}
            id={playlist.id}
            name={playlist.name}
            image={playlist.image}
            tracks={playlist.tracks}
          />
        ))
          : displayedPlaylists.map((playlist) => (
            <Playlist
              key={playlist.id}
              id={playlist.id}
              name={playlist.name}
              image={playlist.image}
              tracks={playlist.tracks}
            />
          ))}
      </ul>
    </>
  );
}

export default Playlists;
