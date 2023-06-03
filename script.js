// Configure Cloudinary
const proxyUrl = 'https://connectloop.netlify.app/proxy.php'; // Replace with the path to your proxy.php file

// Function to fetch images from Cloudinary and display them in the gallery
async function fetchImages() {
  const galleryContainer = document.getElementById('image-grid');

  try {
    const response = await fetch(proxyUrl);

    if (response.ok) {
      const data = await response.json();
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
