const dotenv = require('dotenv').config()
const express = require('express');
const socket = require('socket.io');
const chalk = require('chalk');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  const io = module.exports = socket(server);
  console.log(`[+] Listening on port: ${chalk.green(port)}`)
  
  console.log(`${process.env.REDIS_URL}`);
  console.log(`${process.env.NODE_URL}`);
  console.log(`${process.env.REDIS_EXPIRE_SECONDS}`);
  console.log(`${process.argv[2]}`);

  const router = require('./routes/');
  app.use(express.json());
  app.use(cors());
  app.use('/', router)
  app.use(express.static(__dirname + '/public'));
    app.use(express.static(__dirname + '/css'));
    app.use(express.static(__dirname + '/js'));
})
