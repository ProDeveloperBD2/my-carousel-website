const imageUrl = [
    'images/pic1.jpg',
    'images/pic2.jpg',
    'images/pic3.jpg',
    'images/pic4.jpg',
    'images/pic5.jpeg',
    'images/pic6.jpeg',
    'images/pic7.jpeg',
    'images/pic8.jpeg',
    'images/pic9.jpeg'
]
let imagesIndex = 0;
const imagesSlider = document.getElementById('images-slider')
setInterval(() => {
    if (imagesIndex === imageUrl.length) {
        imagesIndex = 0;
    }
    const imageCarousel = imageUrl[imagesIndex];
    console.log(imagesIndex, imageCarousel)
    imagesSlider.setAttribute('src', imageCarousel)
    imagesIndex++;
}, 1000)