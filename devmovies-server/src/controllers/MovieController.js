import Movie from '../models/MovieModel.js';

export const getMovies = async (_, res) => {
  const movies = await Movie.find();

  return res.status(200).json(movies);
};

export const createMovie = async (req, res) => {
  const movie = req.body;
  const newMovie = await Movie.create(movie);

  return res.status(201).json(newMovie);
};

export const deleteMovie = async (req, res) => {
  const { id } = req.params;

  await Movie.findOneAndDelete({ _id: id });

  return res.status(200).json({ message: 'Movie deleted.' });
};

export const updateMovie = async (req, res) => {
  const { id } = req.params;
  const movie = req.body;

  const movieUpdated = await Movie.findOneAndUpdate({ _id: id }, movie, {
    new: true,
  });

  return res.status(200).json(movieUpdated);
};
