// Configure Cloudinary
const cloudName = 'duldfki6j';
const apiKey = '474577221937364';
const apiSecret = 'NdmEurAKxUGT-W_wuS7OhoYdi8k';
//const proxyUrl = 'https://connectloop.netlify.app/proxy.js'; // Update with the URL to your server-side proxy

// Replace 'YOUR_CLOUD_NAME' with your Cloudinary cloud name
const url = `https://res.cloudinary.com/${cloudName}/image/upload/all.json`;

// Fetch image list from Cloudinary
fetch(url)
    .then(response => response.json())
    .then(data => {
        const imageGrid = document.getElementById('imageGrid');
        
        // Iterate through each image in the list
        data.resources.forEach(image => {
            // Create an <img> element for each image
            const img = document.createElement('img');
            img.src = image.url;
            
            // Append the image to the grid container
            imageGrid.appendChild(img);
        });
    })
    .catch(error => {
        console.log('Error:', error);
    });
