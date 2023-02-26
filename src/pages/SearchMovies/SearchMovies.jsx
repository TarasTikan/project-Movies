import { FetchSearchMovies } from 'api/moviesApi';
import Navigation from 'components/Navigation/Navigation';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Head } from '../Header/Header.styled';

const Movies = () => {
  const [listFilms, setListFilms] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query === '' || query === null) return;

    FetchSearchMovies(query).then(({ data: { results } }) =>
      setListFilms(results)
    );

    FetchSearchMovies();
  }, [query]);

  const handleSubmitForm = e => {
    e.preventDefault();
    const form = e.target;
    setSearchParams({ query: e.target.elements.query.value });
    form.reset();
  };
  return (
    <>
      <Head>
        <Navigation />
      </Head>
      <form onSubmit={handleSubmitForm}>
        <input type="text" name="query" required />
        <button type="submit">Search</button>
      </form>
      <ul>
        {listFilms.map(({ title, id }) => (
          <li key={id}>
            <Link state={{ from: location }} to={`/movies/${id}`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
