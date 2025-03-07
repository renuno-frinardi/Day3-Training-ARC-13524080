const express = require('express');
const path = require('path');

const app = express();
const staticPath = path.join(__dirname,'public');

app.use(express.static(staticPath));

app.get('/', (req, res) => {
  res.sendFile(staticPath + '/pages/index.html');
});

app.get('/recommendation', (req, res) => {
  res.sendFile(staticPath + '/pages/recommendation.html');
});

app.get('/forum', (req, res) => {
  res.sendFile(staticPath + '/pages/forum.html');
});

app.listen(5500, () => {
  console.log('Server listening on port 5500');
});