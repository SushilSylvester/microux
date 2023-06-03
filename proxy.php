<?php
$cloudName = 'YOUR_CLOUD_NAME';
$url = "https://api.cloudinary.com/v1_1/$cloudName/resources/image/upload";
$response = file_get_contents($url);
header('Content-Type: application/json');
echo $response;
?>
