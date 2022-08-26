var canvas;
var backgroundImage, planeImage, track, redBull, startline, finshline;
var  backpackImage, backpackBox,birdImage,fuels, coins;
var obstacle1Image, obstacle2Image;
var database, gameState;
var form, player, playerCount;
var allPlayers, planeImage,plane1,plane2, backpackBox, coins, bird;
var cars = [];
var blastImage, heartBox, powerCoins,obstacles;

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  planeImage= loadImage("../assets/plane.jpg");
  track = loadImage("../assets/track.png");
  backpackImage = loadImage("./assets/backpack.jpg");
  backpackBox = loadImage("./assets/backpack box.png");
  coins= loadImage("./assets/coin.png");
  birdImage= loadImage("./assets/bird.jpg");
  redBull= loadImage("./assets/red bull racer.png");
  startline= loadImage("./assets/start line.png");
  finshline= loadImage("./assets/finish line.png");
  heartBox = loadImage("./assets/heart box.jpeg");
  blastImage = loadImage("./assets/blast.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
