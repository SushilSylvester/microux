// Configure Cloudinary
const proxyUrl = 'https://connectloop.netlify.app/proxy.php'; // Replace with the path to your proxy.php file

// Configure Cloudinary
const proxyUrl = 'path-to-proxy.php'; // Replace with the path to your proxy.php file

// Function to fetch images from Cloudinary and display them in the gallery
async function fetchImages() {
  const galleryContainer = document.getElementById('image-grid');

  try {
    const response = await fetch(proxyUrl);

    if (response.ok) {
      const text = await response.text();
      console.log(text); // Log the raw response data

      const data = JSON.parse(text);
      console.log(data); // Log the parsed response data

      const images = data.resources;

      // Generate HTML for each image and append it to the gallery container
      images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.secure_url;
        galleryContainer.appendChild(imgElement);
      });
    } else {
      console.error('Failed to fetch images:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('Failed to fetch images:', error);
  }
}

// Fetch and display the images when the page is loaded
window.addEventListener('load', fetchImages);
