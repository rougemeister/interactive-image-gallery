import images from './carsData.js'

console.log(images)

const galleryContainer = document.querySelector('#gallery');
const lightbox = document.querySelector('#lightbox');
const lightboxImg = document.querySelector('#lightbox-img');
const captionText = document.querySelector('#caption');
const description = document.querySelector('.description')
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
const closeButton = document.querySelector('#close');

let currentIndex = 0;

images.forEach((image, index) => {
    const imgElement = document.createElement('img');
    console.log(imgElement)
    imgElement.src = image.thumb;
   
    imgElement.alt = image.caption;
    imgElement.classList.add('thumbnail');
    imgElement.addEventListener('click', () => openLightbox(index));
    galleryContainer.appendChild(imgElement);
});


function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = images[currentIndex].full;
    captionText.textContent = images[currentIndex].caption;
    description.textContent = images[currentIndex].description
    lightbox.classList.add('show');
    updateNavButtons();
}

function closeLightbox() {
    lightbox.classList.remove('show');
}


function showNextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        openLightbox(currentIndex);
    }
}

function showPreviousImage() {
    if (currentIndex > 0) {
        currentIndex--;
        openLightbox(currentIndex);
    }
}

function updateNavButtons() {
    currentIndex === 0 ? prevButton.classList.add('remove') : prevButton.classList.remove('remove');
    currentIndex === images.length - 1 ? nextButton.classList.add('remove') : nextButton.classList.remove('remove')
}

prevButton.addEventListener('click', showPreviousImage);
nextButton.addEventListener('click', showNextImage);
closeButton.addEventListener('click', closeLightbox);

