import cartelixAPI from "@/api/movies.api";
import { MovieDetail } from "@/interfaces/movieDetails.interface";
import { Movies, TrendingMovies } from "@/interfaces/movies.interface";

export const getMovies = async (searchTerm: string): Promise<Movies[]> => {
  const path = searchTerm ? `/movies/search?query=${searchTerm}` : "/movies";
  const { data } = await cartelixAPI.get<Movies[]>(path);
  return data;
};

export const getMovieById = async (id: number): Promise<MovieDetail> => {
  const { data } = await cartelixAPI.get<MovieDetail>(`/movies/${id}/details`);
  return data;
};

export const getTrendingMovies = async (): Promise<TrendingMovies[]> => {
  const { data } = await cartelixAPI.get<TrendingMovies[]>("/movies/trending");
  return data;
};

export const createTrendingMovie = async (
  movie: Omit<TrendingMovies, "id" | "count" | "created_at">
): Promise<TrendingMovies> => {
  const { data } = await cartelixAPI.post<TrendingMovies>(
    "/movies/trending",
    movie
  );
  return data;
};
