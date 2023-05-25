import express from 'express';
import fetch from 'node-fetch';

const app = express();

app.listen(4000, () => {
  console.info('Listening on port 4000');
});

fetch('https://api.github.com')
  .then((response) => response.json())
  .then(console.info, console.error);
