// Check if the current page is gallery.html before fetching images
if (window.location.pathname.includes('gallery.html')) {
    // Configure Cloudinary
    const cloudName = 'duldfki6j';
    const deliveryURL = `http://res.cloudinary.com/duldfki6j`;
  
    // Get the container element for the image grid
    const imageGrid = document.getElementById('image-grid');
  
    // Fetch the image URLs from Cloudinary and create the image elements
    fetch(`${deliveryURL}/image/list/sample.json`)
      .then(response => response.json())
      .then(data => {
        data.resources.forEach(resource => {
          const imageUrl = `${deliveryURL}/image/upload/${resource.public_id}.${resource.format}`;
  
          // Create an image element and set the source
          const image = document.createElement('img');
          image.src = imageUrl;
  
          // Append the image to the image grid container
          imageGrid.appendChild(image);
        });
      })
      .catch(error => {
        console.error('Failed to fetch images:', error);
      });
  }  