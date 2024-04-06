import express from 'express';

const app = express();
const port = 3333;
app.use(express.json());

app.get('/', (_, res) => res.json('Hello world!'));

app.listen(port, () => console.log(`Server has started in port ${port}.`));
