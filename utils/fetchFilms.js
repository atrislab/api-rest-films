const dotenv = require("dotenv").config();
const fetchFilms = async (name) => {
  return fetch(
    `http://www.omdbapi.com/?apikey=${dotenv.parsed.API_KEY}&t=${name}`
  )
    .then((res) => res.json())
    .then((data) => data);
};

module.exports = {
  fetchFilms,
};
