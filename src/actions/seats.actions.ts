import cartelixAPI from "@/api/movies.api";
import { Seats } from "@/interfaces/seats.interface";

export const getSeatsByTheaterId = async (
  theaterId: number
): Promise<Seats[]> => {
  const { data } = await cartelixAPI.get<Seats[]>(`/seats/${theaterId}`);
  return data;
};
