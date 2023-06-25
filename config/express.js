import express from 'express';
import userRouter from '../src/Users/userRouter';

const app = express();

app.use('/users', userRouter);

export default app;
