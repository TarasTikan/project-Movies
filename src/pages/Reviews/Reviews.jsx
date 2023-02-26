import { FetchMoviesReviews } from 'api/moviesApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    FetchMoviesReviews(movieId).then(({ data: { results } }) =>
      setReviews(results)
    );
  }, [movieId]);

  if (reviews.length === 0) {
    return <p>We don't have any reviews for this movies</p>;
  }
  return (
    <ul>
      {reviews.map(({ author, content, id }) => (
        <li key={id}>
          <h3>Author: {author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
