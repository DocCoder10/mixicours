document.addEventListener('DOMContentLoaded', function() {
  // Load the header from the 'pages' folder
  fetch('pages/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    })
    .catch(error => console.error('Error loading header:', error));

  // Load the footer from the 'pages' folder
  fetch('pages/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));
});
