import axios from "axios";

export const getDataSearchMovies = async (keyword = "", page = 1) => {
  const urlSearch = `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=cfe422613b250f702980a3bbf9e90716&page=${page}`;
  const response = await axios.get(urlSearch);
  const result = response.status === 200 ? response.data : [];
  return result;
};
