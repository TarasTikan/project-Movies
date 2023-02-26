import { useEffect, useState } from 'react';
import { FetchMoviesDetails } from 'api/moviesApi';
import {
  Link,
  useNavigate,
  Outlet,
  useParams,
  useLocation,
} from 'react-router-dom';
import InfoMovies from 'components/InfoMovies/infoMovies';
import Navigation from 'components/Navigation/Navigation';
import { WrapLink, BackBtn } from './MoviesDetails.styled';
import { Head } from 'pages/Header/Header.styled';
const MoviesDetails = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  useEffect(() => {
    FetchMoviesDetails(movieId).then(
      ({
        data: {
          overview,
          title,
          genres,
          popularity,
          backdrop_path,
          release_date,
        },
      }) =>
        setDetails([
          title,
          popularity,
          overview,
          genres,
          backdrop_path,
          release_date,
        ])
    );
  }, [movieId]);

  if (details[2] === undefined) {
    return;
  }

  const handleBackBtn = () => {
    navigate(location?.state?.from ?? '/goit-react-hw-05-movies');
  };
  return (
    <>
      <Head>
        <Navigation />
      </Head>
      <BackBtn onClick={handleBackBtn} type="Button">
        Go back
      </BackBtn>
      <InfoMovies
        photo={details[4]}
        title={details[0]}
        score={Math.round(details[1])}
        overview={details[2]}
        genres={details[3]}
        data={Number.parseInt(details[5])}
      />

      <WrapLink>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link state={location.state} to={`cast`}>
              Cast
            </Link>
          </li>
          <li>
            <Link state={location.state} to={`reviews`}>
              Reviews
            </Link>
          </li>
        </ul>
      </WrapLink>

      <Outlet />
    </>
  );
};

export default MoviesDetails;
