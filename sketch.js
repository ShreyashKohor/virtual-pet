//Create variables here
var dogImage,HappydogImage
var dog, happyDog, foodS, foodStock
function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png")
  HappydogImage = loadImage("images/dogImg1.png")
}

function setup() {
  database = firebase.database()
  createCanvas(500, 500);
  dog = createSprite(250,300,20,20)
  dog.addImage(dogImage)
  dog.scale= 0.1
   
  foodStock = database.ref('Food');
  foodStock.on("value",readStock)
  
}


function draw() {  
  background(46,139,87);

   if (keyWentDown(UP_ARROW)) {
     writeStock(foodS)
     dog.addImage(HappydogImage)
   }


  drawSprites();
  //add styles here
  fill("white")
  textSize(25)
  
}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  database.ref('/').update({
    Food:x
  })
  
  
}

