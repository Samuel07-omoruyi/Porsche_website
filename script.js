document.getElementById("myButton").addEventListener("click", function() {
    window.location.href = "another-page.html";
  });
  const image = document.getElementById('animated-image');

image.addEventListener('mouseover', () => {
  image.classList.add('animated');
});

image.addEventListener('mouseout', () => {
  image.classList.remove('animated');
});