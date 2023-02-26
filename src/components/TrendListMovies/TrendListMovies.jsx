import { Link } from 'react-router-dom';

const TrendListMovies = ({ movies }) => {
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

export default TrendListMovies;
