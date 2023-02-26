import { FetchActorsList } from 'api/moviesApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ActorsItem } from './Cast.styled';
const Actors = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    FetchActorsList(movieId).then(({ data: { cast } }) => setActors(cast));
  }, [movieId]);

  if (actors.length === 0) {
    return <p>We don't have any actors for this movies</p>;
  }

  return (
    <ul>
      {actors.map(({ name, profile_path, credit_id, character }) => {
        return (
          <ActorsItem key={credit_id}>
            {profile_path === null ? (
              <img
                src={'https://emojis.wiki/thumbs/emojis/cross-mark.webp'}
                alt="img"
                width="100px"
                height="150px"
              />
            ) : (
              <img
                src={`http://image.tmdb.org/t/p/w500${profile_path}`}
                alt="img"
                width="100px"
                height="150px"
              />
            )}
            <p>{name}</p>
            <p>Character: {character}</p>
          </ActorsItem>
        );
      })}
    </ul>
  );
};

export default Actors;
