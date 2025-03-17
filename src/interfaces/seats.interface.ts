export interface Seats {
  id: number;
  theater_id: number;
  row: Row;
  number: number;
  status_id: number;
  created_at: Date;
}

export enum Row {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E",
}
