import express from 'express';

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
  res.send('Hello');
});

userRouter.get('/:name', (req, res) => {
  const { name } = req.params;
  res.send(`Hello, ${name}. Welcome.`);
});

export default userRouter;
