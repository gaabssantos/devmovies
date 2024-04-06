import { Router } from 'express';
import {
  getMovies,
  createMovie,
  deleteMovie,
  updateMovie,
} from './controllers/MovieController.js';

import {
  getCategories,
  createCategory,
  deleteCategory,
  updateCategory,
} from './controllers/CategoryController.js';

const routes = Router();

routes.get('/movies', getMovies);
routes.post('/movies', createMovie);
routes.delete('/movies/:id', deleteMovie);
routes.put('/movies/:id', updateMovie);

routes.get('/categories', getCategories);
routes.post('/categories', createCategory);
routes.delete('/categories/:id', deleteCategory);
routes.put('/categories/:id', updateCategory);

export default routes;
