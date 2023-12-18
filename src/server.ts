import app from './app';
import { DatabaseSource } from './config/typeorm.config';

DatabaseSource
  .initialize()
  .then(() => {
    app.listen(3009, () => {
      console.log("http://localhost:3009");
    })
  })
  .catch(err => {
    console.log(err);
  })