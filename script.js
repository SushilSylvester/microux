// Configure Cloudinary
const cloudName = 'duldfki6j';
const apiKey = '474577221937364';
const apiSecret = 'NdmEurAKxUGT-W_wuS7OhoYdi8k';
//const proxyUrl = 'https://connectloop.netlify.app/proxy.js'; // Update with the URL to your server-side proxy


// Function to fetch image list
function fetchImages() {
  const url = `https://res.cloudinary.com/${cloudName}/image/upload/ticket.json`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const imageGrid = document.getElementById('image-grid');

      // Iterate through each image in the list
      data.resources.forEach(image => {
        // Generate the URL for the image
        const imageUrl = `https://res.cloudinary.com/${cloudName}/image/upload/${image.public_id}.${image.format}`;

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
