// Configure Cloudinary
const cloudName = 'duldfki6j';
const apiKey = '474577221937364';
const apiSecret = 'NdmEurAKxUGT-W_wuS7OhoYdi8k';

// Set the API base URL for making API requests
const apiBaseURL = 'https://api.cloudinary.com/v1_1/duldfki6j';

// Add an event listener to the save button
const saveButton = document.getElementById('save-button');
saveButton.addEventListener('click', saveImage);

// Function to handle saving the image
function saveImage() {
  // Convert the p5.js canvas content to a data URL
  const canvas = document.getElementById('defaultCanvas0');
  const imageData = canvas.toDataURL('image/png');

  // Upload the image to Cloudinary
  fetch(`${apiBaseURL}/upload`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      file: imageData,
      upload_preset: 'new-preset',
    }),
  })
    .then(response => response.json())
    .then(result => {
      console.log('Image saved on Cloudinary:', result.secure_url);
    })
    .catch(error => {
      console.error('Failed to save the image:', error);
    });
}
