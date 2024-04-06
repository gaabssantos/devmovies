import cors from 'cors';
import express from 'express';

import { connectDatabase } from './database/db.js';
import routes from './routes.js';

const app = express();
const port = 3333;

app.use(cors());
app.use(express.json());
app.use(routes);

connectDatabase()
  .then(() => {
    app.listen(port, () => console.log(`Server has started in port ${port}.`));
  })
  .catch((err) => {
    console.log(err);
  });
