const images = [
  "233520.jpg",
  "1549304.jpg",
  "1549304.jpg",
  "2015878.jpg",
  "2015930.jpg",
  "2377065.jpg",
  "3509789.jpg",
  "3509795.jpg",
  "3509803.jpg",
  "3509859.jpg",
];
const backgroundImage = images[Math.floor(Math.random() * images.length)];
// const bgImage = document.createElement("img");
const imageUrl = `images/${backgroundImage}`;
document.body.style.backgroundImage = `url(${imageUrl})`;
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "100%"
