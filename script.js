// Configure Cloudinary
const cloudName = 'duldfki6j';
const apiKey = '474577221937364';
const apiSecret = 'NdmEurAKxUGT-W_wuS7OhoYdi8k';
const uploadPreset = 'new-preset';
const cl = cloudinary.Cloudinary.new({ cloud_name: cloudName, secure: true });

// Set the delivery URL for accessing media files
const deliveryURL = 'https://res.cloudinary.com/duldfki6j';

// Set the API base URL for making API requests
const apiBaseURL = 'https://api.cloudinary.com/v1_1/duldfki6j';

// Get the container element for the image grid
const imageGrid = document.getElementById('image-grid');

// Fetch the image URLs from Cloudinary and create the image elements
cl.api.resources({ type: 'upload', max_results: 20 }, (error, result) => {
  if (error) {
    console.error('Failed to fetch images:', error);
  } else if (result && result.resources) {
    result.resources.forEach((resource) => {
      const imageUrl = `https://res.cloudinary.com/${cloudName}/image/upload/${resource.public_id}.${resource.format}`;

      // Create an image element and set the source
      const image = document.createElement('img');
      image.src = imageUrl;

      // Append the image to the image grid container
      imageGrid.appendChild(image);
    });
  } else {
    console.error('Invalid response format:', result);
  }
});

// Add an event listener to the save button
const saveButton = document.getElementById('save-button');
saveButton.addEventListener('click', saveImage);

// Function to handle saving the image
function saveImage() {
  // Convert the p5.js canvas content to a data URL
  const canvas = window.canvas; // Replace "canvas" with the variable storing your p5.js canvas
  const imageData = canvas.elt.toDataURL('image/png');

  // Upload the image to Cloudinary
  cl.upload(imageData, { upload_preset: uploadPreset }, (error, result) => {
    if (error) {
      console.error('Failed to save the image.', error);
    } else {
      console.log('Image saved on Cloudinary:', result.secure_url);
    }
  });
}