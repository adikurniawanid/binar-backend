const { json } = require("express/lib/response");
const fs = require("fs");

const MOVIES_PATH = "./data/fav-movies.json";

const loadData = (path) => {
  const FileBuffer = fs.readFileSync(path, "utf-8");
  const results = JSON.parse(FileBuffer);
  return results;
};

const saveMovies = (movies) => {
  fs.writeFileSync(MOVIES_PATH, JSON.stringify(movies, 0, 4), "utf8");
};

const getMovieList = (req, res, next) => {
  const movies = loadData(MOVIES_PATH);
  const result = [];
  movies.forEach((element) => {
    if (element.userId === req.user.id) {
      result.push({
        id: element.id,
        movie: element.movie,
        rating: element.rating,
      });
    }
  });
  res.status(200).json(result);
};

const getMovieById = (req, res, next) => {
  try {
    const movies = loadData(MOVIES_PATH);
    let selectedMovie;
    for (let index = 0; index < movies.length; index++) {
      if (movies[index].id === Number(req.params.id)) {
        selectedMovie = movies[index];
        break;
      }
    }
    if (!selectedMovie) {
      throw {
        status: 404,
        message: "Movie not found",
      };
    } else {
      res.status(200).json(selectedMovie);
    }
  } catch (error) {
    next(error);
  }
};

const addMovie = (req, res, next) => {
  const movies = loadData(MOVIES_PATH);
  req.body.id = movies[movies.length - 1].id + 1 || 1;
  req.body.userId = req.user.id;
  movies.push(req.body);
  saveMovies(movies);
  res.status(201).json({ message: "Successfuly added movie" });
};

const updateMovie = (req, res, next) => {
  try {
    const movies = loadData(MOVIES_PATH);
    let isExist = false;
    for (let index = 0; index < movies.length; index++) {
      if (movies[index].id === Number(req.params.id)) {
        movies[index].rating = req.body.rating
          ? req.body.rating
          : movies[index].rating;
        movies[index].review = req.body.review
          ? req.body.review
          : movies[index].review;
        isExist = true;
        break;
      }
    }
    if (isExist) {
      saveMovies(movies);
      res.status(200).json({ message: "Successfuly updated movie" });
    } else {
      throw {
        status: 404,
        message: "Movie not found",
      };
    }
  } catch (error) {
    next(error);
  }
};

const deleteMovie = (req, res, next) => {
  try {
    const movies = loadData(MOVIES_PATH);
    let newMovies = movies.filter(
      (movie) => movie.id !== Number(req.params.id)
    );
    saveMovies(newMovies);
    if (movies.length !== newMovies.length) {
      res.status(200).json({ message: "Successfuly deleted movie" });
    } else {
      throw {
        status: 404,
        message: "Movie not found",
      };
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getMovieById,
  getMovieList,
  addMovie,
  updateMovie,
  deleteMovie,
  loadData,
};
