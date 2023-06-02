import { Cloudinary } from './cloudinary-core/cloudinary-core.js';

// Configure Cloudinary
const cloudName = 'duldfki6j';
const apiKey = '474577221937364';
const apiSecret = 'NdmEurAKxUGT-W_wuS7OhoYdi8k';
const cl = cloudinary.Cloudinary.new({ cloud_name: cloudName, secure: true });

// Add an event listener to the save button
const saveButton = document.getElementById('save-button');
saveButton.addEventListener('click', saveImage);

// Function to handle saving the image
function saveImage() {
  // Convert the canvas content to a data URL
  const canvas = document.getElementById('myCanvas');
  const imageData = canvas.toDataURL('image/png');

  // Upload the image to Cloudinary
  cl.upload(imageData, (error, result) => {
    if (error) {
      console.error('Failed to save the image.');
    } else {
      console.log('Image saved on Cloudinary:', result.secure_url);
    }
  });
}
