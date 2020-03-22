var drawing;
var button;
var colour1;
var colour2;
var colour3;
var colour4;
var colour5;
var colour6;
function setup() {
    createCanvas(710, 400);
    drawing =  createSprite(0,0,2,2);
    drawing.shapeColor = "blue";

    button = createButton('clear');
    button.position(390,100);
    button.mousePressed(setup);

    button = createButton('save');
    button.position(1065,483);

    colour1 = createSprite(700,20,10,10);
    colour1.shapeColor = "green";

    colour2 = createSprite(680,20,10,10);
    colour2.shapeColor = "orange";

    colour3 = createSprite(700,40,10,10);
    colour3.shapeColor = "pink";

    colour4 = createSprite(680,40,10,10);
    colour4.shapeColor = "red";

    colour5 = createSprite(700,60,10,10);
    colour5.shapeColor = "cyan";

    colour6 = createSprite(680,60,10,10);
    colour6.shapeColor = "yellow";
    
    background("black");
  }
  
  function draw() {

    if (mouseIsPressed === true) {
        drawing.x = mouseX;
        drawing.y = mouseY
    }

    if (mousePressedOver(colour1)) {
        drawing.shapeColor = "green";
    }

    if (mousePressedOver(colour2)) {
        drawing.shapeColor = "orange";
    }

    if (mousePressedOver(colour3)) {
        drawing.shapeColor = "pink";
    }

    if (mousePressedOver(colour4)) {
        drawing.shapeColor = "red";
    }

    if (mousePressedOver(colour5)) {
        drawing.shapeColor = "cyan";
    }

    if (mousePressedOver(colour6)) {
        drawing.shapeColor = "yellow";
    }

    drawSprites();
  }

