const images = ["assets/img/img1.jpg", "assets/img/img2.jpg", "assets/img/img3.jpg"];
let currentImageIndex = 0;

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const galleryImage = document.getElementById("galleryImage");

function showImage() {
  galleryImage.src = images[currentImageIndex];
}

prevBtn.addEventListener("click", function () {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  showImage();
});

nextBtn.addEventListener("click", function () {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  showImage();
});

function sayHello() {
  console.log("Я учу JavaScript!");
}
