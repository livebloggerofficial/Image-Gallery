const galleryImages = document.querySelectorAll(".gallery-image");
const activeImage = document.querySelector(".active-image img");
const activeCaption = document.querySelector(".active-caption");

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    let imageSource = image.querySelector("img").getAttribute("src");

    let imageCaption = image.querySelector(".image-caption").innerHTML;

    activeImage.setAttribute("src", imageSource);
    activeCaption.innerHTML = imageCaption;
  });
});
