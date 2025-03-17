import cartelixAPI from "@/api/movies.api";
import { Booking } from "@/types/booking.interface";
import { sleep } from "@/utils/helpers";

interface BookingProps {
  show_time_id: number;
  email: string;
  seat_ids: number[];
}

export const createBooking = async ({
  show_time_id,
  email,
  seat_ids,
}: BookingProps): Promise<Booking> => {
  await sleep(3000);
  const { data } = await cartelixAPI.post<Booking>("/booking", {
    show_time_id,
    email,
    seat_ids,
  });
  return data;
};
