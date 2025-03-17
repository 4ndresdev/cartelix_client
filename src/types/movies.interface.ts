export interface Movies {
  id: number;
  title: string;
  description: string;
  duration: number;
  release_date: Date;
  rate: string;
  backdrop_path: string;
  poster_path: string;
  created_at: Date;
}

export interface TrendingMovies {
  id: number;
  movie_id: number;
  searchTerm: string;
  count: number;
  poster_url: string;
  created_at: Date;
}
