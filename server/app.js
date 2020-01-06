const express = require('express');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const path = require('path');
const connect = require('./js/connect.js');

const main = async () => {
    const app = express();
  
    if (!process.env.JWTPRIVATEKEY) {
      console.error('jwtPrivateKey not defined');
      process.exit(1);
    }
  
    // Database configuration
    const connection = await db.connect();
    const models = db.load(connection);
    if (process.env.TEST_ENV || process.env.NODE_ENV) {
      await connection.dropDatabase();
      await db.initialize(models);
    }
  
    db.register(app, connection, models);

      // Listening
  const host = process.env.HOST || '127.0.0.1';
  const port = process.env.PORT || 8080;
  app.listen(port, host, () =>
    console.log(
      `[App] Server is listening on http://${host}:${port}\n` +
        '========================================================',
    ),
  );
};

main();