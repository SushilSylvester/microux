// Function to convert data URL to File object
function dataURLtoFile(dataURL, filename) {
  const arr = dataURL.split(",");
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
}

// Configure Cloudinary
const cloudName = 'duldfki6j';
const uploadPreset = 'new-preset';
const cloudinaryURL = 'https://api.cloudinary.com/v1_1/duldfki6j/upload';

// Add an event listener to the save button
const saveButton = document.getElementById('save-button');
saveButton.addEventListener('click', saveImage);

// Function to handle saving the image
async function saveImage() {
  // Convert the p5.js canvas content to a data URL
  const p5Canvas = document.getElementById('defaultCanvas0');
  const htmlCanvas = p5Canvas;
  const imageData = htmlCanvas.toDataURL('image/png');
  
  // Convert the data URL to a File object
  const file = dataURLtoFile(imageData, 'canvas.png');

  // Create a FormData object and append the file
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', uploadPreset);

  try {
    // Upload the image to Cloudinary
    const response = await fetch(cloudinaryURL, {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Image saved on Cloudinary:', data.secure_url);
    } else {
      console.error('Failed to save the image:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('Failed to save the image:', error);
  }
}
