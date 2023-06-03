// Replace 'http://localhost:3000/api/images' with the URL to your proxy.js server
const proxyUrl = 'https://connectloop.netlify.app/proxy1.js';

// Function to fetch image list
function fetchImages() {
  fetch(proxyUrl)
    .then(response => response.json())
    .then(data => {
      const imageGrid = document.getElementById('image-grid');

      // Iterate through each image in the list
      data.resources.forEach(image => {
        // Generate the URL for the image
        const imageUrl = image.secure_url;

        // Create an <img> element for each image
        const img = document.createElement('img');
        img.src = imageUrl;

        // Append the image to the grid container
        imageGrid.appendChild(img);
      });
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

// Call the function to fetch images when the page loads
window.addEventListener('DOMContentLoaded', fetchImages);
