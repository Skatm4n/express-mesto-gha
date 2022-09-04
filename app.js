const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/users');
const cardRouter = require('./routes/cards');
const { createUser } = require('./controllers/users');

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  family: 4,
});

const { PORT = 3000 } = process.env;
const app = express();
app.use(express.json());

app.use((req, res, next) => {
  req.user = {
    _id: '6314ba1fac443538ed7eef33',
  };

  next();
});

app.use('/', userRouter);
app.use('/', cardRouter);
app.post('/users', createUser);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
