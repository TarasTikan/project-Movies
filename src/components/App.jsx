import { Routes, Route } from 'react-router-dom';
import { routes } from 'Router/paths';
import { lazy, Suspense } from 'react';
export const App = () => {
  const Header = lazy(() => import('pages/Header/Header'));
  const MoviesDetails = lazy(() => import('pages/MoviesDetails/MoviesDetails'));
  const Actors = lazy(() => import('pages/Cast/Cast'));
  const Reviews = lazy(() => import('pages/Reviews/Reviews'));

  const Movies = lazy(() => import('pages/SearchMovies/SearchMovies'));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={routes.home} element={<Header />}></Route>
        <Route path={routes.movieDetails} element={<MoviesDetails />}>
          <Route path={routes.cast} element={<Actors />} />
          <Route path={routes.reviews} element={<Reviews />} />
        </Route>
        <Route path={routes.movies} element={<Movies />}></Route>
        <Route path="*" element={<>404 Not found</>}></Route>
      </Routes>
    </Suspense>
  );
};
