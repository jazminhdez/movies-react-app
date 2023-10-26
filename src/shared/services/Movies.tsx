import axios from "axios";
import config from "../../config.tsx";

export async function getMovies() {
  let response = await axios.get(
    `${config.apiBaseURL}discover/movie${config.apiConfig}&sort_by=popularity.desc&page=1`
  );
  return response.data;
}
