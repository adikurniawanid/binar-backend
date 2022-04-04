const express = require("express");
const router = express.Router();
const {
  getMovieList,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie,
  loadData,
} = require("../controllers/MovieController");

const USER_PATH = "./data/user.json";
const MOVIE_PATH = "./data/fav-movies.json";

router.use((req, res, next) => {
  if (!req.headers.authorization) {
    res.status(401).json({
      message: "Unauthorized request",
    });
  } else {
    const id = req.headers.authorization.split(":")[0];
    const name = req.headers.authorization.split(":")[1];

    const users = loadData(USER_PATH);
    let selectedUser;

    for (let index = 0; index < users.length; index++) {
      if (users[index].id === Number(id) && users[index].name === name) {
        selectedUser = users[index];
      }
    }

    if (selectedUser) {
      req.user = selectedUser;
      next();
    } else {
      res.status(401).json({
        message: "Unauthorized request",
      });
    }
  }
});

router.get("/", getMovieList);
router.get("/:id", getMovieById);
router.post("/", addMovie);
router.put(
  "/:id",
  (req, res, next) => {
    const movies = loadData(MOVIE_PATH);
    let selectedMovie;

    for (let index = 0; index < movies.length; index++) {
      if (movies[index].id === Number(req.params.id)) {
        selectedMovie = movies[index];
        break;
      }
    }

    if (selectedMovie.userId === req.user.id) {
      next();
    } else {
      res.status(401).json({
        message: "Cannot change data. unauthorized",
      });
    }
  },
  updateMovie
);
router.delete(
  "/:id",
  (req, res, next) => {
    const movies = loadData(MOVIE_PATH);
    let selectedMovie;

    for (let index = 0; index < movies.length; index++) {
      if (movies[index].id === Number(req.params.id)) {
        selectedMovie = movies[index];
        break;
      }
    }

    if (selectedMovie.userId === req.user.id) {
      next();
    } else {
      res.status(401).json({
        message: "Cannot change data. unauthorized",
      });
    }
  },
  deleteMovie
);

router.use((err, req, res, next) => {
  if (err.status) {
    res.status(err.status).json({ message: err.message });
  } else {
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
