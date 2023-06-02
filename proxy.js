const https = require('https');

const options = {
  hostname: 'api.cloudinary.com',
  path: '/v1_1/duldfki6j/resources/image',
  method: 'GET'
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log(data);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.end();
