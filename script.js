// Configure Cloudinary
const cloudName = 'duldfki6j';

// Function to fetch images from Cloudinary and display them in the gallery
async function fetchImages() {
  try {
    const response = await fetch(`${proxyUrl}?api_key=${474577221937364}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${474577221937364}`
      },
      mode: 'cors'
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data); // Log the response data
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
