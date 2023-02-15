import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getPlaylistItems } from "../redux/playlists/detailsSlice";
import { filterTracks } from "../utils/filter";

const PlaylistInfo = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const token = JSON.parse(localStorage.getItem('access-token'));
  const playlistId = location.state?.id;
  const playlistName = location.state.name;
  const playlistCount = location.state.tracks;
  const playlistArt = location.state.image;

  const detailsTopStyle = {
    backgroundImage: `linear-gradient(
      rgba(163, 255, 168, 0.40), 
      rgba(29, 29, 29, 0.90)
    ),url(${playlistArt})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }

  const values = { token, playlistId };

  useEffect(() => {
    dispatch(getPlaylistItems(values));
  }, []);

  let details = useSelector((state) => state.details?.details[0]);
  console.log(details);

  const tracks = filterTracks(details);


  return (
    <div className="details-page">
      <nav>
        <div className="nav-left">
          <Link to="/">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAd0lEQVR4nO2XUQqAIBAFPUOJdJfwo/sfJiz6HhGNor8gV7CdC4w+nstqTC8ADhilpR7YgFVMTpbuZAIwSEjnctPEASwq/QyNtypoe3uM196kaRz66tKm4mZRn6gcjR0tnAD8+Z37x3prpeWhHMCJic31hZlEpW+IwObfu+3/VrMAAAAASUVORK5CYII=" alt="back-icon" />
          </Link>
        </div>
      </nav>
      <div className="details-container">
        <div className="details-top" style={detailsTopStyle}>
          <h3>{playlistName}<br/>({playlistCount})</h3>
        </div>
        <ul className="tracks-list">
          {tracks && tracks.map((track) => (
            <li className="track">
              <div className="track-image-container">
                <img className="track-image" src={track.image} />
              </div>
              <div className="track-info">
                <h5 className="track-name">{track.name}</h5>
                <span className="track-artist">
                  {track.artists.map((artist) => <span className="track-artist-text">{artist}</span>)}
                </span>
              </div>
              <div className="track-popularity-play">
                <h5 className="track-popularity">{track.popularity}</h5>   
                <svg className="track-play-btn" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" id="enterIcon" height="1.5em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" /></svg>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PlaylistInfo;