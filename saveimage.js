// Configure Cloudinary
const cloudName = 'duldfki6j';
const apiKey = '474577221937364';
const apiSecret = 'NdmEurAKxUGT-W_wuS7OhoYdi8k';
const uploadPreset = 'new-preset';
const cl = cloudinary.Cloudinary.new({ cloud_name: cloudName, secure: true });

// Add an event listener to the save button
const saveButton = document.getElementById('save-button');
saveButton.addEventListener('click', saveImage);

// Function to handle saving the image
function saveImage() {
  // Convert the p5.js canvas content to a data URL
  const canvas = document.querySelector('canvas'); // Replace "canvas" with the selector for your p5.js canvas
  const imageData = canvas.toDataURL('image/png');

  // Upload the image to Cloudinary
  cl.upload(imageData, { upload_preset: uploadPreset }, (error, result) => {
    if (error) {
      console.error('Failed to save the image.', error);
    } else {
      console.log('Image saved on Cloudinary:', result.secure_url);
    }
  });
}
