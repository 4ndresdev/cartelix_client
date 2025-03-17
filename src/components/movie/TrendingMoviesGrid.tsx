import { TrendingMovies } from "@/types/movies.interface";
import { TrendingMoviesCard } from "@/components/movie";

interface TrendingMoviesGridProps {
  trendingMovies: TrendingMovies[];
  isLoading: boolean;
  isError: boolean;
  searchTerm?: string;
}

const TrendingMoviesGrid = ({
  trendingMovies,
  isLoading,
  isError,
}: TrendingMoviesGridProps) => {
  if (isLoading)
    return <p className="text-white text-center">Loading trending movies</p>;

  if (isError) {
    return (
      <p className="text-red-500 text-center">
        An error occurred while fetching the trending movies
      </p>
    );
  }

  return (
    <>
      <h2>Trending movies</h2>
      <ul>
        {trendingMovies.map((movie, index) => (
          <TrendingMoviesCard key={index} movie={movie} index={index} />
        ))}
      </ul>
    </>
  );
};

export default TrendingMoviesGrid;
