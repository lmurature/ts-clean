import express from 'express';
import { pingController, usersController } from './dependencies';

const app = express();
const port = 8080;

app.get('/ping', pingController.ping);
app.get('/api/users/:userId', usersController.getUser);

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server listening at port ${port}`);
});
