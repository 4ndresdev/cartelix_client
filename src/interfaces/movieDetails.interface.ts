export interface MovieDetail {
  id: number;
  title: string;
  description: string;
  duration: number;
  release_date: Date;
  rate: string;
  backdrop_path: string;
  poster_path: string;
  created_at: Date;
  movie_actors: MovieActor[];
  show_dates: ShowDate[];
}

export interface MovieActor {
  id: number;
  movie_id: number;
  actor_id: number;
  created_at: Date;
  c_actors: CActors;
}

export interface CActors {
  id: number;
  name: string;
  profile_path: string;
  created_at: Date;
}

export interface ShowDate {
  id: number;
  movie_id: number;
  date: Date;
  created_at: Date;
  show_times: ShowTime[];
}

export interface ShowTime {
  id: number;
  show_date_id: number;
  theater_id: number;
  time: string;
  price: string;
  created_at: Date;
}
