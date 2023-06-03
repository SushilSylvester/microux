const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

app.get('/api/images', (req, res) => {
  const cloudName = 'duldfki6j'; // Replace with your Cloudinary cloud name
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image/upload`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      res.setHeader('Content-Type', 'application/json');
      res.send(data);
    })
    .catch(error => {
      console.log('Error:', error);
      res.status(500).send('Error fetching images');
    });
});

app.listen(port, () => {
  console.log(`Proxy server running on port ${port}`);
});
