import express from 'express';
import { resolve } from 'path';

const app = express();

app.use('/', express.static(
  resolve(__dirname, './build'),
));

app.listen(process.env.port || 3000, (err) => {
  if (err) console.log(err);
  console.log('App running!');
});
