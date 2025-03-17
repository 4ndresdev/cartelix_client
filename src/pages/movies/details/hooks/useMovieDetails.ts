import { getMovieById } from "@/actions/movies.actions";
import { getSeatsByTheaterId } from "@/actions/seats.actions";
import { ShowDate, ShowTime } from "@/interfaces/movieDetails.interface";
import { Seats } from "@/interfaces/seats.interface";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const useMovieDetails = (movie_id: number) => {
  const [bookDate, setBookDate] = useState<ShowDate | null>(null);
  const [bookTime, setBookTime] = useState<ShowTime | null>(null);
  const [seats, setSeats] = useState<Seats[] | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<Seats[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const movie = useQuery({
    queryKey: ["movie", { id: movie_id }],
    queryFn: () => getMovieById(movie_id),
    staleTime: 1000 * 60 * 60,
    retry: false,
  });

  useEffect(() => {
    setBookTime(null);
    setSeats(null);
  }, [bookDate]);

  useEffect(() => {
    if (bookTime && bookTime.theater_id) {
      const getSeats = async () => {
        const response = await getSeatsByTheaterId(bookTime.theater_id);
        setSeats(response);
      };
      getSeats();
    }
  }, [bookTime]);

  useEffect(() => {
    if (bookTime?.price && selectedSeats.length > 0) {
      const total = selectedSeats.length * Number(bookTime.price);
      setTotalPrice(total);
    }
  }, [selectedSeats, bookTime]);

  return {
    movie,
    bookDate,
    setBookDate,
    bookTime,
    setBookTime,
    seats,
    setSelectedSeats,
    selectedSeats,
    totalPrice,
  };
};

export default useMovieDetails;
