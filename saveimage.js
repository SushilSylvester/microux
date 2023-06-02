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
  const p5Canvas = document.getElementById('defaultCanvas0');
  const htmlCanvas = p5Canvas;
  const imageData = htmlCanvas.toDataURL('image/png');

  // Upload the image to Cloudinary
  const formData = new FormData();
  formData.append('file', imageData);

  fetch('https://api.cloudinary.com/v1_1/duldfki6j/upload', {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      console.log('Image saved on Cloudinary:', data.secure_url);
    })
    .catch(error => {
      console.error('Failed to save the image:', error);
    });
}
