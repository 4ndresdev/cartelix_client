import { Movies } from "@/interfaces/movies.interface";
import MovieCard from "@/components/ui/MovieCard";

interface MoviesGridProps {
  movies: Movies[];
  isLoading: boolean;
  isError: boolean;
  searchTerm?: string;
}

const MoviesGrid = ({
  movies,
  isLoading,
  isError,
  searchTerm,
}: MoviesGridProps) => {
  if (isLoading)
    return <p className="text-white text-center">Loading movies</p>;

  if (isError) {
    return (
      <p className="text-red-500 text-center">
        An error occurred while fetching the movies
      </p>
    );
  }

  if (movies.length === 0) {
    return (
      <p className="text-white text-center">
        Movie not found: <span className="font-bold">{searchTerm}</span>
      </p>
    );
  }

  return (
    <>
      <h2>All movies</h2>
      <ul>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </>
  );
};

export default MoviesGrid;
