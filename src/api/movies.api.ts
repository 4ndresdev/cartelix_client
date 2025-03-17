import axios from "axios";

const cartelixAPI = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
  headers: {
    Accept: "application/json",
  },
});

export default cartelixAPI;
