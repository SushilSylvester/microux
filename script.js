import cloudinary from './cloudinary-core.js';

// Configure Cloudinary
const cloudName = 'duldfki6j';
const apiKey = '474577221937364';
const apiSecret = 'NdmEurAKxUGT-W_wuS7OhoYdi8k';
const cl = cloudinary.Cloudinary.new({ cloud_name: cloudName, secure: true });

// Get the container element for the image grid
const imageGrid = document.getElementById('image-grid');

// Fetch the image URLs from Cloudinary and create the image elements
cl.api.resources({ type: 'upload', max_results: 20 }, (error, result) => {
  if (error) {
    console.error('Failed to fetch images:', error);
  } else {
    result.resources.forEach((resource) => {
      const imageUrl = resource.secure_url;

      // Create an image element and set the source
      const image = document.createElement('img');
      image.src = imageUrl;

      // Append the image to the image grid container
      imageGrid.appendChild(image);
    });
  }
});

node_modules/cloudinary-core/cloudinary-core.js
