export const minutesToHours = (minutes: number) => {
  return `${Math.floor(minutes / 60)}h ${minutes % 60}min`;
};
