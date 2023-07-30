import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchPlace = (id) => API.get(`/places/${id}`);
export const fetchPlaces = (page) => API.get(`/places?page=${page}`);
export const fetchPlacesBySearch = (searchQuery) =>
  API.get(
    `/places/search?searchQuery=${searchQuery.search || "none"}&tags=${
      searchQuery.tags
    }`
  );
export const createPlace = (newPlace) => API.post("/places", newPlace);
export const likePlace = (id) => API.patch(`/places/${id}/likePlace`);
export const comment = (value, id) =>
  API.post(`/places/${id}/commentPlace`, { value });
export const updatePlace = (id, updatedPlace) =>
  API.patch(`/places/${id}`, updatedPlace);
export const deletePlace = (id) => API.delete(`/places/${id}`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
