const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('index.html');
});

app.get('/about', (req, res) => {
  res.send('I am Nguyen Tuan Hiep');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});