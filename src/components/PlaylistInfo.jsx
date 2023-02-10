import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getPlaylistItems } from "../redux/playlists/detailsSlice";
import { filterTracks } from "../utils/filter";

const PlaylistInfo = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const token = JSON.parse(localStorage.getItem('access-token'));
  const playlistId = location.state.id;
  const playlistName = location.state.name;
  const playlistCount = location.state.tracks;

  const values = { token, playlistId };

  useEffect(() => {
    dispatch(getPlaylistItems(values));
  }, []);

  let details = useSelector((state) => state.details?.details[0]);

  const tracks = filterTracks(details);
  
  console.log(tracks);

  return (
    <div className="details-container">
      <div className="details-top">
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
              <img className="track-play-btn" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACj0lEQVR4nMWWy08TURTGa3ybGkFeC41AjRvE+GcYnzGiblyamLgwunLtyqBGBBe1kNBqOlXBxI3AxkSpVEEKbanG1opokAK2jVpbnbYZ/cyZQAed9t6ZYdQvOc10Mvf+MnPP+c6xWO0W/I+waH2wpms9jg0cRHvwCnpiHvjiXjnomu4d7T+A6s515oF3Co3wRG/hWyELnugZIXpTXmMYXNW5FtdDV5H/kYde5aSc/BU2O9boA9c7qzEUH8RyNTL3FDZXnTawzVWH9+kpmKV36bdodNWywZWO1aa86Z8anvPJR1cWTGf6t9QevFwa3CzYmIn0ITONl6mwYXBOyqHJ3aAGU8mwNDo/jE03VuKc9zRSYtIQXIi4fgeTOfDq1D8/Uly0pbsCbYFW+S30KFvIFE1GBh8fOMRdNPbxuSozd3t24P5kry54S/9+BUzFzgePljWDww/2IPrpla4ks9DPvTd3uAvGE36mBVY4VuHM4CkkvyeY+/TEPApYS+3ywIuxtbtSPv9yFfIk/lgB0x+eAokxTeBtzirYwx2Qfkol9/HOPFLAvbHbXHAwMc4Ekuud951FOv+Fuc/dmKAvuULJADO5Xn+OQIuuBS4pYGriPE0kgyrgLmG77nI60rdXAZOBZwpfmQvCqVARWNu1ARf9FyBK4vIMxGq3yJMDSy9SE9hoX4GTD08gnp2BEbkjTrVX07jCssDZbFxub0YlSiKa3PWl26KWJDOqtkDrvx8Ens0OqeYv1ehDYwqNK2ZpKj2JBleNtmGP3EeLm/FEOaF52LMuBH0a6iR6e+5iItGZ6h5vrUuCMpEmB6pBnsgLqGSWZq9hsHUhqPCpidNXIL+lJKSga7rX0rdPNUmaAjY7fgHuHICUjUc0kgAAAABJRU5ErkJggg=="/>
            </div>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default PlaylistInfo;