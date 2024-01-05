import express from 'express';
import cors from 'cors';
import { errorHandler } from './middleware/error.handler';
import "express-async-errors";

const app = express();
const port = process.env.PORT || 5439; 

import routes from './routes/';

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(routes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
