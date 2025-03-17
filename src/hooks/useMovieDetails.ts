import { createBooking } from "@/services/booking.actions";
import { getMovieById } from "@/services/movies.actions";
import { getSeatsByTheaterId } from "@/services/seats.actions";
import { ShowDate, ShowTime } from "@/types/movieDetails.interface";
import { Seats } from "@/types/seats.interface";
import { sleep } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const useMovieDetails = (movie_id: number) => {
  const navigate = useNavigate();
  const [bookDate, setBookDate] = useState<ShowDate | null>(null);
  const [bookTime, setBookTime] = useState<ShowTime | null>(null);
  const [seats, setSeats] = useState<Seats[] | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<Seats[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [email, setEmail] = useState<string | null>(null);
  const [submitLoading, setSubmitLoading] = useState<boolean>(false);

  const movie = useQuery({
    queryKey: ["movie", { id: movie_id }],
    queryFn: () => getMovieById(movie_id),
    staleTime: 1000 * 60 * 60,
    retry: false,
  });

  const bookTickets = async () => {
    if (bookTime && bookTime.id && email && selectedSeats.length > 0) {
      setSubmitLoading(true);
      await toast
        .promise(
          () =>
            createBooking({
              show_time_id: bookTime.id,
              email: email,
              seat_ids: selectedSeats.map((seat) => seat.id),
            }),
          {
            loading: "Booking tickets...",
            success: "Tickets booked successfully! Check your email",
            error: "Error booking tickets, try again in a few minutes",
          }
        )
        .catch(() => {
          setSubmitLoading(false);
        })
        .finally(async () => {
          await sleep(2000);
          navigate("/");
        });
    }
  };

  useEffect(() => {
    setBookTime(null);
    setSeats(null);
  }, [bookDate]);

  useEffect(() => {
    setSelectedSeats([]);
  }, [bookTime]);

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
    } else {
      setTotalPrice(0);
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
    email,
    setEmail,
    bookTickets,
    submitLoading,
  };
};

export default useMovieDetails;
