// Replace 'https://connectloop.netlify.app/proxy.php' with the URL to your server-side proxy
const proxyUrl = 'https://connectloop.netlify.app/proxy.php';
const apiKey = '474577221937364';
const apiSecret = 'NdmEurAKxUGT-W_wuS7OhoYdi8k';

// Function to fetch image list
function fetchImages() {
  const cloudName = 'duldfki6j'; // Replace with your Cloudinary cloud name
  const url = `${proxyUrl}?cloudName=${cloudName}`;
  const apiUrl = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image/upload`;

  const headers = new Headers();
  headers.append('Authorization', `Basic ${btoa(`${apiKey}:${apiSecret}`)}`);

  fetch(apiUrl, {
    headers: headers
  })
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
