import express from 'express';
import { User } from './core/entities/users';
import { retrieveUserUsecase } from './dependencies';

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/api/users/:userId', async (req, res) => {
  try {
    const { user } = await retrieveUserUsecase.get({
      userId: parseInt(req.params.userId, 10),
    });
    res.json(user);
  } catch (err) {
    res.json(err);
  }
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server listening at port ${port}`);
});
