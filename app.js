'use strict';

//Array to store images
Image.allImages = [];
Image.imagesSelected = [];

//Object for images
function Image(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.numTimesShown = 0;
  this.numTimesClicked = 0;
  Image.allImages.push(this);
}

//Instantiate Images
new Image('Bag', 'images/bag.jpg');
new Image('Banana Cutter', 'images/banana.jpg');
new Image('Bathroom', 'images/bathroom.jpg');
new Image('Boots', 'images/boots.jpg');
new Image('Breakfast', 'images/breakfast.jpg');
new Image('Bublegum', 'images/bubblegum.jpg');
new Image('Chair', 'images/chair.jpg');
new Image('Cthulhu', 'images/cthulhu.jpg');
new Image('Dog Duck Beak', 'images/dog-duck.jpg');
new Image('Dragon Meat', 'images/dragon.jpg');
new Image('Pen Topper', 'images/pen.jpg');
new Image('Pet Sweep', 'images/pet-sweep.jpg');
new Image('Pizza Scissors', 'images/scissors.jpg');
new Image('Shark Bag', 'images/shark.jpg');
new Image('Baby Sweep', 'images/sweep.png');
new Image('Tauntaun', 'images/tauntaun.jpg');
new Image('Unicorn', 'images/unicorn.jpg');
new Image('Dragon Tail USB', 'images/usb.gif');
new Image('Water Can', 'images/water-can.jpg');
new Image('Wine Glass', 'images/wine-glass.jpg');

//Add event listener when images is clicked
var event1 = document.getElementById('photo1');
event1.addEventListener('click', allPicks);
var event2 = document.getElementById('photo2');
event2.addEventListener('click', allPicks);
var event3 = document.getElementById('photo3');
event3.addEventListener('click', allPicks);

//Random image selector
function randomImages() {
  return Math.floor(Math.random() * Image.allImages.length);
}

//call random fx for images
function allPicks() {
  var img1Pick = randomImages();
  var img2Pick = randomImages();
  var img3Pick = randomImages();

  //Push into imagesSelected array
  Image.imagesSelected.push(img1Pick);
  Image.imagesSelected.push(img2Pick);
  Image.imagesSelected.push(img3Pick);

  //Make sure all images are different AND that image has not already been used
  while(img1Pick === img2Pick || img1Pick === img3Pick || Image.imagesSelected.includes(img1Pick)) {
    img1Pick = randomImages();
  }
  while(img2Pick === img3Pick || Image.imagesSelected.includes(img2Pick)) {
    img2Pick = randomImages();
  }
  while(Image.imagesSelected.includes(img3Pick)) {
    img3Pick = randomImages();
  }

  var imgEl1 = document.getElementById('photo1');
  imgEl1.src = Image.allImages[img1Pick].filepath;

  var imgEl2 = document.getElementById('photo2');
  imgEl2.src = Image.allImages[img2Pick].filepath;

  var imgEl3 = document.getElementById('photo3');
  imgEl3.src = Image.allImages[img3Pick].filepath;
}
allPicks();
