import cloudinary from 'cloudinary';

// Configure Cloudinary with your credentials
cloudinary.config({
  cloud_name: 'Yduldfki6j',
  api_key: '474577221937364',
  api_secret: 'NdmEurAKxUGT-W_wuS7OhoYdi8k'
});

// Now you can use the Cloudinary library in your code
// For example, to upload an image:
cloudinary.uploader.upload('path/to/image.jpg', (error, result) => {
  if (error) {
    console.error('Failed to upload image:', error);
  } else {
    console.log('Image uploaded:', result.secure_url);
  }
});
