var dog,sadDog,happyDog;
var feed,addfood,foodOBJ;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feeddog);

  addfood=createButton("Add food");
  addfood.position(800,95);
  addfood.mousePressed(addfoods);

}

function draw() {
  background(46,139,87);
  database=firbase.database();

  foodOBJ.display();
  drawSprites();
}

//function to read food Stock
function readFoodStock(data){
  foodOBJ=data.val();
}


//function to update food stock and last fed time
function updateFoodStock(data){
  database.ref('/').update({
    Food:x
  })
}

function deductFood(data){
  foodOBJ=foodOBJ-1;
  database.ref('/').update({
    Food:FoodOBJ
  })
}


function feeddog(){
  dog.addImage(happydog);

  if(foodOBJ.getFoodStock()<=0){
    foodOBJ.updateFoodStock(foodOBJ,getFoodStaock()*0);
  }else{
    foodOBJ.updateFoodStock(foodOBJ.getFoodStock()-1);
  }
  }



function addfoods(){
  FoodS++;
  database.ref('/').update({
    Food:foodS

  })
}
// completed: 1,2,3,4,7,8,9,10,11,12
