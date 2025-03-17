import { useEffect, useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import {
  getMovies,
  getTrendingMovies,
  createTrendingMovie,
} from "@/actions/movies.actions";
import { useQuery } from "@tanstack/react-query";

function useMovies() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  const movies = useQuery({
    queryKey: ["movies", { query: debouncedSearchTerm }],
    queryFn: () => getMovies(debouncedSearchTerm),
    staleTime: 1000 * 60 * 60,
  });

  const trendingMovies = useQuery({
    queryKey: ["trending_movies"],
    queryFn: getTrendingMovies,
  });

  useEffect(() => {
    if (debouncedSearchTerm && movies?.data && movies.data.length > 0) {
      const movie = {
        movie_id: movies.data[0].id,
        poster_url: movies.data[0].backdrop_path,
        searchTerm: debouncedSearchTerm,
      };
      createTrendingMovie(movie).then();
    }
  }, [movies, debouncedSearchTerm, trendingMovies]);

  return {
    movies,
    searchTerm,
    setSearchTerm,
    trendingMovies,
  };
}

export default useMovies;
