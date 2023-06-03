// Configure Cloudinary
const cloudName = 'duldfki6j';
const apiKey = '474577221937364';
const apiSecret = 'NdmEurAKxUGT-W_wuS7OhoYdi8k';
const proxyUrl = 'https://connectloop.netlify.app/proxy.js'; // Update with the URL to your server-side proxy

// Function to fetch images from Cloudinary and display them in the gallery
async function fetchImages() {
  const { Cloudinary } = Cloudinary.createCloudinary({ cloud_name: cloudName, secure: true });

  try {
    const { resources } = await Cloudinary.api.resources({ type: 'upload' });

    const imageGrid = document.getElementById('image-grid');

    resources.forEach((resource) => {
      const imageUrl = resource.secure_url;
      const image = document.createElement('img');
      image.src = imageUrl;
      imageGrid.appendChild(image);
    });
  } catch (error) {
    console.error('Failed to fetch images:', error);
  }
}

// Fetch and display the images when the page is loaded
window.addEventListener('load', fetchImages);