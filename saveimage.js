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
function saveImageToCloudinary(canvas) {
    const htmlCanvas = canvas.elt;
    const imageData = htmlCanvas.toDataURL('image/png');
  
    // Upload the image to Cloudinary
    cl.upload(imageData, { upload_preset: uploadPreset })
      .then(result => {
        console.log('Image saved on Cloudinary:', result.secure_url);
      })
      .catch(error => {
        console.error('Failed to save the image:', error);
      });
}

