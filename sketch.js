//Create variables here
var dog, happyDog;
var database;
var foodS, foodStock;
var dogImg, dogImg1
var database;
function preload()
{ 

dogImg = loadImage("images/dogImg.png");
dogImg1 = loadImage("images/dogImg1.png");

	//load images here
}

function setup() {
  database = firebase.database();
 
	createCanvas(500, 500);
  dog = createSprite(250,250);
  dog.addImage(dogImg);
dog.scale = 0.2;

 
}


function draw() {  
background(46,139,87);

var foodStock = database.ref('Food');
foodStock.on('value',readStock);
  //add styles here
console.log(foodStock);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }
  drawSprites();

  textSize(20);


  
text(FoodStock,250,100);
}


function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
} 