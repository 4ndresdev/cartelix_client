import { getMovieById } from "@/actions/movies.actions";
import { ShowDate, ShowTime } from "@/interfaces/movieDetails.interface";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const useMovieDetails = (movie_id: number) => {
  const [bookDate, setBookDate] = useState<ShowDate | null>(null);
  const [bookTime, setBookTime] = useState<ShowTime | null>(null);

  const movie = useQuery({
    queryKey: ["movie", { id: movie_id }],
    queryFn: () => getMovieById(movie_id),
    staleTime: 1000 * 60 * 60,
    retry: false,
  });

  return { movie, bookDate, setBookDate, bookTime, setBookTime };
};

export default useMovieDetails;
