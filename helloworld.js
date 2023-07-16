// before run
//npm install express

// to run 
// npm start

'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = 'localhost';
const OS = require('os');
const ENV = 'DEV';
const START = Date.now();

// Function
function elapsed() {
    const running = (Date.now() - START) / 1000;
    const minutes = Math.floor(running / 60);
    const seconds = Math.floor(running % 60);
    const hours = Math.floor(minutes / 60);
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// App
const app = express();
app.get('/', (req, res) => {
  res.statusCode = 200;
  const msg = `<html><body><h1>Hello World from Weng Siong (Node)!</h1></body></html> (up ${elapsed()})\n`;
  res.send(msg);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);