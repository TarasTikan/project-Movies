import { WrapInfo, GanresList } from './InfoMovies.styled';

const InfoMovies = ({ photo, title, score, overview, genres, data }) => {
  return (
    <WrapInfo>
      <div>
        {photo === null ? (
          <img
            src={'https://emojis.wiki/thumbs/emojis/cross-mark.webp'}
            alt="img"
            width="350px"
            heigh="250px"
          />
        ) : (
          <img
            src={`http://image.tmdb.org/t/p/w500${photo}`}
            alt="img"
            width="350px"
            height="250px"
          />
        )}
      </div>
      <div>
        <h1>
          {title} ({data})
        </h1>
        <p>User Score: {Math.round(score)}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <GanresList>
          {genres.map(({ name, id }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </GanresList>
      </div>
    </WrapInfo>
  );
};

export default InfoMovies;
