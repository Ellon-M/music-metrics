import PropTypes from 'prop-types';

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
    </>
  );
}
export default Playlist;