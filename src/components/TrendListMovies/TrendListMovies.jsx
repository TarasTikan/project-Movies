import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TrendListMovies = ({ movies }) => {
  // const location = useLocation()
  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies.map(({ title, name, id }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title ?? name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

TrendListMovies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
    })
  ),
};
export default TrendListMovies;
