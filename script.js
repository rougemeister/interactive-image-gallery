const images = [
    {
        full: './images/black-porsche.jpg',
        thumb: './images/black-porsche.jpg',
        caption: 'Black Porsche',
        description: 'A black porsche car riding home!'
    },
    {
        full: './images/blue-chevvy.jpg',
        thumb: './images/blue-chevvy.jpg',
        caption: 'A Blue Chevrolet in the desert',
        description: 'Ride on or Ride Dry!'
    },
    {
        full: './images/gray-coupe.jpg',
        thumb: './images/gray-coupe.jpg',
        caption: 'Gray Coupe Sports Cars',
        description: 'Sleek is the new grey!'
    },
    {
        full: './images/mini-cooper.jpg',
        thumb: './images/mini-cooper.jpg',
        caption: 'An Orange Mini Cooper in the City',
        description: 'Old man in town!'
    },
    {
        full: './images/red-ferrari.jpg',
        thumb: './images/red-ferrari.jpg',
        caption: 'Red Ferrari in Showroom',
        description: 'So long slow riders!'
    },
    {
        full: './images/blue-mustang.jpg',
        thumb: './images/blue-mustang.jpg',
        caption: 'Blue Mustang',
        description: 'I am speed!'
    },
    {
        full: './images/red-american-muscle-car.jpg',
        thumb: './images/red-american-muscle-car.jpg',
        caption: 'Red American Muscle Car',
        description: 'Flex that muscle!'
    },
    {
        full: './images/yellow-lamb.jpg',
        thumb: './images/yellow-lamb.jpg',
        caption: 'Yellow Lamborghini',
        description: `Let's dance!`
    },
    {
        full: './images/white-opentop.jpg',
        thumb: './images/white-opentop.jpg',
        caption: 'White Open-top Dogde',
        description: 'Gentle Jack!'
    },
    {
        full: './images/orange-lamb.jpg',
        thumb: './images/orange-lamb.jpg',
        caption: 'Orange Lamborghini',
        description: 'Ride or die!'
    },
    {
        full: './images/grey-benz.jpg',
        thumb: './images/grey-benz.jpg',
        caption: 'Grey Benz Sports Car',
        description: 'Nothing beats Benz!'
    },
    {
        full: './images/silver-audi.jpg',
        thumb: './images/silver-audi.jpg',
        caption: 'Silver Audi',
        description: 'A car with an impossible speed!'
    },
]



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

