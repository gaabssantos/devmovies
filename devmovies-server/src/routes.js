import { Router } from 'express';
import {
  getMovies,
  createMovie,
  deleteMovie,
  updateMovie,
} from './controllers/MovieController.js';

const routes = Router();

routes.get('/movies', getMovies);
routes.post('/movies', createMovie);
routes.delete('/movies/:id', deleteMovie);
routes.put('/movies/:id', updateMovie);

export default routes;
