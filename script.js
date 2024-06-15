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
        description: 'A black porsche car riding home!'
    },
    {
        full: './images/gray-coupe.jpg',
        thumb: './images/gray-coupe.jpg',
        caption: 'Gray Coupe Sports Cars',
        description: 'A black porsche car riding home!'
    },
    {
        full: './images/mini-cooper.jpg',
        thumb: './images/mini-cooper.jpg',
        caption: 'An Orange Mini Cooper in the City',
        description: 'A black porsche car riding home!'
    },
    {
        full: './images/red-ferrari.jpg',
        thumb: './images/red-ferrari.jpg',
        caption: 'Red Ferrari in Showroom',
        description: 'A black porsche car riding home!'
    },
    {
        full: './images/blue-mustang.jpg',
        thumb: './images/blue-mustang.jpg',
        caption: 'Blue Mustang',
        description: 'A black porsche car riding home!'
    },
    {
        full: './images/red-american-muscle-car.jpg',
        thumb: './images/red-american-muscle-car.jpg',
        caption: 'Red American Muscle Car',
        description: 'A black porsche car riding home!'
    },
    {
        full: './images/yellow-lamb.jpg',
        thumb: './images/yellow-lamb.jpg',
        caption: 'Yellow Lamborghini',
        description: 'A black porsche car riding home!'
    },
    {
        full: './images/white-opentop.jpg',
        thumb: './images/white-opentop.jpg',
        caption: 'White Open-top Dogde',
        description: 'A black porsche car riding home!'
    },
    {
        full: './images/orange-lamb.jpg',
        thumb: './images/orange-lamb.jpg',
        caption: 'Orange Lamborghini',
        description: 'A black porsche car riding home!'
    },
    {
        full: './images/grey-benz.jpg',
        thumb: './images/grey-benz.jpg',
        caption: 'Grey Benz Sports Car',
        description: 'A black porsche car riding home!'
    },
    {
        full: './images/silver-audi.jpg',
        thumb: './images/silver-audi.jpg',
        caption: 'Blue Mustang',
        description: 'A black porsche car riding home!'
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
