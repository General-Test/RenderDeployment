import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/" });

export const fetchCsvs = () => API.get("/uploads");
export const createCsv = (newCsv) => API.post("/uploads", newCsv);
export const deleteCsv = (id) => API.delete(`/uploads/${id}`);
