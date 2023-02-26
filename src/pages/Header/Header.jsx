import { useEffect, useState } from 'react';
import { FetchTrendingMouviesList } from 'api/moviesApi';
import Navigation from 'components/Navigation/Navigation';
import TrendListMovies from 'components/TrendListMovies/TrendListMovies';
import { Head } from './Header.styled';
const Header = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    FetchTrendingMouviesList().then(({ data: { results } }) =>
      setMovies(results)
    );
  }, []);
  return (
    <>
      <Head>
        <Navigation />
      </Head>
      <main>
        <TrendListMovies movies={movies} />
      </main>
    </>
  );
};

export default Header;
