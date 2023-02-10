import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Playlist = ({
  id, name, image, tracks
}) => {

  return (
    <>
      <ul>
        <li key={id}>
          <img src={image} />
          <h4>{name}</h4>
          <p>{tracks}</p>
        </li>
      </ul>
      <Link to="/details" state={id}>See Tracks</Link>
    </>
  );
}
export default Playlist;