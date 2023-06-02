// Configure Cloudinary
const cloudName = 'duldfki6j'; // Replace with your Cloudinary cloud name
const apiKey = '474577221937364'; // Replace with your Cloudinary API key
const proxyUrl = 'https://connectloop.netlify.app/proxy.js'; // Update with the URL to your server-side proxy

// Function to fetch images from Cloudinary and display them in the gallery
async function fetchImages() {
  const galleryContainer = document.getElementById('image-grid');

  try {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${proxyUrl}?api_key=${apiKey}`, true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        const images = data.resources;

        // Generate HTML for each image and append it to the gallery container
        images.forEach(image => {
          const imgElement = document.createElement('img');
          imgElement.src = image.secure_url;
          galleryContainer.appendChild(imgElement);
        });
      } else {
        console.error('Failed to fetch images:', xhr.status, xhr.statusText);
      }
    };
    xhr.onerror = function () {
      console.error('Failed to fetch images:', xhr.status, xhr.statusText);
    };
    xhr.send();
  } catch (error) {
    console.error('Failed to fetch images:', error);
  }
}

// Fetch and display the images when the page is loaded
window.addEventListener('load', fetchImages);