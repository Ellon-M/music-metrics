import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getPlaylistItems } from "../redux/playlists/detailsSlice";
import { filterTracks } from "../utils/filter";

const PlaylistInfo = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const token = JSON.parse(localStorage.getItem('access-token'));
  const playlistId = location.state?.id;
  const playlistName = location.state?.name;
  const playlistCount = location.state?.tracks;

  const values = { token, playlistId };

  useEffect(() => {
    dispatch(getPlaylistItems(values));
  }, []);

  let details = useSelector((state) => state.details?.details[0]);

  const tracks = filterTracks(details);

  return (
    <div className="details-container">
      <div className="details-top">
        <h3>{playlistName}<br/>({playlistCount})</h3>
      </div>
      <ul className="tracks-list">
        {tracks && tracks.map((track) => (
          <li key={track.id} className="track">
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
              <svg className="track-play-btn" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" id="enterIcon" height="1.5em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path></svg>
            </div>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default PlaylistInfo;