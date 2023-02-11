import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Playlist({
  id, name, image, tracks,
}) {
  const details = { id, name, tracks };

  const imageStyle = {
    backgroundImage: `linear-gradient(
      rgba(248, 33, 112, 0.85), 
      rgba(248, 33, 112, 0.45)
    ),url(${image})`,
  };

  return (
    <li key={id} className="playlist">
      <div className="playlist-body" style={imageStyle}>
        <Link to="/details" state={details} className="playlist-link">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" id="enterIcon" height="1.5em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" /></svg>
        </Link>
        <div className="playlist-bottom">
          <h4 className="playlist-name">{name}</h4>
          <p className="playlist-track-count">{tracks}</p>
        </div>
      </div>
    </li>
  );
}

Playlist.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tracks: PropTypes.number.isRequired,
};

export default Playlist;
