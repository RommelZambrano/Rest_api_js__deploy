import app from './app';
import './database';
import config from './config';

app.listen(config.PORT, config.HOST, function () {
    console.log(`Server listening on port ${config.PORT}`);
  });