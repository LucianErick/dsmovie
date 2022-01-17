import axios from "axios";
import { Movie } from "../Types/movie";
import { MoviePage } from "../Types/moviePage";

const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8080";

const api = axios.create({
  baseURL: BASE_URL,
});

export const getAllMovies = async (page: number, size: number) => {
  let response = {};
  await api.get(`/movies?size=${size}&page=${page}`).then((res) => {
    response = res.data;
  });
  return response as MoviePage;
};

export const getMovieById = async (id: string) => {
  let response = {};
  await api.get(`/movies/${id}`).then((res) => {
    response = res.data;
  });
  return response as Movie;
};
