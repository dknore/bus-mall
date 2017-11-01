'use strict';

//Array to store images
Image.allImages = [];
// Image.container = document.getElementsByID('images');
Image.justViewed = [];
Image.results = document.getElementById('results');
Image.TotalClicks = 0;

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

//Add event listener when images is clicked AND
var event1 = document.getElementById('photo1');
event1.addEventListener('click', allPicks);
event1.addEventListener('click', handleClick);
var event2 = document.getElementById('photo2');
event2.addEventListener('click', allPicks);
event2.addEventListener('click', handleClick);
var event3 = document.getElementById('photo3');
event3.addEventListener('click', allPicks);
event3.addEventListener('click',handleClick);

//Random function
function randomImages() {
  return Math.floor(Math.random() * Image.allImages.length);
}

//call random function for images
function allPicks() {
  var img1Pick = randomImages();
  var img2Pick = randomImages();
  var img3Pick = randomImages();

  //Push into justViewed array
  Image.justViewed.push(img1Pick);
  Image.justViewed.push(img2Pick);
  Image.justViewed.push(img3Pick);

  //Make sure all images are truly random (different AND hasn't already been used
  while(img1Pick === img2Pick || img1Pick === img3Pick || Image.justViewed.includes(img1Pick)) {
    img1Pick = randomImages();
  }
  while(img2Pick === img3Pick || Image.justViewed.includes(img2Pick)) {
    img2Pick = randomImages();
  }
  while(Image.justViewed.includes(img3Pick)) {
    img3Pick = randomImages();
  }

  //manipulate the DOM
  var imgEl1 = document.getElementById('photo1');
  imgEl1.src = Image.allImages[img1Pick].filepath;

  var imgEl2 = document.getElementById('photo2');
  imgEl2.src = Image.allImages[img2Pick].filepath;

  var imgEl3 = document.getElementById('photo3');
  imgEl3.src = Image.allImages[img3Pick].filepath;
}
allPicks();

function handleClick() {
  console.log('Clicks =', Image.totalClicks);
  if(Image.totalClicks > 24) {
    Image.container.removeEventListener('click', handleClick);
    createResults();
  } else
    Image.totalClicks++;

  for(var i = 0; i < Image.name.length; i++) {
    if(event.target.id === Image.allImages[i].name) {
      Image.allImages[i].numTimesClicked++;
      Image.allImages[i].numTimesShown++;
      console.log(event.target.id + ' has ' + Image.allImages[i].numTimesClicked + ' votes in ' + Image.allImages[i].numTimesShown + ' views');
    }
  }
}

function createResults() {
  for(var i = 0; i < Image.allImages.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = Image.allImages[i].name + ' has:  ' + Image.allImages[i].numTimesClicked + ' votes in ' + Image.allImages[i].numTimesShown + ' views';
    Image.results.appendChild(liEl);
  }
}
createResults();
