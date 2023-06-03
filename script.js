// Configure Cloudinary
const cloudName = 'duldfki6j';
const apiKey = '474577221937364';
const apiSecret = 'NdmEurAKxUGT-W_wuS7OhoYdi8k';
//const proxyUrl = 'https://connectloop.netlify.app/proxy.js'; // Update with the URL to your server-side proxy

// Fetch image list from Cloudinary using the Cloudinary SDK
cloudinary.v2.api.resources(
  { type: 'upload', prefix: 'your-prefix-if-any/', max_results: 10 },
  (error, result) => {
    if (error) {
      console.log('Error:', error);
      return;
    }

    const imageGrid = document.getElementById('image-grid');

    // Iterate through each image in the list
    result.resources.forEach(image => {
      // Generate the URL for the image using the Transformation API
      const imageUrl = cloudinary.url(image.public_id, {
        cloud_name: cloudName,
        width: 300,
        height: 300,
        crop: 'fill'
      });

      // Create an <img> element for each image
      const img = document.createElement('img');
      img.src = imageUrl;

      // Append the image to the grid container
      imageGrid.appendChild(img);
    });
  }
);
