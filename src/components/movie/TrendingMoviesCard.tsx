import { TrendingMovies } from "@/types/movies.interface";

interface TrendingMoviesCardProps {
  movie: TrendingMovies;
  index: number;
}

const TrendingMoviesCard = ({ movie, index }: TrendingMoviesCardProps) => {
  return (
    <li key={movie.id}>
      <div className="trending-card">
        <span>{index + 1}</span>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_url}`}
          alt={movie.searchTerm}
        />
        <div className="trending-shadow" />
        <div className="popcorn absolute bottom-0 right-0 m-5 text-xl">🍿</div>
      </div>
    </li>
  );
};

export default TrendingMoviesCard;
